import React, { useState, useEffect } from "react";
import PageLoader from "./components/Global/PageLoader";

// Base template
import Template from "./components/Global/Template";

const Routes = () => {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 4000)
  }, []);

  return <Template />;
};

export default Routes;
