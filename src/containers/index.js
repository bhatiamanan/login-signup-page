import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import Login from "../components/Login";
import SignUp from "../components/signup";
import React, { useState } from "react";

const SignInUpContainer = () => {
  const [value, setValue] = useState(0);
  const paperStyle = {width: 340, margin: "20px auto"}
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={20}  style={paperStyle}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
      >
        <Tab label="Log In" />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp handleChange={handleChange}/>
      </TabPanel>
    </Paper>
  );
};

export default SignInUpContainer;
