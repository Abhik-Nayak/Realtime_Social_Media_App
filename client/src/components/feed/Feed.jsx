import React from 'react';
import Post from "../post/Post";
import "./feed.css"
const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedWraper'>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed