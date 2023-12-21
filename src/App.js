import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/ResponsiveAppBar' element={<ResponsiveAppBar/>} />

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;