import React from "react";
import ThemeSwitcherMobile from "./ThemeSwitcherMobile";
import LogoutMobile from "./LogoutMobile";
import { Box } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectAuthData } from '../../redux/auth/authSlice';

const SideNavbarMobile = ({ handleDrawerClose, ...props }) => {
  const user = useSelector(selectAuthData)

  return (
    <Box
      sx={{ width: "220px" }}
      role="presentation"
      onClick={handleDrawerClose}
    >
      <ThemeSwitcherMobile/>
      {user && (
        <>
          <LogoutMobile />
        </>
      )}
    </Box>
  );
};

export default SideNavbarMobile;
