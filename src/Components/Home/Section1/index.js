import React from "react";
import { FaUnity, FaMicrosoft, FaFacebook, FaMagento, FaGithub, FaGoogleDrive } from "react-icons/fa"
import { Fade, FadeLeft, FadeRight, FadeUp } from "../../Utilities/Animations";
import "./style.scss";

export default function Section1() {
  return (
    <section className="section1">
      <div className="container">
        <h2 className="text-center">
          <FadeUp>
            Trusted By
          </FadeUp>
        </h2>
        <div className="row justify-content-center text-center pt-5 pb-5 gy-4">
          <div className="col-4 col-md-3 col-lg-2">
            <FadeUp>
              <FaUnity size={45} color="#555" />
            </FadeUp>
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FadeUp delay="200">

              <FaFacebook size={45} color="#555" />
            </FadeUp>
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FadeUp delay="300">

              <FaMagento size={45} color="#555" />
            </FadeUp>
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FadeUp delay="400">

              <FaGithub size={45} color="#555" />
            </FadeUp>
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FadeUp delay="500">

              <FaMicrosoft size={45} color="#555" />
            </FadeUp>
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <FadeUp delay="600">

              <FaGoogleDrive size={45} color="#555" />
            </FadeUp>
          </div>

        </div>


        {/* Info Text */}
        <div className="row py-7 align-items-center gy-4 gx-7 ">
          <div className="col-12 col-md-7 order-1 order-md-0">
            <FadeRight>
              <h3>
                Fugiat esse commodo Lorem dolore
              </h3>
              <p>
                Aliqua irure est nisi pariatur deserunt ad tempor quis voluptate. Ad ex pariatur in tempor anim. Velit minim anim labore reprehenderit aute veniam cupidatat esse et eiusmod. Excepteur ad veniam eiusmod reprehenderit fugiat. Dolor sint nostrud ut voluptate ipsum elit dolor veniam eiusmod ex voluptate incididunt. Ut et eiusmod mollit anim pariatur laborum excepteur.
              </p>
            </FadeRight>

          </div>
          <div className="col-12 col-md-5 order-0 order-md-1">
            <FadeLeft delay='200'>
              <img src={require("../../../Images/Service/01.png")} className="img-fluid " />
            </FadeLeft>
          </div>
        </div>
        <div className="row py-7 align-items-center gy-4 gx-7">

          <div className="col-12 col-md-5">
            <FadeUp>

              <img src={require("../../../Images/Portfolio/01.jpg")} className="img-fluid rounded-pill" />
            </FadeUp>
          </div>
          <div className="col-12 col-md-7">
            <FadeLeft>
              <h3>
                Fugiat esse commodo Lorem dolore
              </h3>
            </FadeLeft>
            <Fade>
              <p>
                Aliqua irure est nisi pariatur deserunt ad tempor quis voluptate. Ad ex pariatur in tempor anim. Velit minim anim labore reprehenderit aute veniam cupidatat esse et eiusmod. Excepteur ad veniam eiusmod reprehenderit fugiat. Dolor sint nostrud ut voluptate ipsum elit dolor veniam eiusmod ex voluptate incididunt. Ut et eiusmod mollit anim pariatur laborum excepteur.
              </p>
            </Fade>

          </div>

        </div>
      </div>

    </section>
  );
}
