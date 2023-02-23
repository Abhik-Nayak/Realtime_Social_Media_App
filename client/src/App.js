import React from 'react';
import Login from "./pages/login/Login";
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/profile/:username" element={<Profile/>}/>
      <Route exact path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App