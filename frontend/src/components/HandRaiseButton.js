import React from 'react';

const HandRaiseButton = () => {
  const handleHandRaise = () => {
    const token = localStorage.getItem('token');
    fetch('/api/rooms/handraise', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ handRaised: true })
    });
  };

  return <button className="hand-raise-button" onClick={handleHandRaise}>Raise Hand</button>;
};

export default HandRaiseButton;
