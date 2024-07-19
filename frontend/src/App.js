import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import VideoStream from './components/VideoStream';
import RoomManager from './components/RoomManager';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/video-stream" element={<VideoStream />} />
            <Route path="/room-manager" element={<RoomManager />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
