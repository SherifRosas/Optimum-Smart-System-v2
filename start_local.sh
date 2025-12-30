#!/bin/bash
# Optimum Smart System - Local Development Startup Script
# This script starts both backend and frontend servers

echo "🚀 Starting Optimum Smart System..."
echo ""

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python not found. Please install Python 3.9+"
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+"
    exit 1
fi

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

trap cleanup SIGINT SIGTERM

# Start Backend
echo "📦 Starting Backend Server..."
cd optimum-backend

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
fi

# Set environment variables
export DJANGO_ENV=development
export DEBUG=True

# Start server in background
python manage.py runserver &
BACKEND_PID=$!

cd ..

# Wait a bit for backend to start
sleep 3

# Start Frontend
echo "🎨 Starting Frontend Server..."
cd optimum-frontend

# Start dev server in background
npm run dev &
FRONTEND_PID=$!

cd ..

echo ""
echo "✅ Servers starting..."
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend:  http://localhost:8000"
echo "📚 Admin:    http://localhost:8000/admin/"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for processes
wait

