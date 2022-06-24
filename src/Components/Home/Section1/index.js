import React from "react";
import { FaUnity, FaMicrosoft, FaFacebook, FaMagento, FaGithub, FaGoogleDrive } from "react-icons/fa"
import "./style.scss";

export default function Section1() {
  return (
    <section className="section1">
      <div className="container">
        <h2 className="text-center">
          Trusted By
        </h2>
        <div className="row justify-content-center text-center pt-3 pb-5 gy-4">
          <div className="col-4 col-md-3 col-lg-2">
            <FaUnity size={45} color="#555" />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FaFacebook size={45} color="#555" />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FaMagento size={45} color="#555" />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FaGithub size={45} color="#555" />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FaMicrosoft size={45} color="#555" />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FaGoogleDrive size={45} color="#555" />
          </div>

        </div>


        {/* Info Text */}
        <div className="row py-7 align-items-center gy-4 gx-7 order-sm-1 order-md-0">
          <div className="col-12 col-md-7">
            <h3>
              Fugiat esse commodo Lorem dolore
            </h3>
            <p>
              Aliqua irure est nisi pariatur deserunt ad tempor quis voluptate. Ad ex pariatur in tempor anim. Velit minim anim labore reprehenderit aute veniam cupidatat esse et eiusmod. Excepteur ad veniam eiusmod reprehenderit fugiat. Dolor sint nostrud ut voluptate ipsum elit dolor veniam eiusmod ex voluptate incididunt. Ut et eiusmod mollit anim pariatur laborum excepteur.
            </p>
          </div>
          <div className="col-12 col-md-5 order-sm-0 order-md-1">
            <img src={require("../../../Images/office1.jpg")} className="img-fluid" />
          </div>
        </div>
        <div className="row py-7 align-items-center gy-4 gx-7">

          <div className="col-12 col-md-5">
            <img src={require("../../../Images/office2.jpg")} className="img-fluid" />
          </div>
          <div className="col-12 col-md-7">
            <h3>
              Fugiat esse commodo Lorem dolore
            </h3>
            <p>
              Aliqua irure est nisi pariatur deserunt ad tempor quis voluptate. Ad ex pariatur in tempor anim. Velit minim anim labore reprehenderit aute veniam cupidatat esse et eiusmod. Excepteur ad veniam eiusmod reprehenderit fugiat. Dolor sint nostrud ut voluptate ipsum elit dolor veniam eiusmod ex voluptate incididunt. Ut et eiusmod mollit anim pariatur laborum excepteur.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
