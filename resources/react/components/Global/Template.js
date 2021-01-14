import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as site from "../../pages";

// Global components
import Header from "./Header";
import Footer from "./Footer";
import Sidenav from "./Sidenav";

const Template = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Sidenav />
        <Switch>
          <Route exact path="/" component={site.News} />
          <Route exact path="/article" component={site.Article} />
          <Route exact path="/category" component={site.Category} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default Template;
