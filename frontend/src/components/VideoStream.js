import React, { useEffect, useRef } from 'react';
import Peer from 'peerjs';
import './VideoStream.css';
import ScreenShareButton from './ScreenShareButton';

const VideoStream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const peer = new Peer(undefined, {
      host: 'localhost',
      port: 9000,
      path: '/myapp',
    });

    peer.on('open', (id) => {
      console.log('Peer ID:', id);
    });

    peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          call.answer(stream);
          call.on('stream', (remoteStream) => {
            videoRef.current.srcObject = remoteStream;
          });
        });
    });

    return () => {
      peer.destroy();
    };
  }, []);

  return (
    <div className="video-stream-container">
      <video ref={videoRef} autoPlay />
      <ScreenShareButton />
    </div>
  );
};

export default VideoStream;
