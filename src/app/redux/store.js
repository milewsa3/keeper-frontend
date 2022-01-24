import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import themeReducer from './theme/themeSlice';
import { loadSessionState, saveSessionState } from './sessionStorage';

const persistedState = loadSessionState()
export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer
  },
  preloadedState: persistedState
});

store.subscribe(() => {
  saveSessionState(store.getState())
})
