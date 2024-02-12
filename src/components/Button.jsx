import React from "react";

const Button = ({ text, style, iconname }) => {
  return <button className={style}>{text}</button>;
};

export default Button;
