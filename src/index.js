import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardRoutes from "./App";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Start from "./pages/start";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<DashboardRoutes/>}/>

    </Routes>
  </BrowserRouter>
  ,rootElement
)
      