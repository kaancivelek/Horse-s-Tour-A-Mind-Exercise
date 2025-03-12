@echo off
echo Starting Knight's Tour Game...
echo.

:: Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: Check if dependencies are installed
if not exist node_modules (
    echo Installing dependencies. This may take a minute...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo Error installing dependencies
        pause
        exit /b 1
    )
)

:: Start the application
echo.
echo Launching Knight's Tour game...
start http://localhost:3000
call npm start

pause