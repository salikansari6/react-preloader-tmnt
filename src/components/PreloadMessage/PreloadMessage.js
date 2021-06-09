import React from "react";
import { PropTypes } from "prop-types";
import "./PreloadMessage.css";
import { align } from "../../helpers/align";
import { Spinner } from "../Loaders/Spinner";

export const PreloadMessage = ({
  fontSize,
  loading,
  color,
  message,
  alignIndicator,
  loaderType = Spinner,
}) => {
  let dimensions = {
    height: "1rem",
    width: "1rem",
  };
  if (fontSize) {
    dimensions = {
      height: `${fontSize}px`,
      width: `${fontSize}px`,
    };
  }

  if (loading) {
    return (
      <div
        className="preload-msg"
        style={{
          flexDirection: `${align(alignIndicator)}`,
          fontSize: `${fontSize}px`,
        }}
      >
        {loaderType({ color, dimensions })}
        <div className="message">{message}</div>
      </div>
    );
  } else {
    return null;
  }
};

PreloadMessage.propTypes = {
  fontSize: PropTypes.number,
  loading: PropTypes.bool,
  color: PropTypes.Color,
  message: PropTypes.string,
  alignIndicator: PropTypes.string,
  loaderType: PropTypes.node,
};
