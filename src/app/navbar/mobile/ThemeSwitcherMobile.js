import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@emotion/react";
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../../redux/theme/themeSlice';

const ThemeSwitcherMobile = () => {
  const theme = useTheme();
  const dispatch = useDispatch()

  return (
    <ListItemButton divider={true} onClick={() => dispatch(toggleColorMode())}>
      <ListItemIcon>
        {theme.palette.mode === "light" ? <DarkModeIcon/> : <LightModeIcon/>}
      </ListItemIcon>
      <ListItemText primary={"Theme switcher"}/>
    </ListItemButton>
  );
};

export default ThemeSwitcherMobile;
