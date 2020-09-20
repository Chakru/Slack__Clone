import React from 'react';
import './Message.css';
function Message({ message, timestamp, name, userUrl }) {
  return (
    <div>
      <div className="message">
        <img src={userUrl} alt="" />
        <div className="message__info">
          <h4>
            {name}
            <span className="message__timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
