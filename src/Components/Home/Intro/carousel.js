import React from "react";
import Intro from ".";

export default function carousel() {
  return (
    <div
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      id="main-carousel"
      data-bs-hover="none"
    >
      {/* Indicators */}

      <ol className="carousel-indicators">
        <li
          data-bs-target="#main-carousel"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#main-carousel" data-bs-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Intro
            heading="Enim ex non ullamco quis ea aute ad adipisicing veniam adipisicing aute."
            text="Minim nulla sint magna ea minim irure. Ad elit mollit incididunt reprehenderit excepteur eiusmod magna eu cupidatat eiusmod sit. Sint id proident laboris Lorem elit aliquip"
            searchVisible={true}
            imgSrc={require("../../../Images/bg.jpg")}
          />
        </div>
        <div className="carousel-item">
          <Intro
            heading="Magna id id laborum in sunt cupidatat velit."
            text="Ullamco cillum irure et nostrud excepteur ea qui. Lorem adipisicing sint adipisicing cillum esse veniam. Est anim eiusmod Lorem ea velit do nulla cillum deserunt. Ipsum officia anim enim cupidatat adipisicing mollit elit elit veniam. Minim duis exercitation amet elit dolor nisi deserunt incididunt nisi reprehenderit ad sit."
            imgSrc={require("../../../Images/bg.webp")}
          />
        </div>
      </div>
      {/* Controls */}
      <button
        className="carousel-control-prev"
        href="#main-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        href="#main-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
