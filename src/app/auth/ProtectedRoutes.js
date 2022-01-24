import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthData } from '../redux/auth/authSlice';

const ProtectedRoutes = () => {
  const user = useSelector(selectAuthData)
  const location = useLocation()

  return user ? <Outlet/> : <Navigate to="/login" state={{ from: location }}/>
};

export default ProtectedRoutes;