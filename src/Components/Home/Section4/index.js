import React from "react";
import "./style.scss";
import Line from "../../Utilities/Line";
import { FaMapMarkerAlt, FaInfo, FaClock } from "react-icons/fa";

export default function Section4() {
  return (
    <section className="section4 py-7">
      <div className="container">
        <h1 className="bg-primary  text-center text-md-start">
          What We Are Up to
          <Line width="30%" className="bg-primary" />
        </h1>
        <div className="row py-4 gy-4">
          <Event
            name="Event Name"
            content="Id tempor aliqua sint magna laborum officia dolore cillum culpa esse adipisicing sit. Ut id commodo incididunt officia occaecat tempor pariatur "
            imgSrc = {require("../../../Images/office2.jpg")}
          />

          <Event
            name="Event Name"
            content="Id tempor aliqua sint magna laborum officia dolore cillum culpa esse adipisicing sit. Ut id commodo incididunt officia occaecat tempor pariatur "
            imgSrc = {require("../../../Images/office1.jpg")}
          />

          <Event
            name="Event Name"
            content="Id tempor aliqua sint magna laborum officia dolore cillum culpa esse adipisicing sit. Ut id commodo incididunt officia occaecat tempor pariatur "
            imgSrc = {require("../../../Images/bgpeople.jpg")}
          />
        </div>
      </div>
    </section>
  );
}

const Event = ({ name = "", content = "", imgSrc }) => (
  <div className="col-12 col-md-6 col-lg-4">
    <div className="event" style={{}}>
      <img
        className="card-img-top"
        src={imgSrc}
      />
      <div className="main">
        <div className="card-header">
          <h3 className="title">{name}</h3>
          <hr />
        </div>
        <div className="card-body">
          <p className="card-text text-muted">
            <FaInfo className="text-muted" />
            {content}
          </p>
          <button className="btn btn-outline-primary">See More</button>
        </div>
      </div>
    </div>
  </div>
);
