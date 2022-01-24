import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import themeReducer from './theme/themeSlice';
import passwordEntityReducer from './passwordEntity/passwordEntitySlice';
import { loadSessionState, saveSessionState } from './sessionStorage';
import axiosAuth from '../auth/authMiddleware';

const persistedState = loadSessionState()
export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    passwordEntity: passwordEntityReducer
  },
  middleware: [axiosAuth],
  preloadedState: persistedState
});

store.subscribe(() => {
  saveSessionState(store.getState())
})
