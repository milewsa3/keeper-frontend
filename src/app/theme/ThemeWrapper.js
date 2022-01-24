import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from 'react-redux';
import { adjustBackgroundColor, selectTheme } from '../redux/theme/themeSlice';

const ThemeWrapper = (props) => {
  const theme = useSelector(selectTheme)

  adjustBackgroundColor(theme.palette.mode)

  return <ThemeProvider theme={createTheme(theme)}>{props.children}</ThemeProvider>
};

export default ThemeWrapper;
