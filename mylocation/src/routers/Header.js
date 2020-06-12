import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../styles/styles.css";
const Header = ({ className }) => (
  <div className={className}>
    <h1>MyLocations</h1>

    <NavLink
      to="/"
      className="barButtons"
      activeClassName="barButtonsOnPage"
      exact={true}
    >
      <Button variant="contained">Dashboard </Button>
    </NavLink>

    <NavLink
      to="/Category"
      className="barButtons"
      activeClassName="barButtonsOnPage"
    >
      <Button variant="contained">Category </Button>
    </NavLink>

    <NavLink
      to="/Location"
      className="barButtons"
      activeClassName="barButtonsOnPage"
    >
      <Button variant="contained">Location </Button>
    </NavLink>
  </div>
);

// dont forget to desguin the Link nav
export default Header;
