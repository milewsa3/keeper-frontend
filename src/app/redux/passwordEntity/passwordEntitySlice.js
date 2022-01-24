import { createSlice } from '@reduxjs/toolkit';
import * as api from '../../api'

const initialError = {
  pageUrl: '',
  password: '',
  masterPassword: ''
}

const initialState = {
  data: [],
  loading: false,
  error: initialError
};

export const passwordEntitySlice = createSlice({
  name: 'passwordEntity',
  initialState,
  reducers: {
    fetchAll: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = initialError
    },
    create: (state, action) => {
      state.data = [...state.data, action.payload]
      state.loading = false
      state.error = initialError
    },
    initRequest: (state) => {
      state.loading = true
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  },
})

export const {
  initRequest,
  fetchAll,
  create,
  setError
} = passwordEntitySlice.actions

export const fetchAllPasswordEntities = () => async dispatch => {
  dispatch(initRequest())

  try {
    const { data } = await api.getAllPasswordEntitiesForUser()
    dispatch(fetchAll(data))
  }
  catch (err) {
    dispatch(setError(err.response.data.error))
  }
}

export const createPasswordEntity = (formData) => async dispatch => {
  dispatch(initRequest())

  try {
    const { data } = await api.addPasswordEntityForUser(formData)
    dispatch(create(data))
  }
  catch (err) {
    dispatch(setError(err.response.data.error))
  }
}

export const selectPasswordEntity = state => state.passwordEntity;

export default passwordEntitySlice.reducer