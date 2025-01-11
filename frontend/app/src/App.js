import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Signup from './pages/signup.js'
import Signin from './pages/signin.js';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </>
  );
}

export default App;
