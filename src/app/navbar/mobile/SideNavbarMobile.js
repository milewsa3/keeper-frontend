import React from "react";
import ThemeSwitcherMobile from "./ThemeSwitcherMobile";
import LogoutMobile from "./LogoutMobile";
import { Box } from "@mui/material";

const SideNavbarMobile = ({ user, setUser, handleDrawerClose, ...props }) => {
  return (
    <Box
      sx={{ width: "220px" }}
      role="presentation"
      onClick={handleDrawerClose}
    >
      <ThemeSwitcherMobile/>
      {user && (
        <>
          <LogoutMobile setUser={setUser}/>
        </>
      )}
    </Box>
  );
};

export default SideNavbarMobile;
