@echo off
echo Starting Jeedaar Builders Backend Server...
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

REM Navigate to backend directory
cd /d "%~dp0backend"

REM Check if package.json exists
if not exist package.json (
    echo ERROR: package.json not found in backend directory
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo Installing dependencies...
    npm install
    echo.
)

REM Create .env file if it doesn't exist
if not exist .env (
    echo Creating .env file...
    copy env.example .env
    echo.
    echo IMPORTANT: You can edit .env file to add your MongoDB URI later
    echo For now, the server will work without database connection
    echo.
)

REM Start the server
echo Starting backend server...
echo Server will be available at: http://localhost:5000
echo Press Ctrl+C to stop the server
echo.
npm run dev

pause
