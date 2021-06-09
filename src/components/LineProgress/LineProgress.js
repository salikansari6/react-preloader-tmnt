import React, { useEffect, useState, useRef } from "react";
import "./LineProgress.css";
import { PropTypes } from "prop-types";

export const LineProgress = ({ loading, color, error }) => {
  const progressRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.display = "block";
    }
    let progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 50) {
          return prevProgress + 0.5;
        }
      });
    }, 200);
    if (loading) {
      setProgress(10);
    } else {
      setProgress(100);
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.display = "none";
        }
      }, 500);
    }
    return () => {
      clearInterval(progressInterval);
    };
  }, [loading]);

  if (error) {
    return null;
  }

  return (
    <div
      ref={progressRef}
      className="line-progress"
      style={{
        width: `${progress}vw`,
        background: color,
        boxShadow: `0px 1px 5px ${color}`,
      }}
    ></div>
  );
};

LineProgress.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
};
