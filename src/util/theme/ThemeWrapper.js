import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ColorModeContext from "./ColorModeContext";
import { deepPurple, pink } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        primary: deepPurple,
        secondary: pink,
      }
      : { primary: deepPurple }),
  },
  spacing: 3,
});

const ThemeWrapper = (props) => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        if (document.body.style.backgroundColor === "rgb(18, 18, 18)") {
          document.body.style.backgroundColor = "rgb(255, 255, 255)";
        } else {
          document.body.style.backgroundColor = "rgb(18, 18, 18)";
        }
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeWrapper;
