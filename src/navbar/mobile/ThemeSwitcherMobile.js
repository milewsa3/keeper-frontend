import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@emotion/react";
import ColorModeContext from "../../util/theme/ColorModeContext";

const ThemeSwitcherMobile = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <ListItemButton divider={true} onClick={colorMode.toggleColorMode}>
      <ListItemIcon>
        {theme.palette.mode === "light" ? <DarkModeIcon/> : <LightModeIcon/>}
      </ListItemIcon>
      <ListItemText primary={"Theme switcher"}/>
    </ListItemButton>
  );
};

export default ThemeSwitcherMobile;
