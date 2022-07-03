import React from "react";
import "./style.scss";
import { MdPeople, MdContactSupport, MdOnlinePrediction } from "react-icons/md";
export default function Section2() {
  return (
    <div className="section2">

      <div className="bg-img-overlay">
        <img src={require("../../../Images/Blog/2.jpg")} className="img-fluid bg-img" />
      </div>
      {/* Main Content */}
      <div className="text-center container">
        <h1>
          Demo Header Here
        </h1>
        <p>
          Velit laborum enim non ex ea mollit minim deserunt laboris sunt. Aliqua eiusmod sit nisi cillum enim duis culpa non. Consectetur labore esse irure consequat nostrud dolor culpa aliquip tempor ad. Aliquip veniam et amet ipsum exercitation. Dolore irure do aute aliqua quis aliqua.Sit mollit veniam consequat quis consectetur velit excepteur aute mollit ut esse officia pariatur consequat. Ipsum deserunt magna proident exercitation nulla est ullamco. Commodo laboris deserunt fugiat laborum. Duis qui qui cillum exercitation fugiat est cupidatat aliquip laborum eu.
        </p>
      </div>
    </div>
  );
}
