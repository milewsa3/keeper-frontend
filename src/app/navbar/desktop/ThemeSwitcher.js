import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ColorModeContext from "../../theme/ColorModeContext";
import { useTheme } from "@emotion/react";

const ThemeSwitcher = ({ ...props }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box {...props}>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "light" ? <DarkModeIcon/> : <LightModeIcon/>}
      </IconButton>
    </Box>
  );
};

export default ThemeSwitcher;
