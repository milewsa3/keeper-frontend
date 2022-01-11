import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

const LogoutMobile = ({ setUser, ...props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onLogoutClick = () => {
    dispatch(logout(navigate, setUser))
  }

  return (
    <ListItemButton divider={true} onClick={onLogoutClick}>
      <ListItemIcon>
        <LogoutIcon/>
      </ListItemIcon>
      <ListItemText primary={"Logout"}/>
    </ListItemButton>
  );
};

export default LogoutMobile;
