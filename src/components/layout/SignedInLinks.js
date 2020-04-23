import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <NavLink to="/create">New Projects</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
