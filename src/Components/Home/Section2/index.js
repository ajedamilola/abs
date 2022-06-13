import React from "react";
import "./style.scss";
import { MdPeople,MdContactSupport,MdOnlinePrediction } from "react-icons/md";
export default function Section2() {
  return (
    <div className="section2">
      <div className="container">
        <h1 className="text-center">Another Header</h1>
        <div className="py-5">
          <div className="row gy-3">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow">
                
                <div className="card-body">
                  <MdPeople className="icon" />
                  <h2>
                    Heading
                  </h2>
                  <p className="card-text">
                    Pariatur ea quis officia eu adipisicing in ea mollit labore
                    laborum aute aliquip.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow">
                
                <div className="card-body">
                  <MdContactSupport className="icon" />
                  <h2>
                    Heading
                  </h2>
                  <p className="card-text">
                    Pariatur ea quis officia eu adipisicing in ea mollit labore
                    laborum aute aliquip.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow">
                
                <div className="card-body">
                  <MdOnlinePrediction className="icon" />
                  <h2>
                    Heading
                  </h2>
                  <p className="card-text">
                    Pariatur ea quis officia eu adipisicing in ea mollit labore
                    laborum aute aliquip.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <img src={require("../../../logo.png")} className="corner-logo" />
    </div>
  );
}
