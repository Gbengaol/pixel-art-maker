import React, { useState, useMemo } from "react";
import "./App.css";
import Grid from "./components/Grid/Grid.component";
import ColorPicker from "./components/ColorPicker/ColorPicker.component";

const offCell = {
  on: false,
  color: "#ffffff",
};
const initialCells = Array.from({ length: 40 }, () => offCell);

const App = () => {
  const [currentColor, setCurrentColor] = useState("#56BC58");
  const [cells, setCells] = useState(initialCells);
  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  const chatString = useMemo(
    () => cells.map((cell) => cell.color.slice(1)).join(","),
    [cells]
  );
  return (
    <div className="app">
      <h3>A Pixel Art Maker</h3>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className="colorSwatchContainer">
        {colorSwatch.map((color, i) => {
          return (
            <div
              key={color}
              onClick={() => setCurrentColor(color)}
              className="colorSwatch"
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
      {colorSwatch.length > 0 && (
        <button className="clear-button" onClick={() => setCells(initialCells)}>
          Clear Board
        </button>
      )}
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <p className="chatString">!rgb {chatString}</p>
    </div>
  );
};

export default App;
