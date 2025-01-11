import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Signup from './pages/signup.js'
import Signin from './pages/signin.js';
import Header from './components/header.js'
import { Route,Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/header" element={<Header/>}/>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
