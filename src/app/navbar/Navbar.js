import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import LockIcon from '@mui/icons-material/Lock';
import NavbarMobile from "./mobile/NavbarMobile";
import NavbarDesktop from "./desktop/NavbarDesktop";
import decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuthData } from '../redux/auth/authSlice';

const useStyles = makeStyles((theme) => ({
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.2rem 4rem",
  },
  clearLink: {
    textDecoration: "none",
    color: "white",
    marginLeft: "10px",
  },
}));

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(selectAuthData)
  const classes = useStyles();
  const theme = useTheme();

  const isMobileMenu = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logout(navigate))
      }
    }
  }, [dispatch, navigate, user?.token]);

  return (
    <AppBar color={"primary"} position={"sticky"}>
      <Toolbar className={classes.topNav}>
        <Typography variant="h4">
          <NavLink to="/" className={classes.clearLink}>
            {"Keeper"} <LockIcon fontSize={"medium"}/>
          </NavLink>
        </Typography>
        {isMobileMenu ? (
          <NavbarMobile />
        ) : (
          <NavbarDesktop />
        )}
      </Toolbar>
    </AppBar>
  );
}
