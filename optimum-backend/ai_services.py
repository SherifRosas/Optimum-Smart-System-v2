"""
AI Services for Optimum Smart System
Phase 2: AI-powered order analysis and insights
"""

import json
import os
import random
import re
import secrets
import string
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional

try:
    import openai
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False
    openai = None

from django.conf import settings
from django.utils import timezone
from dotenv import load_dotenv

load_dotenv()

class OrderAnalysisAI:
    """AI-powered order analysis and insights"""
    
    def __init__(self):
        # Initialize OpenAI client with explicit parameters only
        api_key = os.getenv('OPENAI_API_KEY', 'demo_key')
        self.client = None
        
        # Only initialize if we have a valid API key and openai is available
        if OPENAI_AVAILABLE and api_key and api_key != 'demo_key':
            try:
                # Initialize with explicit api_key only to avoid proxy-related errors
                # The OpenAI library may try to read proxy env vars, but we'll catch any errors
                self.client = openai.OpenAI(api_key=api_key)
            except (TypeError, ValueError) as e:
                # Handle case where proxies or other parameters cause issues
                error_msg = str(e)
                if 'proxies' in error_msg or 'unexpected keyword' in error_msg:
                    # Try to work around proxy-related issues
                    # Temporarily unset proxy env vars if they exist
                    old_proxy = os.environ.pop('HTTP_PROXY', None)
                    old_https_proxy = os.environ.pop('HTTPS_PROXY', None)
                    try:
                        self.client = openai.OpenAI(api_key=api_key)
                    except Exception as e2:
                        print(f"OpenAI client initialization error (after proxy removal): {e2}")
                        self.client = None
                    finally:
                        # Restore proxy env vars if they existed
                        if old_proxy:
                            os.environ['HTTP_PROXY'] = old_proxy
                        if old_https_proxy:
                            os.environ['HTTPS_PROXY'] = old_https_proxy
                else:
                    print(f"OpenAI client initialization error: {e}")
                    self.client = None
            except Exception as e:
                print(f"OpenAI client initialization error: {e}")
                self.client = None
    
    def analyze_order_text(self, order_text: str) -> Dict[str, Any]:
        """
        Analyze unstructured order text and extract structured information
        """
        if not order_text.strip():
            return self._get_default_analysis()
        
        # If no valid API key, use fallback
        if not self.client or os.getenv('OPENAI_API_KEY', 'demo_key') == 'demo_key':
            return self._get_fallback_analysis(order_text)
        
        try:
            # Use OpenAI to analyze the order text
            prompt = f"""
            Analyze this customer order text and extract structured information:
            
            Order Text: "{order_text}"
            
            Please extract and return a JSON object with the following structure:
            {{
                "customer_name": "extracted name or null",
                "product_type": "extracted product name",
                "quantity": "extracted number or 1",
                "delivery_date": "extracted date in YYYY-MM-DD format or null",
                "urgency": "high/medium/low based on text analysis",
                "sentiment": "positive/neutral/negative",
                "confidence": "0.0 to 1.0 confidence score",
                "suggested_supplier": "best supplier category based on product",
                "estimated_price": "estimated price range or null",
                "notes": "any additional insights"
            }}
            
            Rules:
            - If information is not clear, use null
            - For quantity, default to 1 if not specified
            - For urgency, analyze words like "urgent", "asap", "rush"
            - For sentiment, analyze overall tone
            - For supplier, suggest: "Electronics Hub", "Tech Solutions Ltd", or "Digital World"
            - Return only valid JSON, no additional text
            """
            
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=500,
                temperature=0.3
            )
            
            result = json.loads(response.choices[0].message.content)
            return result
            
        except Exception as e:
            print(f"AI Analysis Error: {e}")
            return self._get_fallback_analysis(order_text)
    
    def get_smart_recommendations(self, order_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Generate smart recommendations based on order data
        """
        # If no valid API key, use default recommendations
        if not self.client or os.getenv('OPENAI_API_KEY', 'demo_key') == 'demo_key':
            return self._get_default_recommendations()
        
        try:
            prompt = f"""
            Based on this order data, provide smart recommendations:
            
            Order Data: {json.dumps(order_data, indent=2)}
            
            Provide recommendations in JSON format:
            {{
                "supplier_recommendation": "best supplier with reasoning",
                "pricing_insight": "pricing analysis and suggestions",
                "delivery_optimization": "delivery timing recommendations",
                "upsell_opportunities": "suggested additional products",
                "risk_assessment": "potential risks and mitigation",
                "profit_optimization": "ways to improve profit margin"
            }}
            
            Return only valid JSON, no additional text.
            """
            
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=400,
                temperature=0.4
            )
            
            return json.loads(response.choices[0].message.content)
            
        except Exception as e:
            print(f"Recommendations Error: {e}")
            return self._get_default_recommendations()
    
    def analyze_customer_sentiment(self, messages: List[str]) -> Dict[str, Any]:
        """
        Analyze customer-supplier conversation sentiment
        """
        if not messages:
            return {"sentiment": "neutral", "confidence": 0.0, "insights": []}
        
        # If no valid API key, return neutral sentiment
        if not self.client or os.getenv('OPENAI_API_KEY', 'demo_key') == 'demo_key':
            return {"sentiment": "neutral", "confidence": 0.0, "insights": []}
        
        try:
            conversation = " ".join(messages)
            prompt = f"""
            Analyze the sentiment and provide insights for this customer-supplier conversation:
            
            Conversation: "{conversation}"
            
            Return JSON with:
            {{
                "sentiment": "positive/neutral/negative",
                "confidence": "0.0 to 1.0",
                "customer_satisfaction": "high/medium/low",
                "key_issues": ["list of any issues mentioned"],
                "suggested_actions": ["recommended actions to take"],
                "escalation_needed": "true/false"
            }}
            
            Return only valid JSON.
            """
            
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=300,
                temperature=0.3
            )
            
            return json.loads(response.choices[0].message.content)
            
        except Exception as e:
            print(f"Sentiment Analysis Error: {e}")
            return {"sentiment": "neutral", "confidence": 0.0, "insights": []}
    
    def predict_demand(self, historical_data: List[Dict]) -> Dict[str, Any]:
        """
        Predict future demand based on historical order data
        """
        try:
            # Simple demand prediction based on patterns
            if not historical_data:
                return {"prediction": "insufficient_data", "confidence": 0.0}
            
            # Analyze patterns in the data
            product_counts = {}
            monthly_trends = {}
            
            for order in historical_data:
                product = order.get('product_type', 'Unknown')
                product_counts[product] = product_counts.get(product, 0) + 1
                
                # Simple monthly trend analysis
                month = order.get('created_at', '')[:7]  # YYYY-MM
                monthly_trends[month] = monthly_trends.get(month, 0) + 1
            
            # Generate predictions
            top_products = sorted(product_counts.items(), key=lambda x: x[1], reverse=True)[:3]
            
            return {
                "top_products": top_products,
                "monthly_trend": monthly_trends,
                "predicted_demand": "increasing" if len(monthly_trends) > 1 else "stable",
                "recommendations": [
                    f"Focus on {product} - high demand" for product, count in top_products[:2]
                ]
            }
            
        except Exception as e:
            print(f"Demand Prediction Error: {e}")
            return {"prediction": "error", "confidence": 0.0}
    
    def _get_default_analysis(self) -> Dict[str, Any]:
        """Default analysis when no text is provided"""
        return {
            "customer_name": None,
            "product_type": "General Product",
            "quantity": 1,
            "delivery_date": None,
            "urgency": "medium",
            "sentiment": "neutral",
            "confidence": 0.0,
            "suggested_supplier": "Tech Solutions Ltd",
            "estimated_price": None,
            "notes": "No text provided for analysis"
        }
    
    def _get_fallback_analysis(self, order_text: str) -> Dict[str, Any]:
        """Fallback analysis using simple text processing"""
        text_lower = order_text.lower()
        
        # Simple keyword extraction
        urgency = "low"
        if any(word in text_lower for word in ["urgent", "asap", "rush", "immediately"]):
            urgency = "high"
        elif any(word in text_lower for word in ["soon", "quickly", "fast"]):
            urgency = "medium"
        
        # Extract quantity
        quantity_match = re.search(r'(\d+)', order_text)
        quantity = int(quantity_match.group(1)) if quantity_match else 1
        
        # Simple product detection
        product_type = "General Product"
        if any(word in text_lower for word in ["laptop", "computer", "pc"]):
            product_type = "Laptop"
        elif any(word in text_lower for word in ["phone", "mobile", "iphone", "samsung"]):
            product_type = "Mobile Phone"
        elif any(word in text_lower for word in ["tablet", "ipad"]):
            product_type = "Tablet"
        
        return {
            "customer_name": None,
            "product_type": product_type,
            "quantity": quantity,
            "delivery_date": None,
            "urgency": urgency,
            "sentiment": "neutral",
            "confidence": 0.3,
            "suggested_supplier": "Tech Solutions Ltd",
            "estimated_price": None,
            "notes": "Fallback analysis used"
        }
    
    def _get_default_recommendations(self) -> Dict[str, Any]:
        """Default recommendations when AI fails"""
        return {
            "supplier_recommendation": "Tech Solutions Ltd - Reliable general supplier",
            "pricing_insight": "Standard pricing expected",
            "delivery_optimization": "Standard delivery timeline",
            "upsell_opportunities": "Consider accessories or extended warranty",
            "risk_assessment": "Low risk - standard order",
            "profit_optimization": "Standard margin expected"
        }
    
    def recommend_supplier(self, product_type: str, quantity: int = 1, delivery_date: str = None, suppliers_data: List[Dict] = None) -> Dict[str, Any]:
        """
        AI-powered supplier recommendation based on order details
        
        Args:
            product_type: Type of product ordered
            quantity: Quantity needed
            delivery_date: Expected delivery date
            suppliers_data: List of available suppliers with their details
        
        Returns:
            Dict with recommended supplier ID and reasoning
        """
        if not suppliers_data:
            return {
                "supplier_id": None,
                "supplier_name": None,
                "confidence": 0.0,
                "reasoning": "No suppliers available",
                "factors_considered": []
            }
        
        # If no valid API key, use intelligent fallback
        if not self.client or os.getenv('OPENAI_API_KEY', 'demo_key') == 'demo_key':
            return self._get_intelligent_supplier_match(product_type, quantity, delivery_date, suppliers_data)
        
        try:
            # Prepare supplier information for AI
            suppliers_info = []
            for supplier in suppliers_data:
                suppliers_info.append({
                    "id": supplier.get('id'),
                    "name": supplier.get('name', ''),
                    "rating": float(supplier.get('rating', 0)),
                    "is_active": supplier.get('is_active', True),
                    "past_orders": supplier.get('past_orders_count', 0),
                    "success_rate": supplier.get('success_rate', 0.8)
                })
            
            prompt = f"""
            Analyze this order and recommend the best supplier:
            
            Order Details:
            - Product Type: "{product_type}"
            - Quantity: {quantity}
            - Delivery Date: {delivery_date or "Not specified"}
            
            Available Suppliers:
            {json.dumps(suppliers_info, indent=2)}
            
            Consider these factors:
            1. Supplier rating (higher is better)
            2. Supplier specialization (match product type to supplier expertise)
            3. Past performance (success rate, order count)
            4. Supplier availability (is_active status)
            5. Product-supplier compatibility
            
            Return JSON with:
            {{
                "recommended_supplier_id": <supplier_id_number>,
                "supplier_name": "<supplier name>",
                "confidence": <0.0 to 1.0>,
                "reasoning": "<explanation of why this supplier was chosen>",
                "factors_considered": ["rating", "specialization", "performance", etc.],
                "alternative_suppliers": [<list of other good options with IDs>]
            }}
            
            Return only valid JSON, no additional text.
            """
            
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=300,
                temperature=0.3
            )
            
            result = json.loads(response.choices[0].message.content)
            return result
            
        except Exception as e:
            print(f"AI Supplier Recommendation Error: {e}")
            # Fallback to intelligent matching
            return self._get_intelligent_supplier_match(product_type, quantity, delivery_date, suppliers_data)
    
    def _get_intelligent_supplier_match(self, product_type: str, quantity: int, delivery_date: str, suppliers_data: List[Dict]) -> Dict[str, Any]:
        """
        Intelligent supplier matching without AI (fallback)
        Considers multiple factors for better matching
        """
        if not suppliers_data:
            return {
                "supplier_id": None,
                "supplier_name": None,
                "confidence": 0.0,
                "reasoning": "No suppliers available",
                "factors_considered": []
            }
        
        product_lower = product_type.lower()
        
        # Score each supplier
        scored_suppliers = []
        for supplier in suppliers_data:
            if not supplier.get('is_active', True):
                continue
            
            score = 0.0
            factors = []
            
            # Factor 1: Rating (0-5 scale, normalized to 0-1)
            rating = float(supplier.get('rating', 0))
            rating_score = rating / 5.0
            score += rating_score * 0.4  # 40% weight
            factors.append(f"rating:{rating}")
            
            # Factor 2: Product-Supplier Matching (intelligent keyword matching)
            name_lower = supplier.get('name', '').lower()
            product_match_score = 0.0
            
            # Laptop/Computer products
            if any(word in product_lower for word in ['laptop', 'computer', 'pc', 'notebook']):
                if any(word in name_lower for word in ['tech', 'computer', 'digital', 'it']):
                    product_match_score = 0.9
                    factors.append("specialization:computers")
            
            # Phone/Mobile products
            elif any(word in product_lower for word in ['phone', 'mobile', 'iphone', 'samsung', 'smartphone']):
                if any(word in name_lower for word in ['electronics', 'mobile', 'phone', 'digital']):
                    product_match_score = 0.9
                    factors.append("specialization:electronics")
            
            # Tablet/iPad products
            elif any(word in product_lower for word in ['tablet', 'ipad']):
                if any(word in name_lower for word in ['electronics', 'digital', 'tech']):
                    product_match_score = 0.8
                    factors.append("specialization:tablets")
            
            # General matching
            else:
                # Check if supplier name contains product-related keywords
                common_words = ['tech', 'electronics', 'digital', 'supply', 'solutions']
                if any(word in name_lower for word in common_words):
                    product_match_score = 0.5
                    factors.append("general_match")
            
            score += product_match_score * 0.3  # 30% weight
            
            # Factor 3: Past Performance (if available)
            past_orders = supplier.get('past_orders_count', 0)
            success_rate = supplier.get('success_rate', 0.8)
            performance_score = min(past_orders / 10.0, 1.0) * success_rate
            score += performance_score * 0.2  # 20% weight
            if past_orders > 0:
                factors.append(f"experience:{past_orders}_orders")
            
            # Factor 4: Availability (active status)
            if supplier.get('is_active', True):
                score += 0.1  # 10% weight
                factors.append("status:active")
            
            scored_suppliers.append({
                "supplier": supplier,
                "score": score,
                "factors": factors
            })
        
        if not scored_suppliers:
            return {
                "supplier_id": None,
                "supplier_name": None,
                "confidence": 0.0,
                "reasoning": "No active suppliers available",
                "factors_considered": []
            }
        
        # Sort by score (highest first)
        scored_suppliers.sort(key=lambda x: x['score'], reverse=True)
        best_match = scored_suppliers[0]
        supplier = best_match['supplier']
        
        # Get alternative suppliers (top 2-3)
        alternatives = [
            {"id": s['supplier'].get('id'), "name": s['supplier'].get('name'), "score": s['score']}
            for s in scored_suppliers[1:3]
        ]
        
        return {
            "supplier_id": supplier.get('id'),
            "supplier_name": supplier.get('name'),
            "confidence": min(best_match['score'], 1.0),
            "reasoning": f"Best match based on: {', '.join(best_match['factors'])}",
            "factors_considered": best_match['factors'],
            "alternative_suppliers": alternatives
        }


class AIInsights:
    """AI-powered business insights and analytics"""
    
    def __init__(self):
        self.order_ai = OrderAnalysisAI()
    
    def generate_business_insights(self, orders_data: List[Dict]) -> Dict[str, Any]:
        """
        Generate comprehensive business insights from order data
        """
        if not orders_data:
            return {"insights": [], "recommendations": []}
        
        try:
            # Analyze order patterns
            total_orders = len(orders_data)
            total_revenue = sum(float(order.get('total_amount', 0)) for order in orders_data)
            
            # Status distribution
            status_counts = {}
            for order in orders_data:
                status = order.get('status', 'unknown')
                status_counts[status] = status_counts.get(status, 0) + 1
            
            # Product popularity
            product_counts = {}
            for order in orders_data:
                product = order.get('product_type', 'Unknown')
                product_counts[product] = product_counts.get(product, 0) + 1
            
            # Generate insights
            insights = []
            recommendations = []
            
            # Revenue insights
            avg_order_value = total_revenue / total_orders if total_orders > 0 else 0
            insights.append(f"Average order value: ${avg_order_value:.2f}")
            
            # Status insights
            pending_orders = status_counts.get('pending', 0)
            if pending_orders > total_orders * 0.3:
                insights.append(f"High pending orders: {pending_orders}/{total_orders}")
                recommendations.append("Consider increasing processing capacity")
            
            # Product insights
            top_product = max(product_counts.items(), key=lambda x: x[1]) if product_counts else None
            if top_product:
                insights.append(f"Most popular product: {top_product[0]} ({top_product[1]} orders)")
                recommendations.append(f"Stock more {top_product[0]} inventory")
            
            return {
                "insights": insights,
                "recommendations": recommendations,
                "metrics": {
                    "total_orders": total_orders,
                    "total_revenue": total_revenue,
                    "avg_order_value": avg_order_value,
                    "status_distribution": status_counts,
                    "product_popularity": product_counts
                }
            }
            
        except Exception as e:
            print(f"Business Insights Error: {e}")
            return {"insights": ["Error generating insights"], "recommendations": []}


class ChatAssistantAI:
    """AI-powered chat assistant for system help and guidance"""
    
    def __init__(self):
        self.order_ai = OrderAnalysisAI()
        self.system_knowledge = self._load_system_knowledge()
    
    def _load_system_knowledge(self) -> Dict[str, Any]:
        """Load system knowledge base"""
        return {
            "system_features": {
                "dashboard": "View real-time statistics, charts, and analytics. Press '1' or click Dashboard in navigation.",
                "new_order": "Create new customer orders. Press '2' or click 'New Order'. Fill in customer name, phone, product type, quantity, and delivery date.",
                "orders": "View and manage all orders. Filter by status, search, sort, and update order status. Press '3' or click 'Orders'.",
                "suppliers": "Manage supplier information and communications. Press '4' or click 'Suppliers'.",
                "accounting": "View financial reports, revenue, and accounting data. Press '5' or click 'Accounting'.",
                "ai_insights": "Get AI-powered insights, analyze orders, and view predictions. Press '6' or click 'AI Insights'.",
            },
            "navigation": "Use keyboard shortcuts (1-6) or click navigation items. Dark mode toggle is in the header.",
            "order_management": {
                "create": "Go to 'New Order' page. Fill in all required fields marked with *. Use AI Fill button for natural language input.",
                "filter": "In Orders page, use status filter, date range, and search to find specific orders.",
                "update_status": "Click on an order card and use the status dropdown to update: Pending → In Preparation → Ready → Delivered.",
                "export": "Click 'Export to CSV' button in Orders page to download order data.",
            },
            "ai_features": {
                "chat": "Click the chat widget (bottom-right) or go to AI Chat page. Ask questions about the system.",
                "analysis": "Upload files or enter order text in AI Insights page for AI analysis.",
                "suggestions": "AI suggests products and suppliers based on your order history.",
                "alerts": "AI monitors orders and alerts you about delays, low stock, and unusual patterns.",
            }
        }
    
    def chat(self, user_message: str, conversation_history: List[Dict] = None, system_context: Dict = None) -> Dict[str, Any]:
        """
        Generate AI response to user message with context awareness
        """
        if not user_message.strip():
            return {
                "response": "Hello! I'm your AI assistant. How can I help you with the Optimum Smart System today?",
                "suggestions": self._get_quick_suggestions()
            }
        
        # If no valid API key, use rule-based responses
        if not self.order_ai.client or os.getenv('OPENAI_API_KEY', 'demo_key') == 'demo_key':
            return self._get_rule_based_response(user_message, conversation_history, system_context)
        
        try:
            # Build context from conversation history
            context_prompt = self._build_context_prompt(conversation_history, system_context)
            
            # Create comprehensive prompt
            prompt = f"""
You are a helpful AI assistant for the Optimum Smart System - an order management system.

System Knowledge:
{json.dumps(self.system_knowledge, indent=2)}

Previous Conversation:
{context_prompt}

User Question: "{user_message}"

Instructions:
- Answer questions about how to use the system features
- Help with order management tasks
- Provide business insights when asked
- Be friendly, concise, and helpful
- If asked about navigation, mention keyboard shortcuts (1-6)
- Guide users to relevant features
- If you don't know something, say so politely

Provide a helpful response:
"""
            
            response = self.order_ai.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=500,
                temperature=0.7
            )
            
            ai_response = response.choices[0].message.content.strip()
            
            return {
                "response": ai_response,
                "suggestions": self._get_contextual_suggestions(user_message),
                "message_type": self._classify_message_type(user_message)
            }
            
        except Exception as e:
            print(f"Chat AI Error: {e}")
            return self._get_rule_based_response(user_message, conversation_history, system_context)
    
    def _build_context_prompt(self, conversation_history: List[Dict] = None, system_context: Dict = None) -> str:
        """Build context prompt from conversation history"""
        if not conversation_history:
            return "This is the start of the conversation."
        
        context = "Previous messages:\n"
        for msg in conversation_history[-5:]:  # Last 5 messages for context
            context += f"User: {msg.get('user_message', '')}\n"
            context += f"AI: {msg.get('ai_response', '')}\n"
        
        if system_context:
            context += f"\nSystem Context: {json.dumps(system_context)}\n"
        
        return context
    
    def _classify_message_type(self, message: str) -> str:
        """Classify message type"""
        message_lower = message.lower()
        
        if any(word in message_lower for word in ['how', 'where', 'navigate', 'use', 'feature', 'button', 'click']):
            return 'system_help'
        elif any(word in message_lower for word in ['order', 'create', 'update', 'status', 'filter', 'search']):
            return 'order_management'
        elif any(word in message_lower for word in ['revenue', 'profit', 'insight', 'analytics', 'chart', 'statistic']):
            return 'business_insights'
        else:
            return 'general'
    
    def _get_rule_based_response(self, user_message: str, conversation_history: List[Dict] = None, system_context: Dict = None) -> Dict[str, Any]:
        """Fallback rule-based responses"""
        message_lower = user_message.lower()
        
        # System help questions
        if any(word in message_lower for word in ['dashboard', 'statistics', 'overview']):
            response = "The Dashboard shows real-time statistics, revenue trends, order status distribution, and analytics. Press '1' or click 'Dashboard' in the navigation."
        elif any(word in message_lower for word in ['create order', 'new order', 'add order']):
            response = "To create a new order: 1) Press '2' or click 'New Order', 2) Fill in customer name, phone, product type, quantity, and delivery date, 3) Click 'Submit Order'. You can also use the 'AI Fill' button for natural language input!"
        elif any(word in message_lower for word in ['view orders', 'list orders', 'all orders']):
            response = "To view orders: Press '3' or click 'Orders'. You can filter by status, search, sort, and use date range filters. Click 'Export to CSV' to download data."
        elif any(word in message_lower for word in ['update status', 'change status', 'order status']):
            response = "To update order status: Go to Orders page, find the order, and use the status dropdown. Status flow: Pending → In Preparation → Ready → Delivered."
        elif any(word in message_lower for word in ['filter', 'search', 'find order']):
            response = "In the Orders page, you can: 1) Use the search box to find by customer, product, phone, or ID, 2) Filter by status, 3) Use date range filters, 4) Sort by different fields."
        elif any(word in message_lower for word in ['keyboard', 'shortcut', 'hotkey']):
            response = "Keyboard shortcuts: 1=Dashboard, 2=New Order, 3=Orders, 4=Suppliers, 5=Accounting, 6=AI Insights. Press the number keys when not typing in input fields."
        elif any(word in message_lower for word in ['dark mode', 'theme', 'dark', 'light']):
            response = "Toggle dark mode using the sun/moon icon in the header. The theme preference is saved automatically."
        elif any(word in message_lower for word in ['ai', 'artificial intelligence', 'chat']):
            response = "AI features include: 1) Chat assistant (this chat!), 2) Order text analysis, 3) File upload analysis, 4) Smart order suggestions, 5) Predictive alerts, 6) Business insights. Try asking me questions!"
        elif any(word in message_lower for word in ['help', 'what can you do', 'capabilities']):
            response = "I can help you with: 1) System navigation and features, 2) Order management questions, 3) Business insights and analytics, 4) General questions about the system. What would you like to know?"
        elif any(word in message_lower for word in ['hello', 'hi', 'hey']):
            response = "Hello! I'm your AI assistant for the Optimum Smart System. I can help you navigate the system, manage orders, and answer questions. How can I assist you today?"
        else:
            response = "I understand you're asking about: " + user_message + ". Let me help you with that. Could you provide more details? I can assist with system navigation, order management, or business insights."
        
        return {
            "response": response,
            "suggestions": self._get_quick_suggestions(),
            "message_type": self._classify_message_type(user_message)
        }
    
    def _get_quick_suggestions(self) -> List[str]:
        """Get quick suggestion questions"""
        return [
            "How do I create a new order?",
            "How do I filter orders?",
            "What are the keyboard shortcuts?",
            "How do I use AI features?"
        ]
    
    def _get_contextual_suggestions(self, user_message: str) -> List[str]:
        """Get contextual suggestions based on user message"""
        message_lower = user_message.lower()
        
        if 'order' in message_lower:
            return [
                "How do I create an order?",
                "How do I update order status?",
                "How do I filter orders?"
            ]
        elif any(word in message_lower for word in ['dashboard', 'statistic', 'chart']):
            return [
                "What charts are available?",
                "How do I view revenue trends?",
                "What insights can I see?"
            ]
        else:
            return self._get_quick_suggestions()


class SmartOrderSuggestions:
    """AI-powered smart order suggestions"""
    
    def __init__(self):
        self.order_ai = OrderAnalysisAI()
    
    def get_suggestions(self, order_history: List[Dict], current_context: Dict = None) -> Dict[str, Any]:
        """Get smart order suggestions based on history"""
        if not order_history:
            return {
                "suggested_products": [],
                "suggested_suppliers": [],
                "recommendations": []
            }
        
        # Analyze order patterns
        product_counts = {}
        supplier_counts = {}
        
        for order in order_history:
            product = order.get('product_type', 'Unknown')
            supplier = order.get('supplier_name', 'Unknown')
            
            product_counts[product] = product_counts.get(product, 0) + 1
            supplier_counts[supplier] = supplier_counts.get(supplier, 0) + 1
        
        # Get top products and suppliers
        top_products = sorted(product_counts.items(), key=lambda x: x[1], reverse=True)[:5]
        top_suppliers = sorted(supplier_counts.items(), key=lambda x: x[1], reverse=True)[:3]
        
        return {
            "suggested_products": [{"name": p[0], "order_count": p[1]} for p in top_products],
            "suggested_suppliers": [{"name": s[0], "order_count": s[1]} for s in top_suppliers],
            "recommendations": [
                f"Consider ordering {p[0]} - you've ordered it {p[1]} times recently" 
                for p in top_products[:3]
            ]
        }


class PredictiveAlerts:
    """AI-powered predictive alerts"""
    
    def generate_alerts(self, orders: List[Dict]) -> List[Dict]:
        """Generate predictive alerts based on order data"""
        alerts = []
        
        if not orders:
            return alerts
        
        try:
            # Check for delayed orders
            pending_orders = [o for o in orders if o.get('status') == 'pending']
            if len(pending_orders) > 10:
                alerts.append({
                    "type": "warning",
                    "title": "High Pending Orders",
                    "message": f"You have {len(pending_orders)} pending orders. Consider processing them.",
                    "action": "view_orders",
                    "priority": "medium"
                })
            
            # Check for old pending orders
            from django.utils import timezone
            from django.utils.dateparse import parse_datetime
            
            old_pending = []
            for o in pending_orders:
                created_at = o.get('created_at')
                if not created_at:
                    continue
                
                try:
                    # Handle different date formats
                    order_date = None
                    
                    if isinstance(created_at, str):
                        # Try Django's parse_datetime first (handles ISO format)
                        order_date = parse_datetime(created_at)
                        
                        # Fallback: try manual ISO parsing
                        if not order_date:
                            try:
                                # Handle ISO format with 'Z' timezone
                                date_str = created_at.replace('Z', '+00:00') if 'Z' in created_at else created_at
                                order_date = datetime.fromisoformat(date_str)
                            except (ValueError, TypeError):
                                pass
                    
                    elif isinstance(created_at, datetime):
                        order_date = created_at
                    
                    if not order_date:
                        continue
                    
                    # Make timezone-aware if needed
                    if timezone.is_naive(order_date):
                        order_date = timezone.make_aware(order_date)
                    
                    # Check if order is older than 7 days
                    days_old = (timezone.now() - order_date).days
                    if days_old > 7:
                        old_pending.append(o)
                except (ValueError, TypeError, AttributeError) as e:
                    # Skip orders with invalid dates - log but don't fail
                    import logging
                    logger = logging.getLogger(__name__)
                    logger.warning(f"Error parsing date for order {o.get('id', 'unknown')}: {e}")
                    continue
        
            if old_pending:
                alerts.append({
                    "type": "error",
                    "title": "Old Pending Orders",
                    "message": f"You have {len(old_pending)} orders pending for over 7 days.",
                    "action": "view_orders",
                    "priority": "high"
                })
            
            # Product demand alerts
            product_counts = {}
            for order in orders:
                product = order.get('product_type', 'Unknown')
                product_counts[product] = product_counts.get(product, 0) + 1
        
            high_demand = [p for p, count in product_counts.items() if count > 5]
            if high_demand:
                alerts.append({
                    "type": "info",
                    "title": "High Demand Products",
                    "message": f"High demand detected for: {', '.join(high_demand[:3])}",
                    "action": "view_orders",
                    "priority": "low"
                })
            
            return alerts
        
        except Exception as e:
            # Log error but return empty alerts instead of crashing
            import logging
            logger = logging.getLogger(__name__)
            logger.error(f"Error generating predictive alerts: {e}", exc_info=True)
            return []


def generate_secure_password(seed: str = "") -> str:
    """Generate a strong password using the provided seed for context."""
    alphabet = string.ascii_letters + string.digits + "!@#$%^&*-_"
    random_part = ''.join(secrets.choice(alphabet) for _ in range(8))
    seed_part = ''.join(ch for ch in seed if ch.isalnum())[:4]
    entropy = ''.join(secrets.choice("!#%&") for _ in range(2))
    return f"{seed_part.capitalize()}{random_part}{entropy}"


def evaluate_supplier_offers(product_request):
    """
    Evaluate supplier offers for a product request and return ranking + recommendation.
    This function works even without OpenAI credentials by using deterministic scoring.
    """
    offers = product_request.offers.select_related('supplier').all()
    if not offers:
        return {
            "offers": [],
            "recommended_offer_id": None,
            "generated_at": timezone.now().isoformat(),
            "explanation": "No offers submitted yet."
        }

    prices = [float(offer.price) for offer in offers]
    min_price, max_price = min(prices), max(prices)
    delivery_dates = [offer.delivery_date for offer in offers]
    earliest = min(delivery_dates)
    latest = max(delivery_dates)
    days_span = (latest - earliest).days or 1

    ranked = []
    for offer in offers:
        price_score = 1 - ((float(offer.price) - min_price) / (max_price - min_price or 1))
        delivery_score = 1 - ((offer.delivery_date - earliest).days / days_span)
        supplier_rating = getattr(getattr(offer.supplier, 'profile', None), 'metadata', {}).get('rating', 0.8)
        supplier_score = min(max(float(supplier_rating), 0.0), 1.0)
        aggregate = round((price_score * 0.45) + (delivery_score * 0.35) + (supplier_score * 0.2), 3)
        offer.score = aggregate
        offer.save(update_fields=['score'])

        ranked.append({
            "offer_id": offer.id,
            "supplier": offer.supplier.username,
            "price": float(offer.price),
            "delivery_date": offer.delivery_date.isoformat(),
            "score": aggregate,
            "notes": offer.notes,
        })

    ranked.sort(key=lambda item: item['score'], reverse=True)
    return {
        "offers": ranked,
        "recommended_offer_id": ranked[0]['offer_id'],
        "generated_at": timezone.now().isoformat(),
        "explanation": "Ranking based on price, delivery date, and supplier reliability."
    }
