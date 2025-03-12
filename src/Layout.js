import React, { Component } from "react";
import horseImage from "./horse.png";
import "./Layout.css";

/**
 * Layout component that renders the game board
 * Displays cells with different states and handles click events
 */
export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        {this.props.gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell cell-${cell} ${cell === 3 ? "horse" : ""}`}
                onClick={() => {
                  // Only allow clicks on valid move cells
                  if (cell === 2) {
                    this.props.onCellClick(rowIndex, cellIndex);
                  }
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}