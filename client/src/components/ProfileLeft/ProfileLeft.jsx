import React from 'react'
import './profile-left.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="profile-left">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft