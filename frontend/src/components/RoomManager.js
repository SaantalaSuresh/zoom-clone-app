import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './RoomManager.css';

const RoomManager = () => {
  const [roomName, setRoomName] = useState('');
  const [rooms, setRooms] = useState([]);

  const createRoom = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/rooms`, { roomName });
      setRoomName('');
      fetchRooms();
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/rooms`);
      setRooms(response.data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="room-manager-container">
      <h2>Room Manager</h2>
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="Enter room name"
      />
      <button onClick={createRoom}>Create Room</button>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomManager;
