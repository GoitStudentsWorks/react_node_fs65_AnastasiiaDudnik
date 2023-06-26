import React from 'react';
import {
  Box,
  Button,
  Container,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom/dist';
import goose from './elements.png';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});

const LogInForm = () => {
  console.log(window.innerWidth);
  const handleSubmit = (value, actions) => {
    console.log(value);
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
      }) => (
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
            <Form autoComplete="off">
              <Typography
                variant="h2"
                sx={{
                  fontSize: 18,
                  color: '#3E85F3',
                  mb: 4,
                  fontWeight: 600,
                  lineHeight: '24px',
                }}
              >
                Log In
              </Typography>
              <label>
                <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}>
                  Email
                </Typography>
                <Field
                  as={OutlinedInput}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="nadiia@gmail.com"
                  sx={{
                    border: 'rgba(220, 227, 229, 0.60);',
                    width: '100%',
                    height: 54,
                    borderRadius: 2,
                    fontSize: 16,
                    lineHeight: '18px',
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{
                    fontSize: 12,
                    lineHeight: '14px',
                    color: '#DA1414',
                    marginTop: 8,
                  }}
                />
              </label>
              <label>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 600, mb: 1, mt: 3 }}
                >
                  Password
                </Typography>
                <Field
                  as={OutlinedInput}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="•••••••"
                  sx={{
                    border: 'rgba(220, 227, 229, 0.60);',
                    width: '100%',
                    height: 54,
                    borderRadius: 2,
                    fontSize: 16,
                    lineHeight: '18px',
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{
                    fontSize: 12,
                    lineHeight: '14px',
                    color: '#DA1414',
                    marginTop: 8,
                  }}
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
                type="submit"
              >
                Log in
              </Button>
            </Form>
          </Container>
          <Link to={'/register'}>
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
              Sign up
            </Typography>
          </Link>
          {window.innerWidth > 1440 ? (
            <img
              style={{ position: 'absolute', right: '60px', bottom: '19px' }}
              src={goose}
              alt="goose-racket"
            />
          ) : (
            <></>
          )}{' '}
        </Box>
      )}
    </Formik>
  );
};

export default LogInForm;
