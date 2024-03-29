import React from 'react';
import Person from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { useContext } from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/Abhik`}>
          <img
            src={"https://unsplash.com/photos/iEEBWgY_6lA"}
            alt="A"
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  )
}

export default Topbar