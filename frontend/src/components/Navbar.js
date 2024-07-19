// import React from 'react';
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   return (
//     // <nav className="navbar">
//     //   <Link to="/chat">Chat</Link>
//     //   <Link to="/video-stream">Video Stream</Link>
//     //   <Link to="/room-manager">Room Manager</Link>
//     //   <Link to="/admin-panel">Admin Panel</Link>
//     // </nav>
//     <button className="control-button">
//     <MdScreenShare />
//     <span>Share screen</span>
//   </button>
//   );
// };

// export default Navbar;

import React from 'react';
import {  MdVideocamOff, MdMic, MdCall, MdChat, MdPeople, MdMoreHoriz } from 'react-icons/md';
import ScreenShareButton from './ScreenShareButton';
import './nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="video-controls">
      <button className="control-button">
      
        <ScreenShareButton />
      </button>
      <button className="control-button">
        <MdVideocamOff />
        <span>Stop video</span>
      </button>
      <button className="control-button">
        <MdMic />
        <span>Mute</span>
      </button>
      <button className="control-button end-call">
        <MdCall />
      </button>
<Link to="/chat">
<button className="control-button">
        <MdChat />
        <span>Chat</span>
      </button>
</Link>
      <button className="control-button">
        <MdPeople />
        <span>Participants</span>
      </button>
      <button className="control-button">
        <MdMoreHoriz />
        <span>More</span>
      </button>
    </div>
  );
};

export default Navbar;
