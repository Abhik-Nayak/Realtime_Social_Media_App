import React from 'react'
import "./closeFriend.css"
const CloseFriend = ({user}) => {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={"https://picsum.photos/200/300"} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend