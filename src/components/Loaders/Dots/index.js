import React from "react";
import "./Dots.css";

export const Dots = ({ color, size, dimensions }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="dots"
        style={{
          background: color,
          height: size / 2,
          width: size / 2,
          ...dimensions,
        }}
      ></div>
      <div
        className="dots"
        style={{
          background: color,
          height: size / 2,
          width: size / 2,
          ...dimensions,
        }}
      ></div>
      <div
        className="dots"
        style={{
          background: color,
          height: size / 2,
          width: size / 2,
          ...dimensions,
        }}
      ></div>
    </div>
  );
};
