import React, { useEffect, useRef } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import "./style.scss";

export default function Intro({
  heading = "",
  text = "",
  searchVisible = false,
  imgSrc
}) {
  const actionGroup = useRef();
  const searchBar = useRef();
  const initState = () => {
    searchBar.current.style.display = "none";
    actionGroup.current.style.display = "block";
  };

  useEffect(() => {
    initState();
  }, []);
  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: "90vh" }}
      >
        <div className="row text-light intro text-center justify-content-center pt-5 pb-4 py-md-0">
          <div className="col-10 col-md-9 col-lg-8">
            <h1 className="intro-heading">{heading}</h1>
            <p className="intro-text">{text}</p>
            <div style={{ display: searchVisible ? "block" : "none" }}>
              <div ref={searchBar} className="flex-row align-items-center">
                <FaArrowLeft className="me-3" onClick={() => initState()} />
                <div className="btn-group w-75">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-box"
                  />
                  <button className="btn btn-primary">
                    <FaSearch color="white" />
                  </button>
                </div>
              </div>

              {/* Button Action Groups */}
              <div ref={actionGroup}>
                <button className="btn btn-outline-primary">About Us</button>
                <button
                  className="btn btn-primary text-white ms-1"
                  onClick={() => {
                    searchBar.current.style.display = "flex";
                    actionGroup.current.style.display = "none";
                  }}
                >
                  <FaSearch color="white" /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="overlay-image" src={imgSrc} />
      <div className="overlay-mask"></div>
    </div>
  );
}
