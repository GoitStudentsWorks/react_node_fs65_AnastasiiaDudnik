import React from 'react';
import {
  Box,
  Button,
  Container,
  OutlinedInput,
  SvgIcon,
  Typography,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import goose from './sign up 1.png';
import Sprite from 'icons/sprite.svg';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be 2 characters long')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});

const borderColor = {
  validColor: '#3CBC81',
  invalidColor: '#E74A3B',
};

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => {
        const isValid = field =>
          touched[field] && errors[field]
            ? 'is-invalid'
            : touched[field]
            ? 'is-valid'
            : '';
        return (
          <Box
            sx={{
              backgroundColor: '#DCEBF7',
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'fixed',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Container
              sx={{
                position: 'relative',
                width: { xs: '335px', md: '480px' },
                borderRadius: 2,
                backgroundColor: '#fff',
                pr: { xs: 3, md: 5 },
                pl: { xs: 3, md: 5 },
                pt: 5,
                pb: 5,
              }}
            >
              <Form>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 18,
                    color: '#3E85F3',
                    mb: 4,
                    fontWeight: 600,
                  }}
                >
                  Sign Up
                </Typography>
                <label style={{ position: 'relative' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      mb: 1,
                      fontWeight: 600,
                      color: `${
                        (isValid('name') === 'is-invalid' &&
                          borderColor.invalidColor) ||
                        (isValid('name') === 'is-valid' &&
                          borderColor.validColor)
                      }`,
                    }}
                  >
                    Name
                  </Typography>
                  <Field
                    as={OutlinedInput}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter your name"
                    sx={{
                      border: `${
                        (isValid('name') === 'is-invalid' &&
                          borderColor.invalidColor) ||
                        (isValid('name') === 'is-valid' &&
                          borderColor.validColor)
                      } solid 1px`,
                      fontFamily: 'Inter, sans-serif',
                      width: '100%',
                      borderRadius: 2,
                      fontSize: 16,
                      lineHeight: '18px',
                      fontWeight: 600,
                    }}
                  />
                  {isValid('name') === 'is-valid' && (
                    <>
                      <SvgIcon
                        stroke="currentColor"
                        sx={{
                          width: { xs: '20px', md: '24px' },
                          height: { xs: '20px', md: '24px' },
                          position: 'absolute',
                          top: '48px',
                          right: '10px',
                        }}
                      >
                        <use href={`${Sprite}#done`}></use>
                      </SvgIcon>
                      <Typography
                        sx={{ color: '#3CBC81', fontSize: 12, mt: '8px' }}
                      >
                        This is a CORRECT name
                      </Typography>
                    </>
                  )}
                  {isValid('name') === 'is-invalid' && (
                    <>
                      <SvgIcon
                        stroke="currentColor"
                        sx={{
                          width: { xs: '20px', md: '24px' },
                          height: { xs: '20px', md: '24px' },
                          position: 'absolute',
                          top: '48px',
                          right: '10px',
                        }}
                      >
                        <use href={`${Sprite}#error-input`}></use>
                      </SvgIcon>
                    </>
                  )}
                  <ErrorMessage
                    name="name"
                    component="div"
                    style={{ fontSize: 12, color: '#DA1414', marginTop: 8 }}
                  />
                </label>
                <label>
                  <Typography
                    sx={{
                      fontSize: 14,
                      mb: 1,
                      mt: 3,
                      fontWeight: 600,
                      color: `${
                        (isValid('email') === 'is-invalid' &&
                          borderColor.invalidColor) ||
                        (isValid('email') === 'is-valid' &&
                          borderColor.validColor)
                      }`,
                    }}
                  >
                    Email
                  </Typography>
                  <div style={{ position: 'relative' }}>
                    <Field
                      as={OutlinedInput}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email"
                      sx={{
                        border: `${
                          (isValid('email') === 'is-invalid' &&
                            borderColor.invalidColor) ||
                          (isValid('email') === 'is-valid' &&
                            borderColor.validColor)
                        } solid 1px`,
                        width: '100%',
                        height: 54,
                        borderRadius: 2,
                        fontWeight: 600,
                      }}
                    />
                    {isValid('email') === 'is-valid' && (
                      <>
                        <SvgIcon
                          stroke="currentColor"
                          sx={{
                            width: { xs: '20px', md: '24px' },
                            height: { xs: '20px', md: '24px' },
                            position: 'absolute',
                            top: '20px',
                            right: '10px',
                          }}
                        >
                          <use href={`${Sprite}#done`}></use>
                        </SvgIcon>
                        <Typography
                          sx={{ color: '#3CBC81', fontSize: 12, mt: '8px' }}
                        >
                          This is a CORRECT email
                        </Typography>
                      </>
                    )}
                    {isValid('email') === 'is-invalid' && (
                      <>
                        <SvgIcon
                          stroke="currentColor"
                          sx={{
                            width: { xs: '20px', md: '24px' },
                            height: { xs: '20px', md: '24px' },
                            position: 'absolute',
                            top: '20px',
                            right: '10px',
                          }}
                        >
                          <use href={`${Sprite}#error-input`}></use>
                        </SvgIcon>
                      </>
                    )}
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ fontSize: 12, color: '#DA1414', marginTop: 8 }}
                  />
                </label>
                <label>
                  <Typography
                    sx={{
                      fontSize: 14,
                      mb: 1,
                      mt: 3,
                      fontWeight: 600,
                      color: `${
                        (isValid('password') === 'is-invalid' &&
                          borderColor.invalidColor) ||
                        (isValid('password') === 'is-valid' &&
                          borderColor.validColor)
                      }`,
                    }}
                  >
                    Password
                  </Typography>
                  <div style={{ position: 'relative' }}>
                    <Field
                      as={OutlinedInput}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      sx={{
                        border: 'rgba(220, 227, 229, 0.60);',
                        width: '100%',
                        height: 54,
                        borderRadius: 2,
                      }}
                    />
                    {isValid('password') === 'is-valid' && (
                      <>
                        <SvgIcon
                          stroke="currentColor"
                          sx={{
                            width: { xs: '20px', md: '24px' },
                            height: { xs: '20px', md: '24px' },
                            position: 'absolute',
                            top: '20px',
                            right: '10px',
                          }}
                        >
                          <use href={`${Sprite}#done`}></use>
                        </SvgIcon>
                        <Typography
                          sx={{ color: '#3CBC81', fontSize: 12, mt: '8px' }}
                        >
                          This is a CORRECT password
                        </Typography>
                      </>
                    )}
                    {isValid('password') === 'is-invalid' && (
                      <>
                        <SvgIcon
                          stroke="currentColor"
                          sx={{
                            width: { xs: '20px', md: '24px' },
                            height: { xs: '20px', md: '24px' },
                            position: 'absolute',
                            top: '20px',
                            right: '10px',
                          }}
                        >
                          <use href={`${Sprite}#error-input`}></use>
                        </SvgIcon>
                      </>
                    )}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ fontSize: 12, color: '#DA1414', marginTop: 8 }}
                  />
                </label>
                <Button
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#2B78EF',
                    marginTop: 4,
                    width: '100%',
                    padding: 2,
                    borderRadius: 4,
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                  }}
                  variant="contained"
                  endIcon={
                    <SvgIcon
                      stroke="currentColor"
                      sx={{
                        width: { xs: '20px', md: '24px' },
                        height: { xs: '20px', md: '24px' },
                      }}
                    >
                      <use href={`${Sprite}#log-in`}></use>
                    </SvgIcon>
                  }
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
            </Container>
            <Link to={'/login'}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 12,
                  color: '#3E85F3',
                  mt: 2.25,
                  fontWeight: 600,
                  textDecoration: 'underline',
                }}
              >
                Log In
              </Typography>
            </Link>
            {window.innerWidth > 1440 ? (
              <img
                style={{
                  display: { xs: 'none' },
                  position: 'absolute',
                  left: '49px',
                  bottom: '0px',
                }}
                src={goose}
                alt="goose-racket"
              />
            ) : (
              <></>
            )}
          </Box>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
