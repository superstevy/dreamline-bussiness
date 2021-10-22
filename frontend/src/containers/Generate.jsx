import React from "react";

import Steps from "../components/Common/Steps";

import Roberto from "../assets/img/roberto-nickson-tleCJiDOri0-unsplash.png";
import MG26 from "../assets/img/Mask Group 26.png";
import Workspace from "../assets/img/myhq-workspaces-OhNSJMm9yJI-unsplash.png";
import MG25 from "../assets/img/Mask Group 25.png";
import MG27 from "../assets/img/Mask Group 27.png";
import MG28 from "../assets/img/Mask Group 28.png";
import MG29 from "../assets/img/Mask Group 29.png";
import MG30 from "../assets/img/Mask Group 30.png";

function Generate() {
  return (
    <div id="generate">
      <main>
        <Steps />

        <div className="choose">
          <p>Choose your background Image</p>
        </div>
        <div className="flex-2">
          <div className="bgd">
            <img src={Roberto} alt="" />
          </div>
          <div className="bgd">
            <img src={MG26} alt="" />
          </div>
          <div className="bgd">
            <img src={Workspace} alt="" />
          </div>
          <div className="bgd">
            <img src={MG25} alt="" />
          </div>
          <div className="bgd">
            <img src={MG27} alt="" />
          </div>
          <div className="bgd">
            <img src={MG28} alt="" />
          </div>
          <div className="bgd">
            <img src={MG29} alt="" />
          </div>
          <div className="bgd">
            <img src={MG30} alt="" />
          </div>
        </div>
      </main>

      <footer>
        <div className="btn-1">
          <a href="/logo" className="next">
            Next
          </a>
        </div>
        <div className="btn-2">
          <a href="/" className="back">
            Back
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Generate;
