import React from "react";
import { Link } from "react-router-dom";

export const notFound = () => (
  <div>
    Route not found <br />
    <Link to="/">go back to safety</Link>
  </div>
);

export default notFound;
