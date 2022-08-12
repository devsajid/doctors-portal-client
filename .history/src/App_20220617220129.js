import "./App.css";
import Navbar from "./Pages/Home/Share/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={Home}></Route>
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
