import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../../redux/theme/themeSlice';

const ThemeSwitcher = ({ ...props }) => {
  const theme = useTheme();
  const dispatch = useDispatch()

  return (
    <Box {...props}>
      <IconButton onClick={() => dispatch(toggleColorMode())} color="inherit">
        {theme.palette.mode === "light" ? <DarkModeIcon/> : <LightModeIcon/>}
      </IconButton>
    </Box>
  );
};

export default ThemeSwitcher;
