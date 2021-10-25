import React from "react";
import preview from "../assets/img/Group 62.png"

function Preview () {
    return (
        <body>
            {/* <!-- preview-modal --> */}
            <section>
                <div class="preview">
                    <div class="preview-close-btn">+</div>
                    <img src={preview}></img>

                    <button class="preview-DL" type="submit">Download</button>
                </div>
            </section>          
        </body>
    );
}

export default Preview;