import React from "react";
import { FaBuilding } from "react-icons/fa";
import "./stats.scss";
import CountUp from "../../Utilities/CountUp";

export default function Stats() {
  return (
    <div className="container">
      <div className="stat-container row gy-3 gx-0 justify-content-center">
        <div className="col-6 col-md-4">
          <div className="stat card text-primary start">
            <div className="card-body">
              <FaBuilding className="stat-icon"/>
              <br />
              <CountUp to={300} duration={1.5} className="stat-count" after = "+" timeOut={1000}/>
              <div className="stat-text">Seminars</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="stat card text-primary middle">
            <div className="card-body">
              <FaBuilding className="stat-icon"/>
              <br />
              <CountUp to={300} duration={1.5} className="stat-count" after = "+" timeOut={1000}/>
              <div className="stat-text">Seminars</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="stat card text-primary end">
            <div className="card-body">
              <FaBuilding className="stat-icon"/>
              <br />
              <CountUp to={300} duration={1.5} className="stat-count" after = "+" timeOut={1000}/>
              <div className="stat-text">Seminars</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
