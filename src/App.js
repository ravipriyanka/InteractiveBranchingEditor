// App.js
import React, { useState } from "react";
import ShapeOutput from "./ShapeOutput";

const App = () => {
  const [shapeColor, setShapeColor] = useState("#ff0071");
  const [shapeType, setShapeType] = useState("cube");
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="app">
      <h2>Shape Editor</h2>
      <div>
        <label>Shape Color:</label>
        <input
          type="color"
          value={shapeColor}
          onChange={(e) => setShapeColor(e.target.value)}
        />
      </div>

      <div>
        <label>Shape Type:</label>
        <input
          type="radio"
          value="cube"
          checked={shapeType === "cube"}
          onChange={() => setShapeType("cube")}
        />
        Cube
        <input
          type="radio"
          value="triangle"
          checked={shapeType === "triangle"}
          onChange={() => setShapeType("triangle")}
        />
        Triangle
      </div>

      <div>
        <label>Zoom Level:</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={zoomLevel}
          onChange={(e) => setZoomLevel(Number(e.target.value))}
        />
      </div>

      <ShapeOutput
        shapeColor={shapeColor}
        shapeType={shapeType}
        zoomLevel={zoomLevel}
      />
    </div>
  );
};

export default App;
