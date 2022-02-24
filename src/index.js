import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Start from "./pages/start";
import Home from "./components/home/home";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="start" element={<Start />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
