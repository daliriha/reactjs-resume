import React, { Component } from "react";

const Arrow = (props) => {
  return (
    <div
      style={{
        "margin-top": "-70px",
        "margin-bottom": "20px",
        "text-align": "center",
        "cursor": "pointer"
      }}
    >
      <img src={props.icon} />
    </div>
  );
};

export default Arrow;
