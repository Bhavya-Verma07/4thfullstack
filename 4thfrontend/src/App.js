import React from "react";
import "./App.css";
import Home from "./Components/home";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./Components/singleMovie";
import Error from "./Components/error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
