import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
