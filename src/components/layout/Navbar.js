import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper grey darken-3">
          <Link to="/" class="brand-logo">
            Logo
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
