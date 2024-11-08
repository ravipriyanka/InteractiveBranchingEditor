// ShapeOutput.js
import React from "react";

const ShapeOutput = ({ shapeColor, shapeType, zoomLevel }) => {
  const cubeStyle = {
    backgroundColor: shapeColor,
    width: "50px",
    height: "50px",
    transform: `scale(${zoomLevel})`,
  };

  const pyramidStyle = {
    width: "0",
    height: "0",
    borderLeft: "25px solid transparent",
    borderRight: "25px solid transparent",
    borderBottom: `50px solid ${shapeColor}`,
    transform: `scale(${zoomLevel})`,
  };

  return (
    <div className="shape-output">
      {shapeType === "cube" ? (
        <div className="shape cube" style={cubeStyle}></div>
      ) : (
        <div className="shape pyramid" style={pyramidStyle}></div>
      )}
    </div>
  );
};

export default ShapeOutput;
