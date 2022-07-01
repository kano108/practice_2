import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {

const onLogout = () =>{
    localStorage.setItem("islogin",false)
}
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
            <NavLink to="/" onClick={onLogout}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
