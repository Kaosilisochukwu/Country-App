import React from "react";

const Button = ({ content, handleClick }) => {
  return (
    <button className="countryBtn" onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
