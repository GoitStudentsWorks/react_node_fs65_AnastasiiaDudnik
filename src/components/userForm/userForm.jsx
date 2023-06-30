import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/operations';
import { ErrorMessage, useFormik } from 'formik';
import {
  Typography,
  SvgIcon,
  Box,
  Avatar,
  Button,
  InputBase,
} from '@mui/material';
import Sprite from 'icons/sprite.svg';
import * as Yup from 'yup';

const borderColor = {
  validColor: '1px solid rgba(17, 17, 17, 0.15)',
  invalidColor: '#E74A3B',
};

const phoneRegexp = /^(\d{2})\s\((\d{3})\)\s(\d{3})\s(\d{2})\s(\d{2})$/;
const skypeNumberRegexp = /^\+[1-9]\d{0,2}[.-]?\d{1,14}$/;
const birthdayRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short name!')
    .max(35, 'Too Long name!')
    .required('Name is required'),
  birthday: Yup.string()
    .notRequired()
    .matches(birthdayRegexp, {
      message: 'Invalid birthday',
    })
    .notRequired(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegexp, {
      message: 'Invalid phone number',
    })
    .notRequired(),
  skype: Yup.string()
    .max(16, 'Too Long name skype!')
    .matches(skypeNumberRegexp, {
      message: 'Invalid skype name',
    })
    .notRequired(),
});
const UserForm = () => {
  const userState = useSelector(selectUser);
  const [selectAvatar, setSelectAvatar] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    username: userState.name,
    avatarURL: userState.avatarURL,
    email: userState.email,
    birthday: userState.birthday || '',
    phone: userState.phone || '',
    skype: userState.skype || '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(updateUser(values));
    },
  });
  const handleAvatarUpload = event => {
    const file = event.currentTarget.files[0];
    const avatarURL = URL.createObjectURL(file);

    setSelectAvatar({
      path: avatarURL,
      file: file,
    });

    formik.setFieldValue('avatarURL', avatarURL);
    setIsFormChanged(true);
  };

  const isValid = field =>
    formik.touched[field] && formik.errors[field]
      ? 'is-invalid'
      : formik.touched[field]
      ? 'is-valid'
      : '';

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          width: { xs: '335px', md: '704px', lg: '1087px' },
          borderRadius: '16px',
          padding: { xs: '59px 0px 40px 0px', md: '40px 0px 40px 0px' },
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Box>
          <Avatar
            alt="avatar"
            src={selectAvatar.path ? selectAvatar.path : ''}
            sx={{
              width: { xs: '72px', md: '124px' },
              height: { xs: '72px', md: '124px' },
              backgroundColor: '#F8F8F8',
              border: '2px solid #3E85F3',
              mr: 'auto',
              ml: 'auto',
              mb: '18px',
              position: { xs: 'absolute', md: 'inherit' },
              top: { xs: '-36px', md: 0 },
              left: { xs: '132px', md: 0 },
            }}
          >
            <SvgIcon
              stroke="currentColor"
              sx={{ width: '48px', height: '48px' }}
            >
              <use href={`${Sprite}#userAvatar`} />
            </SvgIcon>
          </Avatar>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '4%', md: '18%', lg: '22%' },
              right: { xs: '40%', md: '44%', lg: '46%' },
              cursor: 'pointer',
            }}
          >
            <input
              id="avatarURL"
              type="file"
              name="avatarURL"
              onChange={handleAvatarUpload}
              onBlur={formik.handleBlur}
              style={{ display: 'none' }}
            />
            <label htmlFor="avatarURL">
              <SvgIcon stroke="currentColor">
                <use href={`${Sprite}#addAvatar`} />
              </SvgIcon>
            </label>
          </Box>
        </Box>
        <Typography
          sx={{
            color: '#343434',
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '18px',
            textAlign: 'center',
          }}
        >
          {userState.name}
        </Typography>
        {/* <Typography
          sx={{
            color: '#343434',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '14px',
            textAlign: 'center',
          }}
        >
          User
        </Typography> */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '18px', md: '26px', lg: '50px' },
            flexDirection: { xs: 'column', lg: 'row' },
            width: { xs: '299px', md: '354px', lg: '758px' },
            justifyContent: { lg: 'center' },
            mt: { xs: '40px', lg: '44px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '18px', md: '24px' },
            }}
          >
            <label>
              <Typography
                sx={{
                  color: '#111',
                  fontSize: '12px',
                  lineHeight: '14px',
                  mb: '8px',
                }}
              >
                User Name
              </Typography>
              <InputBase
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                placeholder="User Name"
                name="username"
                type="text"
                sx={{
                  width: { xs: '100%', lg: '354px' },
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#111',
                  borderRadius: '8px',
                  padding: '8px 18px',
                  border: `${
                    (isValid('username') === 'is-invalid' &&
                      borderColor.invalidColor) ||
                    (isValid('username') === 'is-valid' &&
                      borderColor.validColor)
                  } solid 1px`,
                }}
              />
            </label>
            <label>
              <Typography
                sx={{
                  color: '#111',
                  fontSize: '12px',
                  lineHeight: '14px',
                  mb: '8px',
                }}
              >
                Birthday
              </Typography>
              <InputBase
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birthday}
                name="birthday"
                type="text"
                placeholder="Birthday"
                sx={{
                  width: '100%',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#111',
                  border: `${
                    (isValid('birthday') === 'is-invalid' &&
                      borderColor.invalidColor) ||
                    (isValid('birthday') === 'is-valid' &&
                      borderColor.validColor)
                  } solid 1px`,
                  borderRadius: '8px',
                  padding: '8px 18px',
                }}
              />
            </label>
            <label>
              <Typography
                sx={{
                  color: '#111',
                  fontSize: '12px',
                  lineHeight: '14px',
                  mb: '8px',
                }}
              >
                Email
              </Typography>
              <InputBase
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                name="email"
                placeholder="Email"
                sx={{
                  width: '100%',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#111',
                  border: `${
                    (isValid('email') === 'is-invalid' &&
                      borderColor.invalidColor) ||
                    (isValid('email') === 'is-valid' && borderColor.validColor)
                  } solid 1px`,
                  borderRadius: '8px',
                  padding: '8px 18px',
                }}
              />
            </label>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',

              gap: { xs: '18px', md: '24px' },
            }}
          >
            <label>
              <Typography
                sx={{
                  color: '#111',
                  fontSize: '12px',
                  lineHeight: '14px',
                  mb: '8px',
                }}
              >
                Phone
              </Typography>
              <InputBase
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type="phone"
                name="phone"
                placeholder="Phone"
                sx={{
                  width: '100%',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#111',
                  border: `${
                    (isValid('phone') === 'is-invalid' &&
                      borderColor.invalidColor) ||
                    (isValid('phone') === 'is-valid' && borderColor.validColor)
                  } solid 1px`,
                  borderRadius: '8px',
                  padding: '8px 18px',
                }}
              />
            </label>
            <label>
              <Typography
                sx={{
                  color: '#111',
                  fontSize: '12px',
                  lineHeight: '14px',
                  mb: '8px',
                }}
              >
                Skype
              </Typography>
              <InputBase
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.skype}
                type="text"
                name="skype"
                placeholder="Skype"
                sx={{
                  width: '100%',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#111',
                  border: `${
                    (isValid('skype') === 'is-invalid' &&
                      borderColor.invalidColor) ||
                    (isValid('skype') === 'is-valid' && borderColor.validColor)
                  } solid 1px`,
                  borderRadius: '8px',
                  padding: '8px 18px',
                }}
              />
            </label>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            sx={{
              textTransform: 'none',
              backgroundColor: '#2B78EF',
              marginTop: { xs: '40px', lg: '88px' },
              width: '262px',
              padding: 2,
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
            }}
            variant="contained"
            type="submit"
          >
            Save changes
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default UserForm;
