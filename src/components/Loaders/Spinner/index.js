import React from "react";
import "./Spinner.css";

export const Spinner = ({ color, size, dimensions }) => {
  return (
    <div
      class="loader-indicator"
      style={{
        borderTopColor: color,
        // height: `${size}px`,
        // width: `${size}px`,

        ...dimensions,
      }}
    ></div>
  );
};
