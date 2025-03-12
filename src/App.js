import React, { Component } from "react";
import Layout from "./Layout";
import "./App.css";

/**
 * Main application component that manages the Knight's Tour game
 * Controls game state, board initialization, and move validation
 */
export default class App extends Component {
  // Initialize game state
  state = {
    gameBoard: Array(9).fill(null).map(() => Array(9).fill(0)), // Create empty 9x9 board
    score: 0,
    knightPosition: { x: 4, y: 4 }, // Initial knight position (center)
  };

  /**
   * Setup the game when component mounts
   */
  componentDidMount() {
    this.initializeGame();
  }

  /**
   * Initialize game board with knight at starting position
   * and highlight available moves
   */
  initializeGame = () => {
    const startX = 4, startY = 4;
    const newBoard = Array(9).fill(null).map(() => Array(9).fill(0));
    
    // Mark knight's initial position
    newBoard[startX][startY] = 3;

    this.setState(
      { 
        gameBoard: newBoard, 
        knightPosition: { x: startX, y: startY } 
      },
      () => {
        this.highlightNextMove(startX, startY);
      }
    );
  };

  /**
   * Highlights all valid moves from current knight position
   * @param {number} positionX - Current X coordinate
   * @param {number} positionY - Current Y coordinate
   */
  highlightNextMove = (positionX, positionY) => {
    const cache = this.state.gameBoard.map((row) => [...row]);
    const boardSize = this.state.gameBoard.length;

    // Check if coordinates are within board boundaries
    const isValidMove = (x, y) =>
      x >= 0 && x < boardSize && y >= 0 && y < boardSize;

    // All possible L-shaped knight moves
    const possibleMoves = [
      [positionX - 2, positionY - 1],
      [positionX - 2, positionY + 1],
      [positionX + 2, positionY - 1],
      [positionX + 2, positionY + 1],
      [positionX - 1, positionY - 2],
      [positionX - 1, positionY + 2],
      [positionX + 1, positionY - 2],
      [positionX + 1, positionY + 2],
    ];

    // Mark valid moves on the board
    possibleMoves.forEach(([x, y]) => {
      if (isValidMove(x, y) && cache[x][y] === 0) {
        cache[x][y] = 2; // Mark valid moves with value 2
      }
    });

    this.setState({ gameBoard: cache });
  };

  /**
   * Handle knight movement to a new position
   * @param {number} positionX - Target X coordinate
   * @param {number} positionY - Target Y coordinate
   */
  chooseNextMove = (positionX, positionY) => {
    // Only allow moves to valid positions
    if (this.state.gameBoard[positionX][positionY] !== 2) {
      return;
    }

    // Increment score when a valid move is made
    this.setState((prevState) => ({ score: prevState.score + 1 }));
    const newBoard = this.state.gameBoard.map((row) => [...row]);

    // Mark previous position as visited
    const { x: prevX, y: prevY } = this.state.knightPosition;
    newBoard[prevX][prevY] = 1;

    // Clear all highlighted moves
    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        if (newBoard[i][j] === 2) {
          newBoard[i][j] = 0;
        }
      }
    }

    // Mark new knight position
    newBoard[positionX][positionY] = 3;

    // Update state and highlight next possible moves
    this.setState(
      { 
        gameBoard: newBoard, 
        knightPosition: { x: positionX, y: positionY } 
      },
      () => {
        this.highlightNextMove(positionX, positionY);
      }
    );
  };

  /**
   * Render the game board and score
   */
  render() {
    return (
      <div className="App">
        <h1>Score: {this.state.score}</h1>
        <Layout
          gameBoard={this.state.gameBoard}
          onCellClick={this.chooseNextMove}
        />
      </div>
    );
  }
}