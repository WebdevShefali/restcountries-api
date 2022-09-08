import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center" style={{ clear: "both" }}>
      <img className="my-35" src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
