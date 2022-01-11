import React from "react";
import { Box, Button } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const NavbarDesktop = ({ user, ...props }) => {
  const theme = useTheme();

  const styles = {
    root: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(3),
    },
  };
  const navigate = useNavigate();

  return (
    <Box sx={styles.root}>
      <ThemeSwitcher/>
      {user && (
        <>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => console.log('logout')}
            sx={{ mr: 3, ml: 5 }}
          >
            {"Logout"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default NavbarDesktop;
