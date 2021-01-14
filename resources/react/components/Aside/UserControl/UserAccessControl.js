import React, { useState, Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import UserSignIn from "./UserSignIn";
import UserRegister from "./UserRegister";

const UserAccessControl = () => {
  return (
    <div className="user-access-control">
      <Tabs className="tabs">
        <TabList className="tab-list">
          <Tab selectedClassName="active" className="tab">
            Sign In
          </Tab>
          <Tab selectedClassName="active" className="tab">
            Register
          </Tab>
        </TabList>

        <TabPanel selectedClassName="active" className="tab-panel">
          <UserSignIn />
        </TabPanel>
        <TabPanel selectedClassName="active" className="tab-panel">
          <UserRegister />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserAccessControl;
