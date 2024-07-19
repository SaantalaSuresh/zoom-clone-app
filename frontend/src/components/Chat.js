import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './Chat.css';
import UserList from './UserList';
import ChatMessage from './ChatMessage';

import URL from './Url';

const socket = io(URL);

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('userList', (userList) => {
      setUsers(userList);
    });

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (username === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  const sendMessage = async () => {
    if (message) {
      await axios.post(`${URL}/api/chat/send`, { message });
      socket.emit('message', { text: message, isAdmin });
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <UserList users={users} />
      <div className="message-list">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
