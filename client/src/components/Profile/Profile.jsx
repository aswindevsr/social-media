import React from 'react'
import './profile.css'
import ProfileLeft from '../ProfileLeft/ProfileLeft'
import ProfileCard from '../ProfileCard/ProfileCard'
import Posts from '../Posts/Posts'
import RightSide from '../RightSide/RightSide'
import PostShare from '../PostShare/PostShare'

const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeft/>
        <div className="profile-center">
            <ProfileCard location="profilePage"/>
            <PostShare/>
            <Posts/>
        </div>
        <RightSide/>
        <div className='navbar'></div>
    </div>
  )
}

export default Profile