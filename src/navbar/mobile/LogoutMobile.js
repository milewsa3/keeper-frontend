import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const LogoutMobile = () => {
  const navigate = useNavigate();

  return (
    <ListItemButton divider={true} onClick={() => console.log('logout')}>
      <ListItemIcon>
        <LogoutIcon/>
      </ListItemIcon>
      <ListItemText primary={"Logout"}/>
    </ListItemButton>
  );
};

export default LogoutMobile;
