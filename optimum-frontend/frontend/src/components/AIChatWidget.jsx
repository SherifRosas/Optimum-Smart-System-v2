import React, { useState, useEffect, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiPaperAirplane, HiSparkles, HiChip } from 'react-icons/hi';
import { aiAPI } from '../services/api';
import './AIChatWidget.css';

// Fallback responses for common questions when backend is unavailable
const getFallbackResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  
  // Order creation questions
  if (lowerMessage.includes('create') && (lowerMessage.includes('order') || lowerMessage.includes('new order'))) {
    return `**How to create a new order:**

1. **Click "New Order"** in the navigation menu (or press keyboard shortcut **2**)
2. **Fill in the order form:**
   - **Customer Name** (required)
   - **Phone Number** (required)
   - **Product Type** (required) - e.g., "Laptop Dell XPS 15"
   - **Quantity** (required)
   - **Delivery Date** (required)

3. **Optional: Use AI Fill**
   - Click "Use AI Fill (Natural Language)"
   - Type your order in plain text, e.g., "John Smith needs 2 laptops for next Friday"
   - Click "AI Fill Form" to auto-populate the form

4. **Click "Create Order"** to submit

The order will be created and appear in your Orders list!`;
  }
  
  // Navigation questions
  if (lowerMessage.includes('navigate') || lowerMessage.includes('go to') || lowerMessage.includes('where')) {
    return `**Navigation Guide:**

- **Dashboard** (Shortcut: 1) - View statistics and analytics
- **New Order** (Shortcut: 2) - Create a new customer order
- **Orders** (Shortcut: 3) - View and manage all orders
- **Suppliers** (Shortcut: 4) - Communicate with suppliers
- **Accounting** (Shortcut: 5) - View financial reports
- **AI Insights** (Shortcut: 6) - AI-powered analytics
- **AI Chat** (Shortcut: 7) - Chat with AI assistant

You can use keyboard shortcuts (1-7) or click the menu items!`;
  }
  
  // Order management questions
  if (lowerMessage.includes('order') && (lowerMessage.includes('manage') || lowerMessage.includes('view') || lowerMessage.includes('list'))) {
    return `**Order Management:**

1. **View Orders:** Click "Orders" in navigation (Shortcut: 3)
2. **Filter Orders:** Use the status filter dropdown
3. **Search Orders:** Type in the search box
4. **Update Status:** Click on an order card, then use the status dropdown
5. **Export Data:** Click "Export to CSV" button

Order statuses: Pending → In Preparation → Ready → Delivered`;
  }
  
  // General help
  if (lowerMessage.includes('help') || lowerMessage.includes('how') || lowerMessage.includes('what')) {
    return `**I can help you with:**

✅ Creating new orders
✅ Managing existing orders
✅ Navigating the system
✅ Understanding features
✅ Order status updates
✅ Supplier communication
✅ Accounting and reports
✅ AI insights and analytics

**Quick Tips:**
- Use keyboard shortcuts (1-7) for fast navigation
- Try AI Fill for natural language order entry
- Check the Dashboard for real-time statistics
- Use filters and search to find specific orders

What would you like to know more about?`;
  }
  
  // Default fallback
  return `Sorry, I'm having trouble connecting to the AI service right now. 

**But I can still help!** Here are some quick answers:

📝 **Create Order:** Click "New Order" (Shortcut: 2) and fill in the form
📋 **View Orders:** Click "Orders" (Shortcut: 3)
📊 **Dashboard:** Click "Dashboard" (Shortcut: 1)
🤖 **AI Features:** Click "AI Insights" (Shortcut: 6)

Try asking: "How do I create a new order?" or "How do I navigate?"`;
};

