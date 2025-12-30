"""
Quick test script to verify health endpoints are working.
Run this after starting the Django server.
"""
import requests
import json
import sys

BASE_URL = "http://localhost:8000"

def test_endpoint(name, url):
    """Test a health endpoint."""
    try:
        response = requests.get(url, timeout=5)
        print(f"[OK] {name}: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: {json.dumps(data, indent=2)}")
        return response.status_code == 200
    except requests.exceptions.ConnectionError:
        print(f"[FAIL] {name}: Connection refused (is server running?)")
        return False
    except Exception as e:
        print(f"[FAIL] {name}: {str(e)}")
        return False

def main():
    print("Testing Health Endpoints...")
    print("=" * 50)
    
    endpoints = [
        ("Basic Health", f"{BASE_URL}/health/"),
        ("Detailed Health", f"{BASE_URL}/health/detailed/"),
        ("Readiness", f"{BASE_URL}/health/ready/"),
        ("Liveness", f"{BASE_URL}/health/live/"),
        ("Version Info", f"{BASE_URL}/version/"),
    ]
    
    results = []
    for name, url in endpoints:
        results.append(test_endpoint(name, url))
        print()
    
    if all(results):
        print("[SUCCESS] All health endpoints working!")
        return 0
    else:
        print("[FAILURE] Some endpoints failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())

