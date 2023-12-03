// AuthRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default AuthRoutes;
