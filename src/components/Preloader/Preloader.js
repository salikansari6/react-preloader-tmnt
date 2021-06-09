import React from "react";
import { PropTypes } from "prop-types";
import "./Preloader.css";
import { Spinner } from "../Loaders/Spinner";

const PreloaderWrapper = ({ children }) => {
  return <div className="preloader">{children}</div>;
};

export const Preloader = ({
  loading,
  image,
  loaderType = Spinner,
  color,
  size,
  imageSize,
}) => {
  if (loading) {
    if (image) {
      return (
        <PreloaderWrapper>
          <img src={image} alt="" style={{ height: imageSize }} />
        </PreloaderWrapper>
      );
    }

    let dimensions = {};
    if (size) {
      dimensions = {
        height: `${size}px`,
        width: `${size}px`,
      };
    }

    return (
      <PreloaderWrapper>{loaderType({ color, dimensions })}</PreloaderWrapper>
    );
  } else {
    return null;
  }
};

Preloader.propTypes = {
  loading: PropTypes.bool,
  image: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  imageSize: PropTypes.number,
  loaderType: PropTypes.node,
};
