import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.isAdmin ? 'admin' : 'user'}`}>
      <span>{message.text}</span>
    </div>
  );
};

export default ChatMessage;
