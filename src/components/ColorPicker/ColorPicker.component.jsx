import React from "react";
import "./color-picker.styles.css";

const ColorPicker = ({ currentColor, onSetColor }) => {
  const colorChange = (event) => {
    onSetColor(event.target.value);
  };
  return (
    <input
      className="colorPicker"
      value={currentColor}
      type="color"
      onChange={colorChange}
    />
  );
};

export default ColorPicker;
