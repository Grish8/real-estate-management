import React from 'react';

import { BrowserRouter, Routes , Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from  './components/Header';
import Admin from './pages/Admin';
import Tenant from './pages/Tenant';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tenant" element={<Tenant />} />
      </Routes>
    </BrowserRouter>
  );
}
