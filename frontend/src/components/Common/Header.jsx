import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { signOut } from "../../reducks/userAuth/operations";

function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [signedIn, setSignedIn] = useState(false);

  const signOutButton = (e) => {
    dispatch(signOut());
    setSignedIn(false);
  };

  useEffect(() => {
    if (key != null) {
      setSignedIn(true);
    }
  }, [key]);

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
          {signedIn ? (
            <div className="signout">
              <a href="" onClick={signOutButton}>
                Sign out
              </a>
            </div>
          ) : (
            <div class="signin">
              <a href="/signin">Sign in</a>
            </div>
          )}
          <div class="signup">{!signedIn && <a href="/signup">Sign up</a>}</div>
          <div class="mycard">
            <a href="/generate">Create card</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
