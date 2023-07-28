import React, { useState } from 'react'
import './right-side.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import TrentCard from '../TrendCard/TrentCard';
import ShareModal from '../Modals/ShareModal/ShareModal';
import {Link} from 'react-router-dom'

const RightSide = () => {
    const [modalOpened,setModalOpened] = useState(false)

  return (
    <div className="right-side">
        <div className="nav-icons">
             <Link to='../home/'><HomeOutlinedIcon/></Link>
             <SettingsOutlinedIcon/>
             <NotificationsNoneOutlinedIcon/>
             <TextsmsOutlinedIcon/>
        </div>

        <TrentCard/>

        <button className='btn r-btn' onClick={()=>setModalOpened(true)}>
            Share
        </button>
        <ShareModal setModalOpened={setModalOpened}
            modalOpened={modalOpened}/>
    </div>
  )
}

export default RightSide