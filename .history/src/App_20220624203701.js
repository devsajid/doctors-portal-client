import "./App.css";
import Navbar from "./Pages/Home/Share/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appoinement from "./Pages/Appoinment/Appoinment";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Review from "./Pages/Review/Review";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinement" element={<Appoinement />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="revi" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
