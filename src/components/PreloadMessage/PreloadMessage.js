import React from "react";
import { PropTypes } from "prop-types";
import "./PreloadMessage.css";
import { align } from "../../helpers/align";
import { Spinner } from "../Loaders/Spinner";
import { Dots } from "../Loaders/Dots";

export const PreloadMessage = ({
  fontSize,
  loading,
  color,
  message,
  alignIndicator,
  loaderType,
}) => {
  //helper function for choice between loaders
  const renderLoaders = (loaderType, color, dimensions) => {
    switch (loaderType) {
      case "dots":
        return <Dots color={color} dimensions={dimensions} />;
      default:
        dimensions = {
          ...dimensions,
          borderWidth: `${(fontSize || 16) / 3}px`,
          borderTopWidth: `${(fontSize || 16) / 3}px`,
        };
        return <Spinner color={color} dimensions={dimensions} />;
    }
  };

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
        {renderLoaders(loaderType, color, dimensions)}
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
  loaderType: PropTypes.string,
};
