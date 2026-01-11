import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiPaperAirplane, HiTrash, HiDownload } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import { aiAPI, ordersAPI } from '../services/api';
import './AIChatPage.css';

const AIChatPage = () => {
  const auth = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Handle initial message from navigation state (e.g., from Dashboard)
    if (location.state?.initialMessage) {
      setInputMessage(location.state.initialMessage);
      // Optional: Clear state so it doesn't re-fill on refresh
      window.history.replaceState({}, document.title);
    }

    const storedSessionId = localStorage.getItem('chat_session_id');
    if (storedSessionId) {
      setSessionId(storedSessionId);
      loadChatHistory(storedSessionId);
    } else {
      const newSessionId = `session_${Date.now()}`;
      setSessionId(newSessionId);
      localStorage.setItem('chat_session_id', newSessionId);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadChatHistory = async (id) => {
    try {
      const response = await aiAPI.getChatHistory(id);
      if (response.data.success) {
        setMessages(response.data.messages.map(m => ({
          role: m.user_message ? 'user' : 'assistant',
          content: m.user_message || m.ai_response
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
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await aiAPI.chat(userMessage, sessionId);
      if (response.data.success) {
        const aiResponse = response.data.response;
        setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);

        if (response.data.detected_order && auth.isAdmin()) {
          const order = response.data.detected_order;
          toast.info(`AI: Creating order for ${order.customer_name}...`);
          const orderResponse = await ordersAPI.createOrder({
            customer: { name: order.customer_name, phone_number: order.phone_number || '0000000000' },
            product_type: order.product_type,
            quantity: order.quantity || 1,
            unit_price: order.estimated_price || 1000,
            delivery_date: order.delivery_date || new Date().toISOString().split('T')[0],
            notes: `[AI-Auto Page] ${aiResponse}`
          });
          if (orderResponse.status === 201) {
            toast.success(`Order created!`);
            setMessages(prev => [...prev, { role: 'assistant', content: `Confirmed order #${orderResponse.data.id}.`, isSystem: true }]);
          }
        }
      }
    } catch (err) {
      console.error('Chat error:', err);
      toast.error('Failed to get AI response.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <h2><HiSparkles /> AI Assistant</h2>
          <button onClick={() => setMessages([])} title="Clear Chat"><HiTrash /></button>
        </div>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.role}`}>
              <div className="message-content">{msg.content}</div>
            </div>
          ))}
          {isLoading && <div className="message assistant loading">...</div>}
          <div ref={messagesEndRef} />
        </div>
        <form className="chat-input" onSubmit={sendMessage}>
          <input value={inputMessage} onChange={e => setInputMessage(e.target.value)} placeholder="Type your request..." disabled={isLoading} />
          <button type="submit" disabled={!inputMessage.trim() || isLoading}><HiPaperAirplane /></button>
        </form>
      </div>
    </div>
  );
};

export default memo(AIChatPage);
