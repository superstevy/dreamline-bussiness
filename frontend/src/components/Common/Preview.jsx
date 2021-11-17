import React, { useState, useEffect } from "react";
import API from "../../API";

const api = new API();

function Preview({ selectedImageId, setShowPreview }) {
  const [image, setImage] = useState({});

  useEffect(() => {
    api
      .getUserbackground(selectedImageId)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        alert("Failed to connect API: ImageDetail");
      });
  }, []);

  const clickCloseButton = () => {
    setShowPreview(false);
  };

  return (
    <body>
      {/* <!-- preview-modal --> */}
      <section>
        <div class="preview">
          <div class="preview-close-btn">
            <input type="submit" value="+" onClick={() => clickCloseButton()} />
          </div>
          <img src={image.generated_background} alt=""></img>

          <button class="preview-DL" type="submit">
            Download
          </button>
        </div>
      </section>
    </body>
  );
}

export default Preview;
