import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiPaperAirplane, HiTrash, HiDownload } from 'react-icons/hi';
import { aiAPI } from '../services/api';
import './AIChatPage.css';

const AIChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [quickActions, setQuickActions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const storedSessionId = localStorage.getItem('chat_session_id');
    if (storedSessionId) {
      setSessionId(storedSessionId);
      loadChatHistory(storedSessionId);
    } else {
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);
      localStorage.setItem('chat_session_id', newSessionId);
    }

    // Load quick actions
    setQuickActions([
      "How do I create a new order?",
      "How do I filter orders?",
      "What are the keyboard shortcuts?",
      "How do I use AI features?",
      "How do I update order status?",
      "What charts are available?"
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadChatHistory = async (sessionId) => {
    try {
      const response = await aiAPI.getChatHistory(sessionId);
      if (response.data.success) {
        const historyMessages = response.data.messages.map(msg => ({
          id: msg.id,
          user: msg.user_message,
          ai: msg.ai_response,
          timestamp: msg.created_at,
          type: msg.message_type
        }));
        setMessages(historyMessages);
      }
    } catch (err) {
      console.error('Error loading chat history:', err);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    const userMsg = {
      id: Date.now(),
      user: userMessage,
      ai: null,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await aiAPI.chat(userMessage, sessionId, {
        include_orders: true
      });

      if (response.data.success) {
        const aiMsg = {
          id: response.data.message_id || Date.now() + 1,
          user: userMessage,
          ai: response.data.response,
          timestamp: new Date().toISOString(),
          suggestions: response.data.suggestions || [],
          type: response.data.message_type
        };
        
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = aiMsg;
          return updated;
        });
      }
    } catch (err) {
      console.error('Error sending message:', err);
      const errorMsg = {
        id: Date.now() + 1,
        user: userMessage,
        ai: "Sorry, I'm having trouble connecting. Please try again later.",
        timestamp: new Date().toISOString(),
        isError: true
      };
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = errorMsg;
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = async () => {
    if (!sessionId || !window.confirm('Are you sure you want to clear all chat history?')) return;
    
    try {
      await aiAPI.clearChat(sessionId);
      setMessages([]);
    } catch (err) {
      console.error('Error clearing chat:', err);
    }
  };

  const exportChat = () => {
    const chatText = messages.map(msg => {
      let text = `[${new Date(msg.timestamp).toLocaleString()}]\n`;
      if (msg.user) text += `You: ${msg.user}\n`;
      if (msg.ai) text += `AI: ${msg.ai}\n`;
      return text;
    }).join('\n---\n\n');

    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `chat_history_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleQuickAction = (action) => {
    setInputMessage(action);
    inputRef.current?.focus();
  };

  return (
    <div className="chat-page">
      <div className="chat-page-header">
        <div className="header-left">
          <HiSparkles className="header-icon" />
          <div>
            <h1>AI Chat Assistant</h1>
            <p>Get help with the Optimum Smart System</p>
          </div>
        </div>
        <div className="header-actions">
          {messages.length > 0 && (
            <>
              <button className="action-btn" onClick={exportChat} title="Export chat">
                <HiDownload />
                Export
              </button>
              <button className="action-btn danger" onClick={clearChat} title="Clear chat">
                <HiTrash />
                Clear
              </button>
            </>
          )}
        </div>
      </div>

      <div className="chat-page-content">
        {/* Quick Actions Sidebar */}
        <div className="chat-sidebar">
          <h3>Quick Actions</h3>
          <div className="quick-actions-list">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                className="quick-action-btn"
                onClick={() => handleQuickAction(action)}
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-main">
          <div className="chat-messages-container">
            {messages.length === 0 && (
              <div className="chat-welcome-full">
                <HiSparkles className="welcome-icon-large" />
                <h2>Welcome to AI Chat Assistant</h2>
                <p>I can help you with:</p>
                <div className="welcome-features">
                  <div className="feature-card">
                    <h4>System Navigation</h4>
                    <p>Learn how to use features, keyboard shortcuts, and navigation</p>
                  </div>
                  <div className="feature-card">
                    <h4>Order Management</h4>
                    <p>Get help creating, filtering, and updating orders</p>
                  </div>
                  <div className="feature-card">
                    <h4>Business Insights</h4>
                    <p>Understand analytics, charts, and business data</p>
                  </div>
                  <div className="feature-card">
                    <h4>General Questions</h4>
                    <p>Ask anything about the system and get instant answers</p>
                  </div>
                </div>
                <div className="welcome-suggestions">
                  <p>Try asking:</p>
                  {quickActions.slice(0, 3).map((action, idx) => (
                    <button
                      key={idx}
                      className="welcome-suggestion-btn"
                      onClick={() => handleQuickAction(action)}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className="chat-message-group-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  {msg.user && (
                    <div className="chat-message-full user-message-full">
                      <div className="message-avatar user-avatar">You</div>
                      <div className="message-content-full user-content">
                        {msg.user}
                      </div>
                    </div>
                  )}
                  {msg.ai && (
                    <div className="chat-message-full ai-message-full">
                      <div className="message-avatar ai-avatar">
                        <HiSparkles />
                      </div>
                      <div className="message-content-full ai-content">
                        {msg.ai}
                        {msg.suggestions && msg.suggestions.length > 0 && (
                          <div className="message-suggestions-full">
                            {msg.suggestions.map((suggestion, idx) => (
                              <button
                                key={idx}
                                className="suggestion-btn-full"
                                onClick={() => handleQuickAction(suggestion)}
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <div className="chat-message-full ai-message-full">
                <div className="message-avatar ai-avatar">
                  <HiSparkles />
                </div>
                <div className="message-content-full ai-content typing-full">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-full" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about the system..."
              disabled={isLoading}
            />
            <button type="submit" disabled={!inputMessage.trim() || isLoading}>
              <HiPaperAirplane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(AIChatPage);

