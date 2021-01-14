import React, { useState, Fragment } from "react";
import FloatingLabelInput from "../../Elements/FloatingLabelInput";

const UserSignIn = () => {
  return (
    <div className="user-control-login">
      <FloatingLabelInput
        type="text"
        id="user-login-username"
        label="Username"
      />
      <FloatingLabelInput
        type="password"
        id="user-login-password"
        label="Password"
      />
      <button className="button-accent">Login</button>
    </div>
  );
};

export default UserSignIn;
