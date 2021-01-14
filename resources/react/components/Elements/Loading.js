import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Loading = () => {
  return (
    <Loader
      type="Triangle"
      color="#f58026"
      height={100}
      width={100}
      timeout={5000} //3 secs
    />
  );
};

export default Loading;
