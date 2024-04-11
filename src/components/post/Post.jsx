import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({post}) => {

  const [CommentsOpen, setCommentsOpen] = useState(false)

  //Temporary 
  const liked = false;

  return (
    <div className='post'>
      <div className="container">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilePic} alt="" />
          <div className="details">
            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
              <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
          </div>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="content">
        <p>{post.dec}</p>
        <img src={post.img} alt="" />
      </div>
      <div className="info">
        <div className="item">
          {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          12 Likes 
        </div>
        <div className="item" onClick={() => setCommentsOpen(!CommentsOpen)}>
          <TextsmsOutlinedIcon />
          12 Comments
        </div>
        <div className="item">
          <ShareOutlinedIcon />
          Share
        </div>
      </div>
      {CommentsOpen && <Comments/>}
    </div>
  </div>
  )
}

export default Post