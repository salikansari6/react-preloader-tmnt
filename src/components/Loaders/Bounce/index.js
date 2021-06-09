import React from "react";
import "./Bounce.css";

export const Bounce = ({ color }) => {
  return (
    <div
      class="bounce"
      style={{
        background: color,
      }}
    ></div>
  );
};
