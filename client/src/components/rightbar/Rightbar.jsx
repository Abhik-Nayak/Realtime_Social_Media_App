import React from 'react';
import birthday from "../../assets/birthday.jpg"
import Online from '../online/Online';

import "./rightbar.css";

const Rightbar = () => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="../../assets/birthday.jpg" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        {/* <img className="rightbarAd" src="assets/ad.png" alt="" /> */}
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {/* {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))} */}
          <Online/>
          <Online/>
        </ul>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <HomeRightbar />
      </div>
    </div>
  )
}

export default Rightbar