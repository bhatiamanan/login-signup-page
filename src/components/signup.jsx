import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@mui/material";
import * as Yup from "yup";

const SignUp = ({handleChange}) => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "orange" };
  const btnStyle = { margin: "8px 0" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 10 };
  const initialValues = {
    name: "",
    email:"",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Email is required"),
    gender: Yup.string().oneOf(["male", "female"], "Required").required("Trans?"),
    phoneNumber: Yup.number().typeError("Enter valid Phone Number").required("Number is required"),
    password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password does not match").required("Required"),
    termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
  });

  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography gutterBottom variant="caption">
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik
        initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
        {(props) => (
          <Form>
          <Field
          as={TextField}
            label="Name"
            name = "name"
            placeholder="Enter Your Name"
            variant="standard"
            fullWidth
            required
            helperText={<ErrorMessage name="name" />}
          />
          <Field
          as={TextField}
            label="Email"
            name = "email"
            placeholder="Enter Your Email"
            variant="standard"
            type="email"
            fullWidth
            required
            helperText={<ErrorMessage name="email" />}
          />
          <Field
          as={TextField}
            label="Phone Number"
            name = "phoneNumber"
            placeholder="Enter Your Phone Number"
            variant="standard"
            fullWidth
            required
            helperText={<ErrorMessage name="phoneNumber" />}
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <Field as={RadioGroup}
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel  value="male" control={<Radio />} label="Male" />
            </Field>
          </FormControl>
          <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
          <Field
          as={TextField}
            label="Password"
            name = "password"
            type="password"
            placeholder="Enter Password"
            variant="standard"
            fullWidth
            required
            helperText={<ErrorMessage name="password" />}
          />
          <Field
          as={TextField}
            label="Confirm Password"
            name = "confirmPassword"
            type="password"
            placeholder="Enter Your Password Again"
            variant="standard"
            fullWidth
            required
            helperText={<ErrorMessage name="confirmPassword" />}
          />
          <FormControlLabel
            control={<Field as={Checkbox} name="termsAndConditions" color="primary" />}
            label="I accept the terms and conditions."
          />
          <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
          <Button
            style={btnStyle}
            variant="contained"
            type="submit"
            color="primary"
            disabled={props.isSubmitting}
          >
            {props.isSubmitting ? "Loading" : "Sign Up"}
          </Button>
          <Typography>
            {" "}
            Already have an account?
            <Link href="#" onClick={()=>handleChange("event", 0)}>Log In</Link>
          </Typography>
        </Form>
        )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
