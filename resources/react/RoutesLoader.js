import React, { useState, useEffect } from "react";
import Site from "./pages/site"
import PageLoader from "./components/Global/PageLoader";

const RoutesLoader = () => {
  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering
  useEffect(() => {
    setTimeout(() => setSpinner(false), 4000)
  }, []);
  // [] means like componentDidMount

  return spinner ? <PageLoader /> : <Site />;
};

export default RoutesLoader;
