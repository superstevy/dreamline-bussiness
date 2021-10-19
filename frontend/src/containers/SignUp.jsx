import React from "react";

function SignUp () {
    return (
        <body class="yb-body">
            <section>
                <div class="sign-up">
                    <div class="sign-up-2">
                        <div class="close-btn">+</div>
                        <div class="title">
                            <p class="title-2">DREAMLINE</p> <p class="title-3">digital</p>
                        </div>
                        <div class="sign-up-3">
                            <p>Sign up</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Email address"></input>
                            <input type="text" placeholder="Password"></input>
                            <button type="submit"> Sign up</button>
                        </form>
                        <p class="members">Already a Member? <a id="sign-in-redirect" href="/yb-sign-in.html">Sign in.</a></p>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default SignUp;