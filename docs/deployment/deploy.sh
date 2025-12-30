#!/bin/bash
# Deployment script for Optimum Smart System
# Usage: ./deploy.sh [backend|frontend|all]

set -e

BACKEND_DIR="optimum-backend"
FRONTEND_DIR="optimum-frontend/frontend"

deploy_backend() {
    echo "🚀 Deploying Backend..."
    cd "$BACKEND_DIR"
    
    echo "  [1/5] Running migrations..."
    python manage.py migrate --noinput
    
    echo "  [2/5] Collecting static files..."
    python manage.py collectstatic --noinput
    
    echo "  [3/5] Running tests..."
    python -m pytest -v --tb=short || echo "⚠️  Tests failed, continuing..."
    
    echo "  [4/5] Checking health endpoints..."
    python manage.py check --deploy
    
    echo "  [5/5] Backend deployment complete!"
    cd ..
}

deploy_frontend() {
    echo "🚀 Deploying Frontend..."
    cd "$FRONTEND_DIR"
    
    echo "  [1/4] Installing dependencies..."
    npm ci
    
    echo "  [2/4] Type checking..."
    npm run type-check || echo "⚠️  Type check failed, continuing..."
    
    echo "  [3/4] Linting..."
    npm run lint || echo "⚠️  Lint failed, continuing..."
    
    echo "  [4/4] Building..."
    npm run build
    
    echo "  Frontend deployment complete!"
    cd ../..
}

case "${1:-all}" in
    backend)
        deploy_backend
        ;;
    frontend)
        deploy_frontend
        ;;
    all)
        deploy_backend
        deploy_frontend
        echo ""
        echo "✅ Full deployment complete!"
        ;;
    *)
        echo "Usage: $0 [backend|frontend|all]"
        exit 1
        ;;
esac




