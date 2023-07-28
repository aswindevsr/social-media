import React from 'react'
import './profile-card.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


const ProfileCard = ({location}) => {
const {user} = useSelector((state)=>state.AuthReducer.authData)
const post = useSelector((state)=>state.postReducer.posts)
const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
console.log(user._id);

  return (
    <div className="profile-card">
        <div className="profile-img">
            <img style={{maxHeight: location === "profilePage" ? '15rem':'10rem'}} src={user.coverPicture? serverPublic + user.coverPicture: serverPublic + "defaultCover.jpg"} alt="" />
            <img src={user.profilePicture? serverPublic + user.profilePicture: serverPublic + "defaultProfile.jpg"} alt="" />
        </div>
        <div className="profile-name">
            <span>{user.firstname} {user.lastname}</span>
            <span>{user.worksAt? user.worksAt : "Write about yourself"}</span>
        </div>

        <div className="followStatus"> 
            <hr />
            <div> 
            <div className="follow">
                <span>{user.followers.length}</span>
                <span>Followers</span> 
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>{user.following.length}</span>
                <span>Following</span>
            </div>
            {location === "profilePage" && 
            <>
                <div className="vl"></div>
                <div className="follow">
                    <span>{post.filter((post)=> post.userId === user._id).length}</span>
                    <span>Posts</span>
                </div>
            </>}
            </div>
            <hr />
        </div>
        {location === "profilePage" ? "": <span> 
            <Link style={{color:"var(--orange)"}}   to={`/profile/${user._id}`}>
            My Profile
            </Link>
            
            </span>}
        {/* <span style={{display:profilePage?"none":"flex"}}>My Profile</span> */}
    </div>
  )
}

export default ProfileCard