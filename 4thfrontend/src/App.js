import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import SingleMovie from "./Components/singleMovie";
import Error from "./Components/error";
import "./App.css";

const App=()=> {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
     
    </>
  );
}

export default App;
