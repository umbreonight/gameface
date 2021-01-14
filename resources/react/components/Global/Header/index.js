import React, { useState, useEffect, Fragment } from "react";
import NavigationLeft from "./NavigationLeft";
import NavigationRight from "./NavigationRight";

const Header = () => {
  const [isOnline, setNetworkStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      navigator.onLine ? setNetworkStatus(true) : setNetworkStatus(false);
    });

    // now we listen for network status changes
    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });

    window.addEventListener("offline", () => {
      setNetworkStatus(false);
    });
  }, []);

  return (
    <Fragment>
      <div className="header-banner">
        <div className="banner-image"></div>
        <div className="banner-content">
          <img width="200px" src="/static/images/gameface-white.svg"></img>
        </div>
      </div>
      <header className="header">
        <div className="header-inner">
          <div className="header-extra"></div>
          <nav className="header-navbar">
            <nav className="mobile-nav">
              <a href="#0" id="sidenav-toggle" className="sidenav-toggle">
                <i className="icon">menu</i>
              </a>
              <a>
                <i className="icon">search</i>
              </a>
            </nav>
            <NavigationLeft />
            <NavigationRight />
          </nav>
          <div
            className={
              "header-lightbar" + (isOnline ? " is-online" : " is-offline")
            }
          ></div>
          <div className="header-brand">
            <img
              src="/static/images/gameface-white.svg"
              alt="gameface logo"
            ></img>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
