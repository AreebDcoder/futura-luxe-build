@echo off
echo Starting Jeedaar Builders Frontend...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

REM Check if package.json exists
if not exist package.json (
    echo ERROR: package.json not found
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo Installing dependencies...
    npm install
    echo.
)

REM Start the development server
echo Starting frontend development server...
echo Frontend will be available at: http://localhost:5173
echo Press Ctrl+C to stop the server
echo.
npm run dev

pause