const AIChatWidget = ({ inlineMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize session
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
  }, []);

  // Auto-scroll to bottom (optimized to avoid forced reflow)
  useEffect(() => {
    if (messagesEndRef.current && messages.length > 0) {
      // Use requestAnimationFrame to batch with other DOM operations
      requestAnimationFrame(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }
  }, [messages.length]); // Only depend on length to reduce re-renders

  // Focus input when opened (optimized to avoid setTimeout violation)
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Use requestAnimationFrame instead of setTimeout for better performance
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          inputRef.current?.focus();
        });
      });
    }
  }, [isOpen]);

  const loadChatHistory = async (sessionId) => {
    try {
      const response = await aiAPI.getChatHistory(sessionId);
      if (response.data.success) {
        const historyMessages = response.data.messages.map(msg => ({
          id: msg.id,
          user: msg.user_message,
          ai: msg.ai_response,
          timestamp: msg.created_at
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
    
    // Add user message immediately
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
          suggestions: response.data.suggestions || []
        };
        
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = aiMsg;
          return updated;
        });
      } else {
        throw new Error(response.data.message || 'Failed to get response');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      
      // Provide fallback responses for common questions
      const fallbackResponse = getFallbackResponse(userMessage);
      
      const errorMsg = {
        id: Date.now() + 1,
        user: userMessage,
        ai: fallbackResponse,
        timestamp: new Date().toISOString(),
        isError: !fallbackResponse.includes('How to create a new order') // Only mark as error if no fallback
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
    if (!sessionId) return;
    
    try {
      await aiAPI.clearChat(sessionId);
      setMessages([]);
    } catch (err) {
      console.error('Error clearing chat:', err);
    }
  };

  const handleQuickSuggestion = (suggestion) => {
    setInputMessage(suggestion);
    inputRef.current?.focus();
  };

  const widgetContent = (
    <>
      {/* Floating Button */}
      <motion.button
        className={`chat-widget-button ${inlineMode ? 'chat-widget-button-inline' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={inlineMode ? {} : { scale: 1.1, rotate: 5 }}
        whileTap={inlineMode ? {} : { scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          boxShadow: inlineMode ? undefined : [
            "0 4px 20px rgba(255, 215, 0, 0.4)",
            "0 4px 30px rgba(255, 215, 0, 0.6)",
            "0 4px 20px rgba(255, 215, 0, 0.4)"
          ]
        }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          boxShadow: inlineMode ? undefined : {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {isOpen ? (
          <HiX />
        ) : (
          <>
            <motion.div
              className="chat-icon-container"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HiChip className="chat-icon-main" />
              <HiSparkles className="chat-icon-sparkle" />
            </motion.div>
            {inlineMode && (
              <div className="chat-inline-content">
                <h3>AI Assistant</h3>
                <p>Ask me anything</p>
              </div>
            )}
          </>
        )}
        {!isOpen && messages.length > 0 && (
          <motion.span 
            className="chat-badge"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {messages.length}
          </motion.span>
        )}
        {!isOpen && !inlineMode && (
          <motion.span 
            className="chat-pulse-ring"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-widget-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="chat-widget-header">
              <div className="chat-header-content">
                <HiSparkles className="chat-header-icon" />
                <div>
                  <h3>AI Assistant</h3>
                  <p>Ask me anything about the system</p>
                </div>
              </div>
              <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
                <HiX />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-widget-messages">
              {messages.length === 0 && (
                <div className="chat-welcome">
                  <HiSparkles className="welcome-icon" />
                  <h4>Hello! I'm your AI assistant</h4>
                  <p>I can help you with:</p>
                  <ul>
                    <li>System navigation and features</li>
                    <li>Order management</li>
                    <li>Business insights</li>
                    <li>General questions</li>
                  </ul>
                  <div className="quick-suggestions">
                    <p>Try asking:</p>
                    {["How do I create a new order?", "What are the keyboard shortcuts?", "How do I filter orders?"].map((suggestion, idx) => (
                      <button
                        key={idx}
                        className="quick-suggestion-btn"
                        onClick={() => handleQuickSuggestion(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div key={msg.id} className="chat-message-group">
                  {msg.user && (
                    <div className="chat-message user-message">
                      <div className="message-content">{msg.user}</div>
                    </div>
                  )}
                  {msg.ai && (
                    <div className="chat-message ai-message">
                      <HiSparkles className="ai-icon" />
                      <div className="message-content">{msg.ai}</div>
                    </div>
                  )}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="message-suggestions">
                      {msg.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          className="suggestion-btn"
                          onClick={() => handleQuickSuggestion(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="chat-message ai-message">
                  <HiSparkles className="ai-icon" />
                  <div className="message-content typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form className="chat-widget-input" onSubmit={sendMessage}>
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
              />
              <button type="submit" disabled={!inputMessage.trim() || isLoading}>
                <HiPaperAirplane />
              </button>
              {messages.length > 0 && (
                <button type="button" className="clear-btn" onClick={clearChat} title="Clear chat">
                  Clear
                </button>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  if (!isMounted) {
    return null;
  }

  // In inline mode, render directly without portal
  if (inlineMode) {
    return widgetContent;
  }

  return createPortal(widgetContent, document.body);
};

export default memo(AIChatWidget);

