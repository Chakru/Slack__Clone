import React, { useState } from 'react';
import db from './../../../firebase';
import { useStateValue } from './../../../Redux/StateProvider';
import firebase from 'firebase';
import './ChatInput.css';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = e => {
    e.preventDefault();

    if (channelId) {
      db.collection('channel').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput('');
  };

  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
