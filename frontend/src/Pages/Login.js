import React from "react";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const linkedin = () => {
    window.open("http://localhost:5000/auth/linkedin", "_self");
  };
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <i className="fab fa-google" />
          </div>
          <div className="loginButton linkedin" onClick={linkedin}>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="loginButton github" onClick={github}>
            <i className="fa-brands fa-github" />
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR </div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
