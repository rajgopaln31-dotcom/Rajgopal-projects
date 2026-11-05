import { Routes, Route, } from "react-router-dom";

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />

    
    </Routes>
  );
}