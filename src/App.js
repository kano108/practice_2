import "./App.css";
import Login from "./login";
import Register from "./register";
import Home from "./home";
import Protect from "./protect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Protect><Home /></Protect>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
