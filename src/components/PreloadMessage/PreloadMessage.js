import React from "react";
import { PropTypes } from "prop-types";
import "./PreloadMessage.css";
import { align } from "../../../helpers/align";

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
          display: "flex",
          flexDirection: `${align(alignIndicator)}`,
          color: `${color}`,
          fontSize: `${fontSize}`,
        }}
      >
        <div>{loaderType}</div>
        <div>{message}</div>
        {/* <p>preloader message</p> */}
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
