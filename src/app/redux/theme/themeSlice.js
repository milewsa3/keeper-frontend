import { createSlice } from '@reduxjs/toolkit';
import { deepPurple, red } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        primary: deepPurple,
        secondary: red,
      }
      : {}),
  },
  spacing: 3,
});

const initialState = {
  mode: 'light',
  currentTheme: getDesignTokens('light')
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      state.currentTheme = getDesignTokens(state.mode)
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  changeMode
} = themeSlice.actions

export const adjustBackgroundColor = (mode) => {
  if (mode === 'light') {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
  } else {
    document.body.style.backgroundColor = "rgb(18, 18, 18)";
  }
}

export const toggleColorMode = () => async dispatch => {
  dispatch(changeMode())

  adjustBackgroundColor()
}

export const selectThemeMode = state => state.theme.mode;
export const selectTheme = state => state.theme.currentTheme
export default themeSlice.reducer
