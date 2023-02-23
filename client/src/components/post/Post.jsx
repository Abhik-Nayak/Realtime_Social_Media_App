import React from 'react';
import { Link } from 'react-router-dom';
import { More, MoreVert } from '@mui/icons-material';
import ThumbUp from '@mui/icons-material/ThumbUpAlt';
import Favorite from '@mui/icons-material/Favorite';
import user from "../../assets/user.jpg";
import place from '../../assets/place.jpg';
import "./post.css"
const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={"/profile/Abhik"}>
              <img className='postProfileImg' src={user} alt="U" />
            </Link>
            <span className='postUsername'>John</span>
            <span className='postDate'>15:38</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>Hello today i have visited this place .</span>
          <img className='postImg' src={place} alt="p"/>
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <ThumbUp className='likeIcon'/>
            <Favorite className='likeicon'/>
            <span className='postLikeCounter'>23 people like it</span>
          </div>
          <div className='postBottom Right'>
            <span className='postCommentText'>Such a Beautiful place</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post