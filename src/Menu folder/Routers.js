import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element =  {<About/>} />
       
        <Route path="/services" element ={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}