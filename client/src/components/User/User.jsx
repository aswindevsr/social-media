import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../actions/userAction';
// import './followers-card.css'


const User = ({person, id}) => {
    
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.AuthReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id))

    const handleFollow=()=>{
        following ? 
        dispatch(unFollowUser(person._id, user)) :
        dispatch(followUser(person._id, user));
        setFollowing((prev)=> !prev)
    }

  return (
    <div className="follower">
                <div>
                    <img src={person.coverPicture? serverPublic+person.coverPicture: serverPublic + "defaultCover.jpg"} alt="" className='follower-img' />
                    <div className="name">
                        <span>{person.firstname}</span>
                        <span>{person.username}</span>
                    </div>
                </div> 
                <button onClick={handleFollow} className={following ? 'fc-btn unfollow-btn' : 'btn fc-btn'}>
                    {following ? <span style={{fontSize:"10px",fontWeight:"bold"}}>UNFOLLOW</span> :"FOLLOW"}
                </button>
            </div>
  )
}

export default User