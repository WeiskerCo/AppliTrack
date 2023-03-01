import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div id='nav'>
      <img src="" alt="logo" />
      <Link className="link" to="/" >Home</Link>
      <div id="login-div">
        <Link className="link" to="/login" >Login</Link>
        <Link className="link" to="/signup" >Sign Up</Link>
      </div>
    </div>
  );
};

export default NavBar;
