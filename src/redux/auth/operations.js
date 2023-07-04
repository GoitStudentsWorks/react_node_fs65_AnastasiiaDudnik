import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import config from '../../config';
// const { REACT_APP_API_URL } = process.env;
console.log(config);
const instance = axios.create({
  baseURL: config.apiUrl,
});

const setAuthHeader = token => {
  return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/users/refresh', {
          refreshToken,
        });
        setAuthHeader(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await instance.post('/users/register', user);
      setAuthHeader(response.data.token);
      if (response) {
        Notiflix.Notify.success('Register success');
      }
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        Notiflix.Notify.failure('This mail is already in use');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await instance.post('/users/login', user);
    setAuthHeader(response.data.token);
    if (response) {
      Notiflix.Notify.success('LogIn success');
    }
    return response.data;
  } catch (error) {
    if (error) {
      Notiflix.Notify.failure('Invalid email or password');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await instance.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async ({ avatarURL, username, birthday, phone, skype, email }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatarURL', avatarURL);
      formData.append('name', username);
      formData.append('email', email);
      formData.append('phone', phone || '');
      formData.append('skype', skype || '');
      formData.append('birthday', birthday || '');
      const response = await instance.patch('users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseData = {
        status: response.status,
        data: response.data,
      };

      if (response.status === 200) {
        Notiflix.Notify.success('Update succes');
      }
      return responseData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
