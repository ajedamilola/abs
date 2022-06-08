import React from "react";
import "./navbar.scss";
import logo from "../../logo.png";
import {FaHome,FaBookReader,FaRegBuilding,FaBlog} from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="navbar-brand">
          <img src={logo} className="logo" alt="ABS Logo"/>
          Ajegunle Business School
        </div>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#top-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="top-nav">
          <nav className="nav navbar-nav ms-auto">
            <li className="nav-item visited">
              <Link className="nav-link " to="/"><FaHome /> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" ><FaBookReader /> About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/solutions"><FaRegBuilding /> Solutions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog"><FaBlog /> Blog</Link>
            </li>
          </nav>
        </div>
      </div>
    </nav>
  );
}
