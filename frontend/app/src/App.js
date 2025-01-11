<<<<<<< HEAD
import React from "react";
import "./App.css";
import Signup from "./pages/signup.js";
import Signin from "./pages/signin.js";
import Header from "./components/header.js";
import Home from "./pages/home.js";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
=======
import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Signup from './pages/signup.js'
import Signin from './pages/signin.js';
import Header from './components/header.js';
import Home from './pages/home.js';
import Leaderboard from './pages/leaderboard.js';
import { Route,Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
>>>>>>> a919ff8f3d18bf4d9ac997bf58769d032bd76507

function App() {
  const location = useLocation(); // Get the current route path
  const hideHeaderRoutes = ["/signup", "/login"]; // Define routes where the Header should not appear

  return (
    <>
      <AuthProvider>
<<<<<<< HEAD
        {/* Render the Header only if the current route is not in hideHeaderRoutes */}
        {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
=======
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
>>>>>>> a919ff8f3d18bf4d9ac997bf58769d032bd76507
      </AuthProvider>
    </>
  );
}

export default App;
