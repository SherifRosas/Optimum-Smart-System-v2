@echo off
REM Start Frontend Development Server (Windows)

echo 🚀 Starting Optimum Smart System Frontend
echo ==================================================

REM Check if node_modules exists
if not exist node_modules (
    echo 📦 Installing dependencies...
    call npm install
)

REM Set environment to use local backend
set VITE_API_URL=http://localhost:8000/api
set VITE_WS_URL=ws://localhost:8000/ws

echo ✅ Starting Vite development server...
echo 📡 Backend: http://localhost:8000/api
echo 🌐 Frontend: http://localhost:5173
echo.
echo Press Ctrl+C to stop
echo ==================================================

REM Start Vite dev server
npm run dev

















