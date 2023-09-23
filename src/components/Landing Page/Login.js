import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <p className="heading-login">Log In Here</p>
        <p className="text-login">
          View all of your reports and scheduled health exams in one location.
        </p>
      </div>
      <input
        className="login-input"
        type="text"
        placeholder="Mobile / Email ID"
      />
      <input className="login-input" type="password" placeholder="Password" />
      <div>
        <Link className="login-link" href="/">
          Forget Password?
        </Link>{" "}
        |{" "}
        <Link className="login-link" href="/">
          Register
        </Link>
      </div>
      <div>
        <button className="primary-btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
