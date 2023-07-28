import React, { useEffect, useState } from 'react'
import './info-card.css'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ProfileModal from '../Modals/ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from  '../../Api/UserRequest.js'
import { logOut } from '../../actions/AuthAction';

const InfoCard = () => {

    const [modalOpened,setModalOpened] = useState(false)
    const dispatch = useDispatch()
    const params = useParams();

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const {user} = useSelector((state)=>state.AuthReducer.authData)

    useEffect(()=>{
        const fetchProfileUser = async()=>{
            if(profileUserId === user._id){
                setProfileUser(user)
                 console.log(user);
            }
            else {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                 console.log(profileUser)
            }
        }
        fetchProfileUser();
    },[user])

    const handleLogout=()=>{
        dispatch(logOut())
    }

  return (
    <div className="info-card">
        <div className="info-head">
            <h4>Profile info</h4>
            {user._id === profileUserId ? (<> <div onClick={()=>setModalOpened(true)}> <ModeEditOutlinedIcon/> </div> 
            <ProfileModal 
            setModalOpened={setModalOpened} 
            modalOpened={modalOpened}
            data={user}
            /> </>
            
             ) : (
                ""
                )}
             
        </div>

        <div className="info">
            <span><b>Status </b></span>
            <span>{profileUser.relationship}</span>
        </div>
        <div className="info">
            <span><b>Lives </b></span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className="info">
            <span><b>Works at </b></span>
            <span>{profileUser.worksat}</span>
        </div>
        
        <button onClick={handleLogout} className='btn lg-btn'>Log Out</button>
    </div>
  )
}

export default InfoCard