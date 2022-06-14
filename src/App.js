import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle";
export default function App() {
  return (
    <>
      <Router basename="/abs">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
