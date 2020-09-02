import React from "react";
import "./cell.styles.css";

const Cell = ({ cell, updateCell, i, offCell }) => {
  return (
    <div
      className="cell"
      onClick={updateCell(i)}
      style={{ backgroundColor: cell.on ? cell.color : "#fff" }}
      onContextMenu={updateCell(i, offCell)}
    ></div>
  );
};

export default Cell;
