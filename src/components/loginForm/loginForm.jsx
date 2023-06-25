import React from "react";
import { Box, Button, Container, OutlinedInput, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom/dist";

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, 'Password must be 6 characters long').required("Required")
});

const LogInForm = () => {
  const handleSubmit = (value, actions) => { console.log(value); }
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
        <Box sx={{ backgroundColor: "#DCEBF7", height: "100%", width: "100%", display: "flex", alignItems: "center", position: "fixed", flexDirection: "column", justifyContent: "center" }}>
          <Container sx={{ width: 335, borderRadius: 2, backgroundColor: "#fff", pr: 3, pl: 3, pt: 5, pb: 5 }}>
            <Form>
              <Typography variant="h2" sx={{ fontSize: 18, color: "#3E85F3", mb: 4, fontWeight: 600, }}>Log In</Typography>
              <label>
                <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}>Email</Typography>
                <Field
                  as={OutlinedInput}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="nadiia@gmail.com"
                  sx={{ border: "rgba(220, 227, 229, 0.60);", width: "100%", height: 54, borderRadius: 2, }}
                />
                 <ErrorMessage name="email" component="div" style={{fontSize:12, color:"#DA1414", marginTop:8}}/>
              </label>
              <label>
                <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1, mt: 3 }}>Password</Typography>
                <Field
                  as={OutlinedInput}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="•••••••"
                  sx={{ border: "rgba(220, 227, 229, 0.60);", width: "100%", height: 54, borderRadius: 2,}}
                />
                <ErrorMessage name="password" component="div" style={{fontSize:12, color:"#DA1414", marginTop:8}}/>
              </label>
              <Button
                sx={{ textTransform:"none", backgroundColor: "#2B78EF", marginTop: 4, width: 287, padding: 2, borderRadius: 4, fontSize: 14, fontWeight: 600 }}
                variant="contained"
                type="submit"
              >
                Log in
              </Button>
            </Form>
          </Container>
          <Link to={"/register"}>
          <Typography variant="h2" sx={{ fontSize: 12, color: "#3E85F3", mt: 2.25, fontWeight: 600, textDecoration: "underline" }}>Sign up</Typography>
          </Link>
        </Box>
      )}
    </Formik>
  );
};

export default LogInForm;
