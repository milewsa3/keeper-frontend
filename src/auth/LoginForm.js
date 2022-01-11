import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import AuthInput from "./AuthInput";
import { useDispatch, useSelector } from 'react-redux';
import { clearAuth, selectAuth, signin, signup } from '../redux/auth/authSlice';

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const LoginForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const authData = useSelector(selectAuth)
  const error = authData.error

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    dispatch(clearAuth())
  }, [dispatch])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate))
    } else {
      dispatch(signin(formData, navigate))
    }
  };

  const styles = {
    root: {
      width: 400,
      p: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    topLabel: {
      mb: 12,
    },
    submitButton: {
      mt: 8,
      mb: 15,
    },
    signUpArea: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    divider: {
      width: 1,
      mb: 3,
    },
    switchButton: {
      color: "text.secondary",
    },
  };

  return (
    <Paper elevation={3} sx={styles.root}>
      <Typography variant="h5" sx={styles.topLabel}>
        {isSignup ? "Sign up" : "Sign in"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} maxWidth={"380px"}>
          {isSignup && (
            <>
              <AuthInput
                name="name"
                label={"Name"}
                handleChange={handleChange}
                autoFocus
                error={Boolean(error?.name)}
                helperText={error?.name}
              />
            </>
          )}
          <AuthInput
            name="email"
            label={"Email"}
            handleChange={handleChange}
            type="email"
            error={Boolean(error?.email)}
            helperText={error?.email}
            autoComplete={"email"}
          />
          <AuthInput
            name="password"
            label={"Password"}
            handleChange={handleChange}
            error={Boolean(error?.password)}
            helperText={error?.password}
            type={showPassword ? "text" : "password"}
            autoComplete={"current-password"}
            handleShowPassword={handleShowPassword}
          />
          {isSignup && (
            <AuthInput
              name="confirmPassword"
              label={"Confirm password"}
              handleChange={handleChange}
              error={Boolean(error?.confirmPassword)}
              helperText={error?.confirmPassword}
              type="password"
              autoComplete={"password"}
            />
          )}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={styles.submitButton}
        >
          {isSignup ? "Sign up" : "Sign in"}
        </Button>
        <Box sx={styles.signUpArea}>
          <Divider sx={styles.divider}/>
          <Button onClick={switchMode} sx={styles.switchButton}>
            {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default LoginForm;