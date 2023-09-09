import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path ="/home" element={<Home />} />
          <Route path ="/login" element= { <Login />} />
          <Route path ="/signup" element= { <Signup />} />

          <Route path="*" element= {<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
