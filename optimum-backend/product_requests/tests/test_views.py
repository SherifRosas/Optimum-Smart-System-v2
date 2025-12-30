from datetime import date, timedelta
from unittest.mock import patch

import pytest
from django.contrib.auth.models import User
from rest_framework.test import APIClient

from authentication.models import UserProfile
from product_requests.models import ProductRequest


@pytest.mark.django_db
def test_product_requests_list_requires_auth():
    client = APIClient()
    resp = client.get("/api/product-requests/")
    assert resp.status_code == 401


@pytest.mark.django_db
def test_requester_can_create_product_request():
    user = User.objects.create_user(username="req1", password="pass12345", email="req1@example.com")
    UserProfile.objects.create(user=user, role=UserProfile.RoleChoices.PRODUCT_REQUESTER)

    client = APIClient()
    client.force_authenticate(user=user)

    payload = {
        "title": "Need paper",
        "description": "A4 boxes",
        "quantity": 5,
        "delivery_deadline": str(date.today() + timedelta(days=7)),
    }
    resp = client.post("/api/product-requests/", payload, format="json")
    assert resp.status_code == 201
    assert resp.data["title"] == "Need paper"
    assert resp.data["status"] == ProductRequest.Status.SUBMITTED


@pytest.mark.django_db
def test_supplier_cannot_create_product_request():
    user = User.objects.create_user(username="sup1", password="pass12345", email="sup1@example.com")
    UserProfile.objects.create(user=user, role=UserProfile.RoleChoices.SUPPLIER)

    client = APIClient()
    client.force_authenticate(user=user)

    payload = {
        "title": "Need paper",
        "description": "A4 boxes",
        "quantity": 5,
        "delivery_deadline": str(date.today() + timedelta(days=7)),
    }
    resp = client.post("/api/product-requests/", payload, format="json")
    assert resp.status_code == 403


@pytest.mark.django_db
def test_recommendation_action_updates_request_status():
    user = User.objects.create_user(username="req2", password="pass12345", email="req2@example.com")
    UserProfile.objects.create(user=user, role=UserProfile.RoleChoices.PRODUCT_REQUESTER)

    pr = ProductRequest.objects.create(
        requester=user,
        title="Need chairs",
        description="Office chairs",
        quantity=10,
        delivery_deadline=date.today() + timedelta(days=10),
        status=ProductRequest.Status.SUBMITTED,
    )

    client = APIClient()
    client.force_authenticate(user=user)

    with patch("product_requests.views.evaluate_supplier_offers") as mock_eval:
        mock_eval.return_value = {"recommended_offer_id": None, "reason": "no offers yet"}
        resp = client.get(f"/api/product-requests/{pr.id}/recommendation/")

    assert resp.status_code == 200
    pr.refresh_from_db()
    assert pr.status == ProductRequest.Status.AI_RECOMMENDED





