from datetime import date, timedelta
from decimal import Decimal
from unittest.mock import patch

import pytest
from django.contrib.auth.models import User
from rest_framework.test import APIClient

from customers.models import Customer
from orders.models import Order


@pytest.mark.django_db
def test_ai_analyze_order_text_success():
    client = APIClient()

    with patch("ai.views.OrderAnalysisAI") as MockAI:
        MockAI.return_value.analyze_order_text.return_value = {"confidence": 0.9, "items": []}
        resp = client.post("/api/ai/analyze-order-text/", {"order_text": "Need 10 chairs"}, format="json")

    assert resp.status_code == 200
    assert resp.data["success"] is True
    assert resp.data["analysis"]["confidence"] == 0.9


@pytest.mark.django_db
def test_ai_analyze_order_text_validation_error():
    client = APIClient()
    too_long = "x" * 1001
    resp = client.post("/api/ai/analyze-order-text/", {"order_text": too_long}, format="json")
    assert resp.status_code == 400


@pytest.mark.django_db
def test_ai_order_recommendations_success_saves_ai_analysis():
    client = APIClient()

    # Minimal order setup
    customer = Customer.objects.create(name="C1", phone_number="+12345678901", email="c1@example.com")
    supplier_user = User.objects.create_user(username="s1", password="pass12345")
    order = Order.objects.create(
        customer=customer,
        supplier=None,
        product_type="Paper",
        quantity=2,
        unit_price=Decimal("10.00"),
        delivery_date=date.today() + timedelta(days=3),
        status="pending",
        notes="",
    )

    with patch("ai.views.OrderAnalysisAI") as MockAI:
        MockAI.return_value.get_smart_recommendations.return_value = {"suggestions": ["x"]}
        resp = client.get(f"/api/ai/recommendations/{order.id}/")

    assert resp.status_code == 200
    assert resp.data["success"] is True
    order.refresh_from_db()
    assert hasattr(order, "ai_analysis")
    assert order.ai_analysis.recommendations == {"suggestions": ["x"]}

