import React from 'react';

function YourBackground () {
    return (
        <body class="yb-body">
            <main class="yb-main">

                <div class="YB-header">
                    <p>Your Backgrounds</p>
                </div>

                <div class="scrolling-wrapper">
                    <div class="card">
                        <img src="../assets/img/Mask Group 33.png" alt=""></img>
                        <div class="link-panel">
                            <a id="preview-btn">Preview | </a><button class="DL-btn">Download</button>
                        </div>
                    </div>

                    <div class="card">
                        <img src="../assets/img/Mask Group 34.png" alt=""></img>
                        <div class="link-panel">
                            <a href="#">Preview | </a><button class="DL-btn">Download</button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="add-btn">
                            <img src="../src/assets/img/+.svg"></img>
                        </div> 
                    </div>
                </div>
            </main>
        </body>
    );
}

export default YourBackground;