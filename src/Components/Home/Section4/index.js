import React from "react";
import "./style.scss";
import Line from "../../Utilities/Line";
import { FaMapMarkerAlt, FaInfo, FaClock } from "react-icons/fa";

export default function Section4() {
  return (
    <section className="section4">
      <div className="wrapper">
        <div className="row text-center">
          <div className="col-12 col-md-7 bg text-light content">
            <h1>
              Demo Header
            </h1>
            <p className="pt-5 pb-3">
              Nostrud irure pariatur velit qui ut Lorem eiusmod est consectetur exercitation non do mollit. Cupidatat consectetur eiusmod sit quis eiusmod est labore nostrud deserunt. Mollit esse qui sint laboris velit nostrud aute id veniam cupidatat exercitation laborum. Nisi esse proident consectetur elit consectetur. Magna labore laboris occaecat adipisicing.

              Cillum eu excepteur dolor proident aliquip laborum id aute ullamco. Ex voluptate id occaecat adipisicing cillum commodo do laboris. Consequat est est aliquip et eu do occaecat. Cupidatat id eu culpa fugiat deserunt laborum nisi ad et exercitation consequat fugiat irure aliqua. Ut cupidatat minim et cillum do duis commodo ea. Sit elit cupidatat esse Lorem mollit sit.
            </p>
            <button className="btn btn-primary text-light">
              See More
            </button>
          </div>
          <div className="col-12 col-md-5 p-0">
            <img src={require("../../../Images/office2.jpg")} className="w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
