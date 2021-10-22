import React from "react";

function YourBackground() {
  return (
    <div className="yb-body">
      <main className="yb-main">
        <div className="YB-header">
          <p>Your Backgrounds</p>
        </div>

        <div className="scrolling-wrapper">
          <div className="card">
            <img src="../assets/img/Mask Group 33.png" alt=""></img>
            <div className="link-panel">
              <a id="preview-btn">Preview | </a>
              <button className="DL-btn">Download</button>
            </div>
          </div>

          <div className="card">
            <img src="../assets/img/Mask Group 34.png" alt=""></img>
            <div className="link-panel">
              <a href="#">Preview | </a>
              <button className="DL-btn">Download</button>
            </div>
          </div>

          <div className="card">
            <div className="add-btn">
              <img src="../src/assets/img/+.svg"></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default YourBackground;
