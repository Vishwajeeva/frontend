import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/" element={<Login />} /> {/* Default route to login */}
    </Route>
   </Routes>
   
   </BrowserRouter> 
  )
}

export default App









