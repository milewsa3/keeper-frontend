import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api'
import validateFormData from '../../auth/AuthUtils';

const initialState = {
  authData: null,
  loading: false,
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initRequest: (state) => {
      state.loading = true
    },
    fillAuthData: (state, action) => {
      state.authData = action.payload
      state.loading = false
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    clearAuth: (state) => {
      state.authData = null
      state.loading = false
      state.error = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { fillAuthData, initRequest, setError, clearAuth } = authSlice.actions

export const signin = (formData, navigate) => async dispatch => {
  dispatch(initRequest())

  // Latency for security purposes
  setTimeout(async () => {
    try {
      const { data } = await api.signIn(formData)
      dispatch(fillAuthData(data))
      localStorage.setItem('profile', JSON.stringify({ data }))

      navigate('/')
    }
    catch (error) {
      dispatch(setError(error.response.data.error))
    }
  }, [1000])


}

export const signup = (formData, navigate) => async dispatch => {
  dispatch(initRequest())

  // Latency for security purposes
  setTimeout(async () => {
    try {
      const error = validateFormData(formData)
      if (error) {
        dispatch(setError(error))
      } else {
        const { data } = await api.signUp(formData)
        dispatch(fillAuthData(data))
        localStorage.setItem('profile', JSON.stringify({ data }))

        navigate('/')
      }
    }
    catch (error) {
      dispatch(setError(error.response.data.error))
    }
  }, [1000])
}

export const logout = (navigate, setUser) => async dispatch => {
  localStorage.clear()
  dispatch(clearAuth())
  navigate('/login')
  setUser(null)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAuth = state => state.auth;

export default authSlice.reducer