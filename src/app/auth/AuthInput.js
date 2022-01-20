import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AuthInput = ({
                     name,
                     handleChange,
                     label,
                     half,
                     autoFocus,
                     type,
                     handleShowPassword,
                     error,
                     helperText,
                     autoComplete
                   }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        error={error}
        helperText={helperText}
        autoComplete={autoComplete}
        InputProps={
          name === "password"
            ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                </InputAdornment>
              ),
            }
            : null
        }
      />
    </Grid>
  );
};

export default AuthInput;
