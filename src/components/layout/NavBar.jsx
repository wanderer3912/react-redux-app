import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
        <Link to="/" className="navbar-brand">
          <h3>ReactApp</h3>{" "}
        </Link>

        <NavItems />
      </nav>
    </>
  );
};

export default NavBar;
