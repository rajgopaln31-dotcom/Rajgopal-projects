import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Reviews from "../Pages/Reviews";
import Contact from "../Pages/Contact";
import "../components/Layout.css";

export default function AppRoutes() {
  return (
    <>
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
