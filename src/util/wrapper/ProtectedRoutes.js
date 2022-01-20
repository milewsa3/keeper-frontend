import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getUser } from '../user/UserUtils';

const ProtectedRoutes = () => {
  const user = getUser()
  const location = useLocation()

  return user ? <Outlet/> : <Navigate to="/login" state={{ from: location }}/>
};

export default ProtectedRoutes;