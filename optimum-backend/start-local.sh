#!/bin/bash
# Start Local Development Environment with Full v2.0 Features

echo "🚀 Starting Optimum Smart System - Local Development"
echo "=================================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop."
    exit 1
fi

# Start Docker Compose services (only PostgreSQL and Redis)
echo "📦 Starting Docker services (PostgreSQL, Redis)..."
docker-compose -f docker-compose.local.yml up -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 5

# Check if services are up
if ! docker-compose ps | grep -q "Up"; then
    echo "❌ Failed to start Docker services"
    exit 1
fi

echo "✅ Docker services started"

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    echo "🐍 Activating virtual environment..."
    source venv/bin/activate
fi

# Install dependencies if needed
if [ ! -d "venv" ] || [ ! -f "venv/bin/python" ]; then
    echo "📦 Creating virtual environment..."
    python -m venv venv
    source venv/bin/activate
    echo "📦 Installing dependencies..."
    pip install -r requirements_v2.txt
fi

# Set environment variables
export DJANGO_SETTINGS_MODULE=optimum_system.settings_v2
export DEBUG=True
export DATABASE_URL=postgresql://optimum_user:optimum_pass@localhost:5432/optimum_db
export REDIS_URL=redis://localhost:6379/0

# Run migrations
echo "🗄️  Running database migrations..."
python manage.py migrate

# Create superuser if needed
echo "👤 Checking for superuser..."
python manage.py shell << EOF
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
    print("✅ Superuser created: admin/admin123")
else:
    print("✅ Superuser already exists")
EOF

# Collect static files
echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

# Start Celery worker in background
echo "⚙️  Starting Celery worker..."
celery -A optimum_system worker --loglevel=info &
CELERY_PID=$!

# Start Celery beat in background
echo "⏰ Starting Celery beat..."
celery -A optimum_system beat --loglevel=info &
CELERY_BEAT_PID=$!

# Start Django development server with ASGI
echo "🌐 Starting Django server with ASGI (WebSocket support)..."
echo ""
echo "=================================================="
echo "✅ All services started!"
echo "=================================================="
echo "📡 API: http://localhost:8000/api/"
echo "📚 API Docs: http://localhost:8000/api/docs/"
echo "🔌 WebSocket: ws://localhost:8000/ws/orders/"
echo "👤 Admin: http://localhost:8000/admin/ (admin/admin123)"
echo ""
echo "Press Ctrl+C to stop all services"
echo "=================================================="

# Start ASGI server
daphne -b 0.0.0.0 -p 8000 optimum_system.asgi:application

# Cleanup on exit
trap "kill $CELERY_PID $CELERY_BEAT_PID 2>/dev/null; docker-compose -f docker-compose.local.yml down" EXIT

