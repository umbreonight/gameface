import React, { useState, Fragment } from "react";

import UserAccessControl from "./UserAccessControl";
import UserActions from "./UserActions";
import SectionTitle from "../../Global/SectionTitle";

const UserControl = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const userSignIn = () => {
    setIsSignedIn(true);
  };

  const userSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <section name="user-control">
      <SectionTitle title="User" />
      <div className="user-control">
        <div className="user-profile">
          <div className="user">
            <img
              src={
                isSignedIn
                  ? "static/images/espeon-pokeball.jpg"
                  : "static/images/guest-avatar.png"
              }
              className="user-image"
            ></img>
            <div className="user-info">
              <span className="user-title">
                {isSignedIn ? "Darren van Reenen" : "Guest"}
              </span>
              {isSignedIn ? (
                <span className="user-subtitle">umbreonight</span>
              ) : null}
            </div>
          </div>
          <i className="icon" onClick={toggleOpen}>
            {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </i>
        </div>
        {isOpen ? isSignedIn ? <UserActions /> : <UserAccessControl /> : null}
      </div>
    </section>
  );
};

export default UserControl;
