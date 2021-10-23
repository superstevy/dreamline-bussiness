import React from "react";
import { useDispatch } from "react-redux";

import { signOut } from "../../reducks/userAuth/operations";

function Header() {
  const dispatch = useDispatch();

  const signOutButton = (e) => {
    e.preventDefault();
    dispatch(signOut());
  };

  return (
    <header class="header">
      <nav class="flex-header">
        <div class="mb-0">
          <p>
            <span> DREAMLINE</span> digital
          </p>
        </div>
        <div class="mb-1">
          <div class="next">
            <a href="/">Next</a>
          </div>
          <div class="signin">
            <a href="/signin">Sign in</a>
          </div>
          <div class="signup">
            <a href="/signup">Sign up</a>
          </div>
          <div className="signout">
            <a href="" onClick={signOutButton}>
              Sign out
            </a>
          </div>
          <div class="mycard">
            <a href="/generate">Create card</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
