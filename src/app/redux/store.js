import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import { loadSessionState, saveSessionState } from './sessionStorage';

const persistedState = loadSessionState()
export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  preloadedState: persistedState
});

store.subscribe(() => {
  saveSessionState(store.getState())
})
