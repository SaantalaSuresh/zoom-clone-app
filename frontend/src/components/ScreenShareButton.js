import React from 'react';
import Peer from 'peerjs';
import { MdScreenShare} from 'react-icons/md';

import './ScreenShareButton.css';

const ScreenShareButton = () => {
  const startScreenShare = () => {
    navigator.mediaDevices.getDisplayMedia({ video: true })
      .then((stream) => {
        const peer = new Peer(undefined, {
          host: 'localhost',
          port: 9000,
          path: '/myapp'
        });

        peer.on('open', (id) => {
          console.log('Screen Share Peer ID:', id);
          // Send the screen share stream to the peer
          peer.call('peer-id', stream);
        });
      })
      .catch((error) => {
        console.error('Error sharing screen', error);
      });
  };

  return <button className="control-button" onClick={startScreenShare}>
  <MdScreenShare />
  <span>Share screen</span>
  
</button>
};

export default ScreenShareButton;
