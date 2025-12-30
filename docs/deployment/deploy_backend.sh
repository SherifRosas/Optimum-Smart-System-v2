#!/bin/bash
# Backend Deployment Script for PythonAnywhere
# Run this script on PythonAnywhere Bash Console

set -e  # Exit on error

echo "🚀 Starting Backend Deployment..."

# Configuration
PROJECT_DIR="$HOME/Optimum-Smart-System/optimum-backend"
# Or if uploaded directly:
# PROJECT_DIR="$HOME/optimum-backend"

# Check if directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ Error: Project directory not found at $PROJECT_DIR"
    echo "Please update PROJECT_DIR in this script to match your setup"
    exit 1
fi

cd "$PROJECT_DIR"

echo "📦 Installing dependencies..."
pip3.11 install --user -r requirements.txt

echo "🔧 Running migrations..."
python3.11 manage.py migrate --noinput

echo "📁 Collecting static files..."
python3.11 manage.py collectstatic --noinput

echo "✅ Backend deployment complete!"
echo ""
echo "Next steps:"
echo "1. Set environment variables in PythonAnywhere Web app settings:"
echo "   - SECRET_KEY"
echo "   - DEBUG=False"
echo "   - ALLOWED_HOSTS=sherifrissas.pythonanywhere.com"
echo ""
echo "2. Configure WSGI file (see pythonanywhere_wsgi.py)"
echo ""
echo "3. Reload web app in PythonAnywhere"
echo ""
echo "4. Test: https://sherifrissas.pythonanywhere.com/health/"



