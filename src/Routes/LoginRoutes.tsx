import { Routes, Route } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Forgot from "../Pages/Forgot";
import  Otp  from "../Pages/Otp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot/>} />
              <Route path="/otp" element={<Otp/>} />
    </Routes>
  );
}

export default App;