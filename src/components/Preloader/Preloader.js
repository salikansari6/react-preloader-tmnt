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

    // switch (loaderType) {
    //   case "spinner":
    //     if (size) {
    //       //extra config for spinner as it has border width
    //       dimensions = {
    //         ...dimensions,
    //         borderWidth: `${(size || 16) / 3}px`,
    //         borderTopWidth: `${(size || 16) / 3}px`,
    //       };
    //     }
    //     return (
    //       <PreloaderWrapper>
    //         <Spinner color={color} dimensions={dimensions} />
    //       </PreloaderWrapper>
    //     );
    //   case "dots":
    //     return (
    //       <PreloaderWrapper>
    //         <Dots color={color} size={size} />
    //       </PreloaderWrapper>
    //     );
    //   case "bounce":
    //     return (
    //       <PreloaderWrapper>
    //         <Bounce color={color} />
    //       </PreloaderWrapper>
    //     );
    //   default:
    //     return (
    //       <PreloaderWrapper>
    //         <Spinner color={color} dimensions={dimensions} />
    //       </PreloaderWrapper>
    //     );
    //   //Add more variations
    // }
  } else {
    return null;
  }
};

Preloader.propTypes = {
  loading: PropTypes.bool,
  image: PropTypes.string,
  color: PropTypes.Color,
  size: PropTypes.number,
  imageSize: PropTypes.number,
  loaderType: PropTypes.node,
};
