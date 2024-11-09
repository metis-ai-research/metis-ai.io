import React from "react";
import "./Badge.css";

const Badge = (props) => {
  return (
    <h3 className="badge">{props.label}</h3>
  );
};

export default Badge;
