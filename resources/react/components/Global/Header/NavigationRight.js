import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const NavigationRight = () => {
  return (
    <nav className="navigation navigation-right">
      <NavLink
        exact
        to="/account"
        className="navigation-link"
        activeClassName="is-active"
      >
        Account
      </NavLink>
      <NavLink
        exact
        to="/stats"
        className="navigation-link"
        activeClassName="is-active"
      >
        Stats
      </NavLink>
      <NavLink
        exact
        to="/events"
        className="navigation-link"
        activeClassName="is-active"
      >
        Events
      </NavLink>
      <NavLink
        exact
        to="/store"
        className="navigation-link"
        activeClassName="is-active"
      >
        Store
      </NavLink>
    </nav>
  );
};

export default NavigationRight;
