import React from "react";

import Steps from "../components/Common/Steps";

import Plus_img from "../assets/img/+.png";

function Logo() {
  return (
    <div id="logo">
      <main>
        <Steps />

        <div className="choose instruct">
          <p>Upload your Logo</p>
        </div>
        <div className="addLogo">
          <img src={Plus_img} alt="" />
        </div>
      </main>

      <footer>
        <div className="btn">
          <div className="btn-1">
            <a href="/info" class="next">
              Next
            </a>
          </div>
          <hr />
          <div className="btn-2">
            <a href="/generate" class="back">
              Back
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Logo;
