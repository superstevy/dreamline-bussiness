import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Steps from "./Steps";

import { fetchBimg } from "../../reducks/backgroundimages/operations";
import { getBimg } from "../../reducks/backgroundimages/selectors";

function SelectBackground({
  setStep,
  inputBackgroundId,
  setInputBackgroundId,
}) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const bImg = getBimg(selector);

  useEffect(() => {
    dispatch(fetchBimg());
  }, []);

  return (
    <div>
      <main>
        <Steps />

        <div class="choose">
          <p>Choose your background Image</p>
        </div>
        <div class="flex-2">
          {bImg["results"] &&
            bImg["results"].map((image) => (
              <div class="bgd" key={image.id}>
                <img
                  src={image.image}
                  alt=""
                  onClick={() => setInputBackgroundId(image.id)}
                />
              </div>
            ))}
        </div>
      </main>

      <footer>
        <div class="btn-1">
          <button onClick={() => setStep(2)} class="next">
            Next
          </button>
        </div>
        <div class="btn-2">
          <a href="/" class="back">
            Back
          </a>
        </div>
      </footer>
    </div>
  );
}

export default SelectBackground;
