import React from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const CheckedLabel = ({ children, ...props }) => {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        color: "text.primary",
      }}
    >
      <CheckIcon sx={{ mr: 5 }} fontSize={"small"}/>
      {children}
    </Typography>
  );
};

const LoginAd = () => {

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ mt: 15, mb: 10, fontWeight: "bold", color: "text.primary" }}
      >
        {"Keep your passwords safe"}
      </Typography>
      <CheckedLabel>{"Quick save"}</CheckedLabel>
      <CheckedLabel>{"High security"}</CheckedLabel>
      <CheckedLabel>{"Large capacity"}</CheckedLabel>
    </Box>
  );
};

export default LoginAd;
