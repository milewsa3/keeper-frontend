import axios from 'axios'
import { getUser } from '../auth/user/UserUtils';

const API = axios.create({ baseURL: `${process.env.REACT_APP_BACKEND_URI}` })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).data.token}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/auth/signin', formData)
export const signUp = (formData) => API.post('/auth/signup', formData)

export const getAllPasswordEntitiesForUser = () => API.get(`/passwordEntity/${getUser().data.result.id}`)

export const addPasswordEntityForUser = (formData) => API.post(`/passwordEntity/${getUser().data.result.id}`,
  formData)
export const getDecryptedPasswordEntityForUser = (entityId, masterPassword) => API.get(`/passwordEntity/${getUser().data.result.id}/${entityId}/${masterPassword}/decrypted`)