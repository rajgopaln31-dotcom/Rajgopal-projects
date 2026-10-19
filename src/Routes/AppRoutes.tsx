import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import Project from "../Pages/Projects";
import Contact from "../Pages/Contacts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}