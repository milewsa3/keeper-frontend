import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Login from './auth/Login';
import Dashboard from './keeper/Dashboard';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
