import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const { REACT_APP_API_URL } = process.env;
const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

export const getReviews = createAsyncThunk(
  'reviews/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews');
      console.log('response', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
