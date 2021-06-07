import React from "react";
import { PropTypes } from "prop-types";
import "./Preloader.css";

const PreloaderWrapper = ({ children }) => {
  return <div className="preloader">{children}</div>;
};

export const Preloader = ({
  loading,
  image,
  loaderType,
  color,
  spinnerSize,
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

    switch (loaderType) {
      case "spinner":
        return (
          <PreloaderWrapper>
            <div
              class="loader-indicator"
              style={{
                borderTopColor: color,
                height: `${spinnerSize}px`,
                width: `${spinnerSize}px`,
              }}
            ></div>
          </PreloaderWrapper>
        );
      case "dots":
        return (
          <PreloaderWrapper>
            <div class="dots" style={{ color: color }}></div>
          </PreloaderWrapper>
        );
      case "bounce":
        return (
          <PreloaderWrapper>
            <div class="bounce" style={{ background: color }}></div>
          </PreloaderWrapper>
        );
      default:
        return (
          <PreloaderWrapper>
            <div
              class="loader-indicator"
              style={{
                borderTopColor: color,
                height: `${spinnerSize}px`,
                width: `${spinnerSize}px`,
              }}
            ></div>
          </PreloaderWrapper>
        );
      //Add more variations
    }
  } else {
    return null;
  }
};

Preloader.propTypes = {
  loading: PropTypes.bool,
  image: PropTypes.string,
  color: PropTypes.string,
  spinnerSize: PropTypes.number,
  imageSize: PropTypes.number,
  loaderType: PropTypes.string,
};
