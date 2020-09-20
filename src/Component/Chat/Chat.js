import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './Chat.css';
import db from '../../firebase';
import Message from './Message/Message';
function Chat() {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelMessages, setChannelMessages] = useState([]);
  useEffect(() => {
    if (channelId) {
      db.collection('channel')
        .doc(channelId)
        .onSnapshot(snapshot => setChannelDetails(snapshot.data()));
    }

    db.collection('channel')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot =>
        setChannelMessages(snapshot.docs.map(doc => doc.data()))
      );
  }, [channelId]);
  console.log(channelMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {channelDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {channelMessages.map(({ message, name, timestamp, userUrl }) => {
          return (
            <Message
              message={message}
              timestamp-={timestamp}
              name={name}
              userUrl={userUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chat;
