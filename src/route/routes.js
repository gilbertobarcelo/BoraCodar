import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Button from "../pages/Button";

function Rota() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/botao" element={<Button />} />
      </Routes>
    </Router>
  );
}

export default Rota;
