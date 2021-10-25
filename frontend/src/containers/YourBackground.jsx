import React from "react";
import group33 from "../assets/img/Mask Group 33.png";
import group44 from "../assets/img/Mask Group 34.png";
import addbtn from "../assets/img/+.svg";
import Header from "../components/Common/Header";

function YourBackground () {
    return (
    <>
        <Header />
        <div id="Yourbackground" class="yb-bg">
            <div class="yb-body">
                <main class="yb-main">

                    <div class="YB-header">
                        <p>Your Backgrounds</p>
                    </div>

                    <div class="scrolling-wrapper">
                        <div class="card">
                            <img src={group33} alt=""></img>
                            <div class="link-panel">
                                <a id="preview-btn">Preview | </a><button class="DL-btn">Download</button>
                            </div>
                        </div>

                        <div class="card">
                            <img src={group44} alt=""></img>
                            <div class="link-panel">
                                <a href="#">Preview | </a><button class="DL-btn">Download</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="add-btn">
                                <img src={addbtn}></img>
                            </div> 
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>
    );

export default YourBackground;
