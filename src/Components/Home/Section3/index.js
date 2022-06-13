import React from "react";
import Line from "../../Utilities/Line";
import "./style.scss";

export default function Section3() {
  return (
    <section class="section3 py-6 bg-light">
      <div className="container">
        <div className="text-center">
          <h1 className="text-center text-primary">Testimonials</h1>
          <p className="text-muted">
            Consequat veniam duis nostrud eu mollit ea officia dolore dolore
            consequat.
            <br />
            <Line width={"20%"} className="mx-auto my-3"/>
          </p>
        </div>

        <div
          className="carousel slide w-100"
          data-bs-ride="carousel"
          id="testimonials"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Testimony
                author="Aje Damilola"
                content="Esse eu et consequat aliquip laborum duis eu ex fugiat tempor sint proident aliquip voluptate. Enim reprehenderit dolore irure ut enim exercitation adipisicing elit cillum irure. Veniam veniam adipisicing sint et nostrud labore."
              />
            </div>
            <div className="carousel-item">
              <Testimony
                author="John Doe"
                content="Veniam velit anim pariatur nulla. Ut duis mollit pariatur et est minim et incididunt ad Lorem eu duis nulla labore. Quis nostrud ipsum dolore excepteur duis deserunt labore veniam aute ullamco tempor consectetur. Pariatur amet labore sunt reprehenderit elit ipsum laboris do est."
              />
            </div>
          </div>
          <a
            href="#testimonials"
            className="carousel-control-prev"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-primary rounded-pill"></span>
          </a>
          <a
            href="#testimonials"
            className="carousel-control-next"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon bg-primary rounded-pill"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimony({ author, content }) {
  return (
    <div>
      <div className="card text-center shadow m-auto testimony">
        <div className="card-body">
          <blockquote>
            {content}
            <br />
            <cite className="blockquote-footer"> {author}</cite>
          </blockquote>
          <img
            className="testimony-img rounded-circle"
            src={require("../../../Images/office1.jpg")}
          />
        </div>
      </div>
    </div>
  );
}
