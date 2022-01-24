import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './app/navbar/Navbar';
import Login from './app/auth/Login';
import Dashboard from './keeper/Dashboard';
import ProtectedRoutes from './app/auth/ProtectedRoutes';
import NotFound from './keeper/error/NotFound';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/" element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
