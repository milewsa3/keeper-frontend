import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BACKEND_URI}` })

API.interceptors.request.use((req) => {
  const authData = JSON.parse(sessionStorage.getItem('state')).auth.authData
  if (authData) {
    req.headers.Authorization = `Bearer ${authData.token}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/auth/signin', formData)
export const signUp = (formData) => API.post('/auth/signup', formData)

export const getAllPasswordEntitiesForUser = () => API.get(`/passwordEntity`)

export const addPasswordEntityForUser = (formData) => API.post(`/passwordEntity`,
  formData)
export const getDecryptedPasswordEntityForUser = (entityId, masterPassword) => API.get(`/passwordEntity/${entityId}/${masterPassword}`)