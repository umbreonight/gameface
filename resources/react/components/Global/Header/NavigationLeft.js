import React from "react";

import { BrowserRouter as Router, NavLink } from "react-router-dom";

const NavigationLeft = () => {
  return (
    <nav className="navigation navigation-left">
      <NavLink
        exact
        to="/"
        className="navigation-link"
        activeClassName="is-active"
      >
        News
      </NavLink>
      <NavLink
        exact
        to="/article"
        className="navigation-link"
        activeClassName="is-active"
      >
        Article
      </NavLink>
      <NavLink
        exact
        to="/category"
        className="navigation-link"
        activeClassName="is-active"
      >
        Category
      </NavLink>
      <NavLink
        exact
        to="/media"
        className="navigation-link"
        activeClassName="is-active"
      >
        Media
      </NavLink>
    </nav>
  );
};

export default NavigationLeft;
