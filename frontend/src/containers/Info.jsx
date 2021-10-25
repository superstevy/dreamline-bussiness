import React from "react";
import Steps from "../components/Common/Steps";

function Info() {
  return (
    <div id="info">
      <main>
        <Steps />

        <div className="choose instruct instruct-info">
          <p>Add your Info</p>
        </div>
        <form className="infos">
          <div className="name">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="role">
            <p>Role in company</p>
            <input type="text" />
          </div>
          <div className="comp-name">
            <p>Company Name</p>
            <input type="text" />
          </div>
          <div className="btn-add">
            <input className="next" value="Add" type="submit" />
          </div>
        </form>
      </main>

      <footer>
        <div className="btn-back">
          <a href="/logo" class="back">
            Back
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Info;
