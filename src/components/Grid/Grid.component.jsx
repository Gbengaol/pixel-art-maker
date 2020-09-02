import React from "react";
import Cell from "../Cell/Cell.component";
import "./grid.styles.css";

const offCell = {
  on: false,
  color: "#ffffff",
};

const Grid = ({ currentColor, cells, setCells }) => {
  const updateCell = (i, defaultState) => (e) => {
    setCells(
      cells.map((cell, cellIndex) => {
        if (cellIndex === i) {
          if (defaultState) {
            e.preventDefault();
            return defaultState;
          }
          return {
            on: true,
            color: currentColor,
          };
        }
        return cell;
      })
    );
  };
  return (
    <div className="grid">
      {cells.map((cell, i) => {
        return (
          <Cell
            offCell={offCell}
            cell={cell}
            key={i}
            updateCell={updateCell}
            i={i}
          />
        );
      })}
    </div>
  );
};

export default Grid;
