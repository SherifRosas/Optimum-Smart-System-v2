#!/bin/bash
# Start Frontend Development Server

echo "🚀 Starting Optimum Smart System Frontend"
echo "=================================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Set environment to use local backend
export VITE_API_URL=http://localhost:8000/api
export VITE_WS_URL=ws://localhost:8000/ws

echo "✅ Starting Vite development server..."
echo "📡 Backend: http://localhost:8000/api"
echo "🌐 Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop"
echo "=================================================="

# Start Vite dev server
npm run dev

















