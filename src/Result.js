import React from "react";

const Result = ({ currVal }) => (
  <input
    readOnly
    className="calculator-input blinking-cursor"
    name=""
    type="text"
    value={currVal}
  />
);

export default Result;
