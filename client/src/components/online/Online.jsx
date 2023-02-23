import React from 'react'
import "./online.css";
import user from "../../assets/user.jpg"
const Online = () => {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <img className="rightbarProfileImg" src={user} alt="" />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">Abhik</span>
  </li>
  )
}

export default Online