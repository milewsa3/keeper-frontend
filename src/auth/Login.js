import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { Box, useMediaQuery } from "@mui/material";
import LoginAd from "./LoginAd";
import { useTheme } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import { getUser } from '../util/user/UserUtils';

const Login = () => {
  const theme = useTheme();
  const user = getUser()
  const navigate = useNavigate()
  const matchesDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  const styles = {
    root: {
      mx: "auto",
      my: theme.spacing(14),
      width: 4 / 5,
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        justifyContent: "space-between",
      },
    },
  };

  return (
    <Box sx={styles.root}>
      {matchesDesktop && <LoginAd/>}
      <LoginForm/>
    </Box>
  );
};

export default Login;
