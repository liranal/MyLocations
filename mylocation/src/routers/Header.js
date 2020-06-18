import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../styles/styles.css";
import { AppBar, Tabs, Tab } from "@material-ui/core";
const Header = ({ className }) => (
  <div className={className}>
    <AppBar position="static">
      <Tabs aria-label="simple tabs example">
        <Tab
          label={
            <NavLink
              to="/"
              className="barButtons"
              activeClassName="barButtonsOnPage"
              exact={true}
            >
              <Button variant="contained">Dashboard </Button>
            </NavLink>
          }
        ></Tab>
        <Tab
          label={
            <NavLink
              to="/Category"
              className="barButtons"
              activeClassName="barButtonsOnPage"
            >
              <Button variant="contained">Category </Button>
            </NavLink>
          }
        ></Tab>
        <Tab
          label={
            <NavLink
              to="/Location"
              className="barButtons"
              activeClassName="barButtonsOnPage"
            >
              <Button variant="contained">Location </Button>
            </NavLink>
          }
        ></Tab>
      </Tabs>
    </AppBar>
  </div>
);

// dont forget to desguin the Link nav
export default Header;
