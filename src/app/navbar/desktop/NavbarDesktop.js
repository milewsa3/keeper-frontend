import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { logout, selectAuthData } from '../../redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const NavbarDesktop = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(selectAuthData)

  const onLogoutClick = () => {
    dispatch(logout(navigate))
  }

  const styles = {
    root: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(5),
    },
  };

  return (
    <Box sx={styles.root}>
      {user && <Typography variant={"h6"}>Hello, <b>{user.result.name}</b></Typography>}
      <ThemeSwitcher/>
      {user && (
        <>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={onLogoutClick}
            sx={{ mr: 3, ml: 3 }}
          >
            {"Logout"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default NavbarDesktop;
