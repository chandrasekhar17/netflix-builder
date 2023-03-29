import React from "react";
import { Form } from "react-router-dom";
import "./Login.css";
function Login(props) {
  return (
    <div className="LoginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src={require(`./assets/images/Netflix-logo-red-black-png.png`)}
          alt="netflix"
        />
        <button className="loginScreen_button">Sign In</button>
        <div className="LoginScreen_gradient" />
      </div>
      <div className="loginScreenbody">
        <>
          <h1>Unlimited films, TV Programs and more.</h1>
          <h2>Watch anywhere, cancel anytime</h2>
          <h3>
            Ready to watch ? Enter your email to create or restart your
            membership
          </h3>
          <div className="loginScreen_input">
            <input type="email" placeholder="Email address" />
            <button className="loginScreen_getStarted">
                Get Started {`>`}
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default Login;
