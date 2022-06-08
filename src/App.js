import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/js/bootstrap.bundle";
import TopSection from "./Components/Topsection";
import Intro from "./Components/Intro";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
