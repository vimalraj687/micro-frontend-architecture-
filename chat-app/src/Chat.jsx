import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
 
const socket = io('http://localhost:5000'); 

const Chat = () => {
  const [messages, setMessages] = useState([]);  
  const [newMessage, setNewMessage] = useState('');  
  const [isTyping, setIsTyping] = useState('');  
  const messagesEndRef = useRef(null);  

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on('typing', (username) => {
      setIsTyping(`${username} is typing...`);
    });

    return () => {
      socket.off('receive_message');
      socket.off('typing');
    };
  }, []);
 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
 
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const messageData = {
        sender: 'User',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit('send_message', messageData); 
      setNewMessage(''); 
      setIsTyping(''); 
    }
  }; 
  const handleTyping = () => {
    socket.emit('typing', 'User');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
     
      <div className="bg-teal-500 text-center text-3xl font-semibold p-4">
        Chat Application
      </div>
 
      <div className="flex-1 p-4 overflow-auto space-y-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg max-w-[80%] ${
                message.sender === 'User'
                  ? 'bg-teal-300 text-teal-800 ml-auto'
                  : 'bg-gray-700 text-white'
              }`}
            >
              <strong>{message.sender}:</strong> {message.text}
              <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        
        {isTyping && <div className="text-gray-500 italic">{isTyping}</div>}
      </div>
 
      <div className="bg-teal-500 p-4 flex items-center">
        <input
          type="text"
          className="flex-1 p-3 rounded-lg text-black bg-white"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          onInput={handleTyping}
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;

 