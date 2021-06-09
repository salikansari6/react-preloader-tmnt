import React from "react";
import "./Dots.css";

export const Dots = ({ color, dimensions }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="dots"
        style={{
          background: color,
          ...dimensions,
        }}
      ></div>
      <div
        className="dots"
        style={{
          background: color,
          ...dimensions,
        }}
      ></div>
      <div
        className="dots"
        style={{
          background: color,
          ...dimensions,
        }}
      ></div>
    </div>
  );
};
