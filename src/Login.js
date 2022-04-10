import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

import { Button } from "@material-ui/core";
import loginImg from "./img/login.svg";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="aboutProject">
        <h1>ER.CONNECT</h1>
        <p>
          This is the dummy text and will be repolaced later on here about the
          company and service will comes
        </p>
        <img src={loginImg} alt="" />
      </div>
      <div class="login_section">
        <div className="login__logo"></div>
        <Button onClick={signIn} className="btn">
          SignIn
        </Button>
      </div>
    </div>
  );
}

export default Login;
