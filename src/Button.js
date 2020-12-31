import React from "react";

const Button = ({ label, btnStyle, handleClick }) => (
  <button onClick={() => handleClick(label)} className={btnStyle}>
    {label}
  </button>
);

export default Button;
