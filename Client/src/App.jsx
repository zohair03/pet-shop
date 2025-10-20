import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router";
import HomeScreen from "./pages/HomeScreen.jsx";
import LandingScreen from "./pages/LandingScreen.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import SignupScreen from "./pages/SignupScreen.jsx";
import ProfileScreen from "./pages/ProfileScreen.jsx";
import ContactUsScreen from "./pages/ContactUsScreen.jsx";
import Layout from "./layouts/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/contact-us" element={<ContactUsScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
