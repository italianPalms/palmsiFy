import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";

function App() {

  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path ="/home" element={<Home />} />
          <Route path ="/login" element= { <Login />} />
          <Route path ="/signup" element= { <Signup />} />
          <Route path ="/profile" element={ <Profile />} />

          <Route path="*" element= {<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
