import React from "react";
import "./style.scss";

export default function Section1() {
  return (
    <section className="section1 ">
      <div className="container pb-6">
        <h1 className="text-center header text-primary">Demo Header</h1>
        <p className="text-center pt-2 pb-3">
          Voluptate eu fugiat dolore ipsum nulla.
        </p>
        <hr className="mb-5" />
        <div className="row gy-6 align-items-center my-5">
          {/* FIrst row */}

          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src={require("../../../Images/office2.jpg")}
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="text-primary text-end">Lorem Subheader</h2>
            <p>
              Consequat proident nulla nulla commodo. Culpa enim aute veniam
              cillum nisi dolor. Occaecat culpa enim tempor nisi. Aute deserunt
              nisi amet ex non minim mollit reprehenderit aliqua. Exercitation
              fugiat irure ea eu amet. Minim eu eiusmod esse veniam exercitation
              ipsum veniam occaecat et exercitation irure officia. Est officia
              consectetur officia amet nostrud exercitation Lorem. Qui duis eu
              ex ea ex laborum culpa et ea exercitation. Consectetur tempor quis
              exercitation elit aliqua minim tempor sint. Do laborum in ullamco
              adipisicing.
            </p>
          </div>

          {/* Second row */}
          <div className="col-12 col-md-6 pt-md-6 order-3 order-md-2">
            <h2 className="text-primary text-start">Lorem Subheader</h2>
            <p>
              Consequat proident nulla nulla commodo. Culpa enim aute veniam
              cillum nisi dolor. Occaecat culpa enim tempor nisi. Aute deserunt
              nisi amet ex non minim mollit reprehenderit aliqua. Exercitation
              fugiat irure ea eu amet. Minim eu eiusmod esse veniam exercitation
              ipsum veniam occaecat et
            </p>
          </div>
          <div className="col-12 col-md-6 pt-md-6 order-2 order-md-3">
            <img
              className="img-fluid"
              src={require("../../../Images/office1.jpg")}
            />
          </div>
        </div>
        <div className="text-center pt-5">
          <button className="btn btn-outline-primary">Enquire More</button>
        </div>
      </div>
    </section>
  );
}
