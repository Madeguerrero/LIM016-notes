import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Start from "./pages/start";
import Home from "./components/home/home";
import CreateNotes from "./components/home/createnotes";
import Notes from "./components/home/notes";
import Delete from "./components/home/delete";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="start" element={<Start />} />
      <Route path="home" element={<Home />} />
      <Route path="createnotes" element={<CreateNotes />} />
      <Route path="notes" element={<Notes />} />
      <Route path="delete" element={<Delete />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
