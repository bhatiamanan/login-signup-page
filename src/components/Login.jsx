import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "orange" };
  const btnStyle = { margin: "8px 0" };
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    

  };
    
  const validationSchema = Yup.object().shape({
    username: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
  });

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                name="username"
                label="Username"
                placeholder="Enter Username"
                variant="standard"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter Password"
                variant="standard"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                control={<Checkbox color="primary" />}
                name="remember"
                label="Remember Me"
              />
              <Button
                style={btnStyle}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Log In"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
