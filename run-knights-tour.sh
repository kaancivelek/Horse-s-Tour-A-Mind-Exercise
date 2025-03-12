#!/bin/bash

echo "Starting Knight's Tour Game..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies. This may take a minute..."
    npm install
    if [ $? -ne 0 ]; then
        echo "Error installing dependencies"
        read -p "Press Enter to exit..."
        exit 1
    fi
fi

# Start the application
echo ""
echo "Launching Knight's Tour game..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open http://localhost:3000
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open http://localhost:3000 &> /dev/null || sensible-browser http://localhost:3000 &> /dev/null || 
    firefox http://localhost:3000 &> /dev/null || google-chrome http://localhost:3000 &> /dev/null || true
fi

npm start

read -p "Press Enter to exit..."
