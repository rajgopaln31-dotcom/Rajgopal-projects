import { Routes, Route,  } from "react-router-dom";

import Home from "../Pages/Home";
import AboutUs from "../Pages/Aboutus";
import Services from "../Pages/Services";
import Reviews from "../Pages/Reviews";
import Contact from "../Pages/Contact";



import "../styles/Layout.css";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="/services" element={<Services />} />

      <Route path="/reviews" element={<Reviews />} />

      <Route path="/contact" element={<Contact />} />
        


    </Routes>
  );
}