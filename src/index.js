import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/login";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
