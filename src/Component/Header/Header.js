import React from 'react';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { AccessTime, HelpOutline } from '@material-ui/icons';
import { useStateValue } from './../../Redux/StateProvider';

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTime />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Slack" />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
