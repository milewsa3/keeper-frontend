import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import LockIcon from '@mui/icons-material/Lock';
import NavbarMobile from "./mobile/NavbarMobile";
import NavbarDesktop from "./desktop/NavbarDesktop";
import { getUser } from '../auth/user/UserUtils';
import decode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';

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
  const classes = useStyles();
  const theme = useTheme();

  const [user, setUser] = useState(getUser());
  const isMobileMenu = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logout(navigate))
        setUser(null)
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
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
          <NavbarMobile user={user} setUser={setUser}/>
        ) : (
          <NavbarDesktop user={user} setUser={setUser}/>
        )}
      </Toolbar>
    </AppBar>
  );
}
