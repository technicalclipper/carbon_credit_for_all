import React from "react";
import "./App.css";
import Signup from "./pages/signup.js";
import Signin from "./pages/signin.js";
import Header from "./components/header.js";
import Home from "./pages/home.js";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

function App() {
  const location = useLocation(); // Get the current route path
  const hideHeaderRoutes = ["/signup", "/login"]; // Define routes where the Header should not appear

  return (
    <>
      <AuthProvider>
        {/* Render the Header only if the current route is not in hideHeaderRoutes */}
        {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
