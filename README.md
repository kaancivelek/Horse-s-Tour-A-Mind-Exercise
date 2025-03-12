# Knight's Tour Game

An interactive implementation of the Knight's Tour chess puzzle built with React. Navigate a knight across a 9x9 chess board following standard chess movement rules.

## Game Features

- Interactive 9x9 chess board
- Visual highlighting of valid knight moves
- Score tracking for each move made
- Animation effects for knight movement
- Visual distinction between visited and unvisited cells

## How to Play

1. The knight starts at the center of the board
2. Valid moves are highlighted in blue with a blinking effect
3. Click on any highlighted cell to move the knight
4. The knight will move to the selected cell and your score will increase
5. Continue making valid moves to increase your score

## Prerequisites

To run this project, you need to have Node.js installed on your computer. You can download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

## Quick Start (One-Click Launch)

### Windows Users
1. Simply double-click the `start-knights-tour.bat` file
2. The application will check for Node.js, install dependencies if needed, and launch the game

### Mac/Linux Users
1. Make the script executable (one-time setup) by opening terminal and running:
   ```
   chmod +x run-knights-tour.sh
   ```
2. Double-click the `run-knights-tour.sh` file or run it from the terminal
3. The application will check for Node.js, install dependencies if needed, and launch the game

## Manual Installation and Running

If you prefer to run the commands manually:

1. Clone this repository to your local machine
2. Open a command prompt or terminal
3. Navigate to the main project folder
4. Install dependencies by running:
   ```
   npm install
   ```
5. Start the application by running:
   ```
   npm start
   ```
6. The game will open automatically in your default web browser

## Technologies Used

- React.js
- CSS animations
- JavaScript ES6+

## Project Structure

- `App.js` - Main game logic and state management
- `Layout.js` - Board rendering component
- `App.css` - Main application styling
- `Layout.css` - Board and cell styling
- `start-knights-tour.bat` - One-click launcher for Windows
- `run-knights-tour.sh` - One-click launcher for Mac/Linux

## Future Enhancements

- Different board sizes
- Challenge mode (complete full knight's tour)
- Undo move functionality
- Solution hints
