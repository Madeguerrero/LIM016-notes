import React, { useEffect } from "react";
import "./App.css";
import Start from "./pages/start";
import Home from "./components/home/home";
import CreateNotes from "./components/home/createnotes";
import Notes from "./components/home/notes";
import Delete from "./components/home/delete";
import {Routes, Route, useNavigate } from "react-router-dom";

function DashboardRoutes() {
  const navigate=useNavigate()
  useEffect(()=>{
    if(sessionStorage.length===1 || sessionStorage.length===0){
              navigate('/');
    };
},[])

  return (
    <div>
       
        <Routes>
           <Route path="home" element={<Home />} />
           <Route path="createnotes" element={<CreateNotes />} />
           <Route path="notes" element={<Notes />} />
           <Route path="delete" element={<Delete />} />
        </Routes>
    </div>
  )
}

export default DashboardRoutes


/* export default function App() {
  return <Start></Start>;
} */
