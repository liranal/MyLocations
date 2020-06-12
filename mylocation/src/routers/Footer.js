import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import LocationListFilters from "../components/Location/LocationListFilters";
import CategoryListFilters from "../components/Category/CategoryListFilters";
import Button from "@material-ui/core/Button";
import "../styles/styles.css";
const Footer = ({ location: { pathname }, className }) => {
  const route = useMemo(() => {
    return pathname.split("/")[1];
  }, [pathname]);
  if (pathname === "/Category") {
    return (
      <footer className={className}>
        <h1>Actions</h1>
        <NavLink to={`/${route}/Add`} className="barButtons" activeClassName="">
          <Button variant="contained">Add</Button>
        </NavLink>
        <CategoryListFilters />
      </footer>
    );
  } else if (pathname === "/Location") {
    return (
      <footer className={className}>
        <h1>Actions</h1>
        <NavLink to={`/${route}/Add`} className="barButtons" activeClassName="">
          <Button variant="contained">Add </Button>
        </NavLink>
        <LocationListFilters />
      </footer>
    );
  } else {
    return (
      <footer className={className}>
        <h1>Hello WellDone Software</h1>
      </footer>
    );
  }
};

export default Footer;
