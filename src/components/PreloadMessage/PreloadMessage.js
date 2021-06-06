import React from "react";
import { PropTypes } from "prop-types";
import "./PreloadMessage.css";
import { align } from "../../helpers/align";

export const PreloadMessage = ({
  fontSize,
  loading,
  color,
  message,
  alignIndicator,
}) => {
  let loaderStyles = {};
  if (fontSize) {
    loaderStyles = {
      height: `${fontSize}px`,
      width: `${fontSize}px`,
      borderWidth: `${fontSize / 3}px`,
      borderTopWidth: `${fontSize / 3}px`,
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
        <div
          class="loader-indicator-msg"
          style={{
            borderTopColor: color,
            ...loaderStyles,
          }}
        ></div>
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
};
