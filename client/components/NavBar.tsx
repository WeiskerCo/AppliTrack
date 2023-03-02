import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../images/logo-large.png";

const NavBar: React.FC = () => {
  return (
    <div id="nav">
      <Link className="link" to="/">
        <img src="../images/logo-large.png" alt="logo" />
      </Link>
      <div id="login-div">
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
