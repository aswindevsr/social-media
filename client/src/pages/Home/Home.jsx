import React from 'react'
import './home.css'
import Profile from '../../components/profile-side/Profile'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
  return (
    <div className="home">
        <Profile/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home