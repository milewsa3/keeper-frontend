import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideNavbarMobile from "./SideNavbarMobile";

const NavbarMobile = ({ user, setUser, ...props }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleDrawerOpen = () => {
    setMenuOpened(true);
  };

  const handleDrawerClose = () => {
    setMenuOpened(false);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => handleDrawerOpen()}
      >
        <MenuIcon/>
      </IconButton>
      <Drawer
        anchor="right"
        open={menuOpened}
        onClose={() => handleDrawerClose()}
      >
        <SideNavbarMobile user={user} setUser={setUser} handleDrawerClose={handleDrawerClose}/>
      </Drawer>
    </div>
  );
};

export default NavbarMobile;
