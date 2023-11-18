import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import OtpScreen from "./pages/OtpScreen";
import Sidebar from "./pages/Sidebar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/OtpScreen" element={<OtpScreen/>}/>
        <Route path="/Sidebar" element={<Sidebar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
