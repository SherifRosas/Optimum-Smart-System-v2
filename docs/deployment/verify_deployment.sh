#!/bin/bash
# Deployment Verification Script
# Run this after deployment to verify everything works

set -e

echo "🔍 Verifying Deployment..."
echo ""

# Configuration
BACKEND_URL="${BACKEND_URL:-https://sherifrissas.pythonanywhere.com}"
FRONTEND_URL="${FRONTEND_URL:-https://your-project.vercel.app}"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test function
test_endpoint() {
    local name=$1
    local url=$2
    local expected_status=${3:-200}
    
    echo -n "Testing $name... "
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url" || echo "000")
    
    if [ "$response" = "$expected_status" ]; then
        echo -e "${GREEN}✅ OK${NC} (Status: $response)"
        return 0
    else
        echo -e "${RED}❌ FAILED${NC} (Status: $response, Expected: $expected_status)"
        return 1
    fi
}

# Backend Tests
echo "🔵 Backend Tests ($BACKEND_URL)"
echo "----------------------------------------"

test_endpoint "Health Check" "$BACKEND_URL/health/" 200
test_endpoint "Detailed Health" "$BACKEND_URL/health/detailed/" 200
test_endpoint "Readiness" "$BACKEND_URL/health/ready/" 200
test_endpoint "Liveness" "$BACKEND_URL/health/live/" 200
test_endpoint "Version Info" "$BACKEND_URL/version/" 200
test_endpoint "API Docs" "$BACKEND_URL/api/docs/" 200
test_endpoint "Admin Panel" "$BACKEND_URL/admin/" 200

echo ""
echo "🟢 Frontend Tests ($FRONTEND_URL)"
echo "----------------------------------------"

test_endpoint "Frontend Homepage" "$FRONTEND_URL" 200

echo ""
echo "✅ Verification Complete!"
echo ""
echo "Next steps:"
echo "1. Test authentication flow manually"
echo "2. Test API endpoints with authentication"
echo "3. Check browser console for errors"
echo "4. Verify CORS is working"



