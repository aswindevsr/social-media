import React, { useEffect, useState } from 'react'
import './post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector } from 'react-redux';
import { likePost } from '../../Api/PostRequest';


const Post = ({data}) => {
  const {user} = useSelector((state)=> state.AuthReducer.authData)

  const [liked,setLiked]=useState(data.likes.includes(user._id))
  const [likes,setLikes] = useState(data.likes.length)

  const handleLike =()=>{
    setLiked((prev)=>!prev)
    likePost(data._id, user._id)
    liked?setLikes((prev)=> prev - 1): setLikes((prev)=> prev +1)
  }

  // useEffect(()=>{

  // })
  return (
    <div className="post">
        <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

        <div className="reaction-icon">
          
            <div className='icons'>
                <div  onClick={handleLike}>
                {liked?
                  <FavoriteIcon style={{color:"var(--orange)", cursor:"pointer"}}/>:
                  <FavoriteBorderIcon/>}
                </div>
            
                <ChatBubbleOutlineIcon/>
            
                <ShareIcon/>
            </div>
            <span style={{color:"var(--gray)",fontSize:"12px"}}>{likes > 0 && `${likes} likes` }</span>
            <div className="detail">
                <span><b>{user.firstname} kk</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    </div>
  )
}

export default Post