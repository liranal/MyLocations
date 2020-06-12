import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyLocationDashboardPage from "../components/MyLocationDashBoard";
import LocationList from "../components/Location/LocationList";
import notFound from "../components/notFound";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import AddLocationPage from "../components/Location/AddLocationPage";
import CategoryList from "../components/Category/CategoryList";
import AddCategoryPage from "../components/Category/AddCategoryPage";
import EditCategoryPage from "../components/Category/EditCategoryPage";
import EditLocationPage from "../components/Location/EditLocationPage";

/* Styled Component for header */
const HeaderStyled = styled(Header)`
  display: flex;
  top: 0;
  text-align: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  box-shadow: 1px 10px 20px #888888;
  color: white;
  justify-content: space-evenly;
`;

/* Styled Compoment for footer */
const FooterStyled = styled(Footer)`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  color: white;
  text-align: center;
  justify-content: space-evenly;
  box-shadow: 1px 10px 10px 20px #888888;
`;

const AppRouter = () => (
  <BrowserRouter>
    <section>
      {/* Header Styled Component */}
      <HeaderStyled />
      <Switch>
        {/* Main Page */}
        <Route path="/" component={MyLocationDashboardPage} exact />

        {/* Location page - Allow Add, Edit, Remove and show all locations in Store*/}
        <Route path="/Location" exact component={LocationList} />

        {/* Add Location Page */}
        <Route path="/Location/Add" exact component={AddLocationPage} />

        {/* Category page - Allow Add, Edit, Remove and show all categories in Store*/}
        <Route path="/Category" exact component={CategoryList} />

        {/* Add Category page*/}
        <Route path="/Category/Add" exact component={AddCategoryPage} />

        {/* Edit Category page */}
        <Route path="/Category/edit/:id" exact component={EditCategoryPage} />

        {/* Edit Location page */}
        <Route path="/Location/edit/:id" exact component={EditLocationPage} />

        {/* Default Page */}
        <Route component={notFound} />
      </Switch>

      {/* Footer Styled Component */}
      <Route component={FooterStyled} />
    </section>
  </BrowserRouter>
);

export default AppRouter;
