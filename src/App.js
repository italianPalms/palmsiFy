import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Protected from "./components/Protected";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Movies from "./pages/Movies";
import EtchASketch from "./pages/EtchASketch";
import Groceries from "./pages/Groceries";
import AllUsers from "./pages/Allusers";
import RockPaperScissor from "./pages/Rock-Paper-Scissor";

function App() {

  return (
    <div className=" text-white bg-black">

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path ="/home" element={<Home />} />
          <Route path ="/login" element= { <Login />} />
          <Route path ="/signup" element= { <Signup />} />
          <Route path = "/forgotPassword" element={ <ForgotPassword />} />
          <Route path = "/verifyEmail" element= { <VerifyEmail />} />
          <Route path = "/about" element = { <About /> } />
          <Route path = "/investors" element = { <Investors /> } />

          <Route path ="/profile" element= {
            <Protected Login={Login}>
            <Profile />
            </Protected>
            }/>
          <Route path = "/movies" element = {
            <Protected Login={Login}>
              <Movies />
            </Protected>
          } />

          <Route path = "/groceries" element = {
            <Protected Login={Login}>
              <Groceries />
            </Protected>
          } />

          <Route path = "/etchASketch" element = {
            <Protected Login={Login}>
              <EtchASketch />
            </Protected>
          } />

          <Route path = "/allusers" element = {
            <Protected Login={Login}>
              <AllUsers />
            </Protected>
          } />

          <Route path = "/rockPaperScissor" element = {
            <Protected Login={Login}>
              <RockPaperScissor />
            </Protected>
          } />

          <Route path="*" element= {<NoPage />} />
        </Routes>
      </BrowserRouter>
      <div>
      </div>
    </div>
  );
}

export default App;
