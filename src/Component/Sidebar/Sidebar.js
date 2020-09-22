import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import { useStateValue } from './../../Redux/StateProvider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption/SidebarOption';
import './Sidebar.css';

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    //Run the code when the component loads.
    db.collection('channel').onSnapshot(snapshot =>
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>LocalHost</h2>
          <h3>
            <FiberManualRecordIcon /> {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mendtions & Reactions" />
      <SidebarOption Icon={DraftIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channel" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Channel" />

      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
