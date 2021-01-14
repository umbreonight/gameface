import React, { useState, Fragment } from "react";
import FloatingLabelInput from "../../Elements/FloatingLabelInput";

const UserRegister = () => {
  return (
    <div className="user-control-register">
      <FloatingLabelInput
        type="text"
        id="user-register-username"
        label="Username"
      />
      <FloatingLabelInput
        type="password"
        id="user-register-password"
        label="Password"
      />
      <FloatingLabelInput
        type="email"
        id="user-register-email"
        label="Email Address"
      />
      <button className="button-accent">Register</button>
    </div>
  );
};

export default UserRegister;
