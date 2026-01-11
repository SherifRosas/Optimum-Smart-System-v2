import React, { useState, useEffect, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiPaperAirplane, HiSparkles, HiChip } from 'react-icons/hi';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import { aiAPI, ordersAPI } from '../services/api';
import './AIChatWidget.css';

// Fallback responses for common questions when backend is unavailable
const getFallbackResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('create') && (lowerMessage.includes('order') || lowerMessage.includes('new order'))) {
    return `**How to create a new order:**
1. Click "New Order" in the navigation menu (or press keyboard shortcut 2)
2. Fill in the order form
3. Click "Create Order" to submit.`;
  }

  if (lowerMessage.includes('navigate') || lowerMessage.includes('go to')) {
    return `**Navigation Guide:**
- Dashboard (Shortcut: 1)
- New Order (Shortcut: 2)
- Orders (Shortcut: 3)
- AI Chat (Shortcut: 7)`;
  }

  return `I'm here to help! Try asking about creating orders or navigating the system.`;
};

const AIChatWidget = ({ inlineMode = false, initialMessage = '' }) => {
  const auth = useAuth();
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (initialMessage) {
      setIsOpen(true);
      setInputMessage(initialMessage);
    }
  }, [initialMessage]);

  useEffect(() => {
    setIsMounted(true);
    const storedSessionId = localStorage.getItem('chat_session_id');
    if (storedSessionId) {
      setSessionId(storedSessionId);
      if (auth.isAuthenticated && auth.user) {
        loadChatHistory(storedSessionId);
      }
    } else {
      const newSessionId = `session_${Date.now()}`;
      setSessionId(newSessionId);
      localStorage.setItem('chat_session_id', newSessionId);
    }
    return () => setIsMounted(false);
  }, [auth.isAuthenticated, auth.user]);

  useEffect(() => {
    if (messagesEndRef.current && messages.length > 0) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const loadChatHistory = async (id) => {
    try {
      const response = await aiAPI.getChatHistory(id);
      if (response.data.success) {
        setMessages(response.data.messages.map(m => ({
          id: m.id,
          user: m.user_message,
          ai: m.ai_response,
          timestamp: m.created_at
        })));
      }
    } catch (err) {
      console.error('History load error:', err);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { id: Date.now(), user: userMessage, ai: null }]);
    setIsLoading(true);

    try {
      const response = await aiAPI.chat(userMessage, sessionId);
      if (response.data.success) {
        const aiMsg = {
          id: Date.now() + 1,
          user: userMessage,
          ai: response.data.response,
          timestamp: new Date().toISOString(),
          suggestions: response.data.suggestions || []
        };

        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = aiMsg;
          return updated;
        });

        // Automated Order logic
        if (response.data.detected_order && auth.isAdmin()) {
          const order = response.data.detected_order;
          toast.info(`AI: Creating order for ${order.customer_name}...`);
          const orderResponse = await ordersAPI.createOrder({
            customer: { name: order.customer_name, phone_number: order.phone_number || '0000000000' },
            product_type: order.product_type,
            quantity: order.quantity || 1,
            unit_price: order.estimated_price || 1000,
            delivery_date: order.delivery_date || new Date().toISOString().split('T')[0],
            notes: `[AI-Auto] ${aiMsg.ai}`
          });

          if (orderResponse.status === 201) {
            toast.success(`Order #${orderResponse.data.id} created!`);
            setMessages(prev => [...prev, {
              id: Date.now() + 2,
              ai: `Order #${orderResponse.data.id} has been initialized for ${order.customer_name}.`,
              isSystem: true
            }]);
          }
        }
      }
    } catch (err) {
      console.error('Chat error:', err);
      const fallback = getFallbackResponse(userMessage);
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { id: Date.now(), user: userMessage, ai: fallback, isError: true };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = async () => {
    if (!sessionId) return;
    await aiAPI.clearChat(sessionId);
    setMessages([]);
  };

  const widgetContent = (
    <>
      <motion.button className="chat-widget-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiChip />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="chat-widget-window" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            <div className="chat-widget-header">
              <HiSparkles /> <h3>AI Assistant</h3>
              <button onClick={() => setIsOpen(false)}><HiX /></button>
            </div>
            <div className="chat-widget-messages">
              {messages.map((msg) => (
                <div key={msg.id} className="chat-message-group">
                  {msg.user && <div className="chat-message user-message">{msg.user}</div>}
                  {msg.ai && <div className="chat-message ai-message">{msg.ai}</div>}
                </div>
              ))}
              {isLoading && <div className="chat-message ai-message typing">...</div>}
              <div ref={messagesEndRef} />
            </div>
            <form className="chat-widget-input" onSubmit={sendMessage}>
              <input ref={inputRef} value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Ask me anything..." disabled={isLoading} />
              <button type="submit"><HiPaperAirplane /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  if (!isMounted) return null;
  return inlineMode ? widgetContent : createPortal(widgetContent, document.body);
};

export default memo(AIChatWidget);
