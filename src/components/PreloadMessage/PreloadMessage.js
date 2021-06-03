import React from "react";
import { PropTypes } from "prop-types";
import "./PreloadMessage.css";

export const PreloadMessage = ({
  fontSize,
  loading,
  loaderType,
  color,
  message,
  alignIndicator,
}) => {
  if (loading) {
    return (
      <div
        style={{
          flex: `${alignIndicator}`,
          color: `${color}`,
          fontSize: `${fontSize}`,
        }}
      >
        <div>{message}</div>
        <p>{loaderType}</p>
        <p>preloader message</p>
      </div>
    );
  } else return null;
};

PreloadMessage.propTypes = {
  fontSize: PropTypes.Number,
  loading: PropTypes.bool,
  loaderType: PropTypes.String,
  color: PropTypes.Color,
  message: PropTypes.String,
  alignIndicator: PropTypes.String,
};
