import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div>
      <Link to="/" >Home</Link>
      <Link to="/login" >Login</Link>
      <Link to="/signup" >Sign Up</Link>
    </div>
  );
};

export default NavBar;
