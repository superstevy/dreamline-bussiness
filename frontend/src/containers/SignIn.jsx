import React from "react";


function SignIn () {
    return (
        <body class="yb-body">
            <section>
                <div class="sign-in">
                    <div class="sign-up-2">
                        <div class="close-btn-sign-in">+</div>
                        <div class="title">
                            <p class="title-2">DREAMLINE</p> <p class="title-3">digital</p>
                        </div>
                        <div class="sign-up-3">
                            <p>Sign in</p>
                        </div>

                        <form action="">
                            <input type="text" placeholder="Email address"></input>
                            <input type="text" placeholder="Password"></input>
                            <button type="submit"> Log in </button>
                        </form>
                        <p class="members">New user? <a id="sign-up-btn" href="/yb-sign-up.html">sign-up.</a></p>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default SignIn;