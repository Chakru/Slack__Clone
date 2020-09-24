import React from 'react';
import './Message.css';
function Message({ message, timestamp, user, userImage }) {
  function getCorrectString(dateTimeString) {
    const d = new Date(dateTimeString);
    const dateString = d.toDateString();
    let hours = d.getHours();
    let suffix = 'AM';
    let hourString = '';
    if (hours >= 12) {
      hours = hours == 12 ? 12 : hours % 12;
      hourString = String(hours);
      suffix = 'PM';
    } else {
      hourString = '0' + String(hours);
    }
    const timeString = `${hourString}:${d.getMinutes()} ${suffix}`;
    return dateString + ' ' + timeString;
  }
  return (
    <div>
      <div className="message">
        <img src={userImage} alt="" />
        <div className="message__info">
          <h4>
            {user}
            <span className="message__timestamp">
              {getCorrectString(timestamp?.toDate())}
            </span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
