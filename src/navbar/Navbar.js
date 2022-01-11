import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import LockIcon from '@mui/icons-material/Lock';
import NavbarMobile from "./mobile/NavbarMobile";
import NavbarDesktop from "./desktop/NavbarDesktop";

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
  const classes = useStyles();
  const theme = useTheme();

  const [user, setUser] = useState();
  const isMobileMenu = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (false) {
      // User not logged in
    } else {
      // User logged in
      setUser(undefined);
    }
  }, [navigate]);

  return (
    <AppBar color={"primary"} position={"sticky"}>
      <Toolbar className={classes.topNav}>
        <Typography variant="h4">
          <NavLink to="/" className={classes.clearLink}>
            {"Keeper"} <LockIcon fontSize={"medium"}/>
          </NavLink>
        </Typography>
        {isMobileMenu ? (
          <NavbarMobile user={user}/>
        ) : (
          <NavbarDesktop user={user}/>
        )}
      </Toolbar>
    </AppBar>
  );
}
