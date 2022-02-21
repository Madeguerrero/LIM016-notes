import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/signup";
import Login from "./pages/login";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
