
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { lazy } from 'react';

function App() {

  const Login = lazy(() => import('./pages/Login/Login'));
  const Register = lazy(() => import('./pages/Register/Register'));

  return (
    <Router>
    <Routes>
    
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
  );
}

export default App;
