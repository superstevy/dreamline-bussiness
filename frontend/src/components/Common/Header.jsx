import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { signOut } from "../../reducks/userAuth/operations";

function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");

  const signOutButton = (e) => {
    dispatch(signOut());
    dispatch(push("/signin"));
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
            <a href="/generate">Next</a>
          </div>
          {key ? (
            <a href class="signup" onClick={signOutButton}>
              Logout
            </a>
          ) : (
            <a href class="signin" onClick={() => dispatch(push("/signin"))}>
              Sign in
            </a>
          )}
          {key ? (
            <a
              href
              class="mycard"
              onClick={() => dispatch(push("/userbackground"))}
            >
              My cards
            </a>
          ) : (
            <a href class="signup" onClick={() => dispatch(push("/signup"))}>
              Sign up
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
