# Horse-s-Tour-A-Mind-Exercise

# Knight's Tour Game: Algorithm Analysis

## Project Overview

This React application implements a modified version of the classic "Knight's Tour" chess puzzle. The game features a 9x9 chess board where the player controls a knight's movement according to standard chess rules. The goal is to navigate the knight across the board while earning points for each valid move.

## Core Game Mechanics

### Board Representation

- The game uses a 9x9 grid represented as a two-dimensional array.
- Each cell on the board can have one of four states:
  - 0: Empty cell (unvisited)
  - 1: Visited cell (knight has previously occupied this cell)
  - 2: Valid move (a cell where the knight can legally move next)
  - 3: Current knight position

### Knight Movement

The knight follows the standard chess piece movement pattern:
- Moves in an L-shape: 2 squares in one direction and 1 square perpendicular to that direction
- From any position, the knight has up to 8 possible moves (if all are within board boundaries)

## Algorithm Analysis

### Game Initialization

1. The game starts with the knight positioned at the center of the board (coordinates [4,4]).
2. The starting position is marked with value 3.
3. The system then calculates and highlights all valid moves from this position.

### Move Validation

The `highlightNextMove` function:
1. Creates a copy of the current board state
2. Determines all eight possible L-shaped moves from the current position
3. For each possible move:
   - Checks if the move is within board boundaries using the `isValidMove` helper
   - Verifies the destination cell is empty (value 0)
   - If both conditions are met, marks the cell as a valid move (value 2)

### Move Execution

When a player selects a valid move, the `chooseNextMove` function:
1. Verifies the selected cell is a valid move (value 2)
2. Increments the player's score
3. Marks the previous knight position as visited (value 1)
4. Clears all highlighted valid moves
5. Updates the knight's position to the selected cell (value 3)
6. Calculates and highlights new valid moves from the updated position

### Visual Representation

The game provides visual feedback through:
- Color coding: Different colors for empty, visited, valid move, and current position cells
- Animation: Knight movement animation and blinking effect for valid moves
- Horse image: Displayed on the current knight position

## Algorithm Complexity

- **Time Complexity**: The move validation process has O(1) complexity as it always checks exactly 8 possible moves.
- **Space Complexity**: O(n²) where n is the board size (9 in this case), required to store the state of each cell.

## Game Challenges

Unlike the traditional Knight's Tour puzzle that aims to visit each square exactly once, this implementation:
1. Focuses on continuous play with score accumulation
2. Allows revisiting empty cells
3. Could potentially lead to situations where no valid moves are available

## Potential Enhancements

The algorithm could be extended to include:
1. Detection of dead-end scenarios where no more moves are possible
2. Implementation of the Warnsdorff's rule to suggest optimal moves
3. Addition of a complete tour detection to recognize when all cells have been visited
4. Difficulty levels by varying board size or adding obstacles
