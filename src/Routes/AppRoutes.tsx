import {  Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Contacts from "../Pages/Contacts";


function AppRoutes() {
  
  return (
  <>
      <Routes>
       
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts/>} />
      

      </Routes>
   </>
  );
}

export default AppRoutes;