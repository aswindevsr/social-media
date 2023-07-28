// import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import './profile-modal.css'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../../actions/uploadAction';
import { updateUser } from '../../../actions/userAction';

function ProfileModal({modalOpened, setModalOpened, data}) {

    const theme = useMantineTheme();
    const {password, ...others} = data;
    const [formData, setFormData] = useState(others);
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const dispatch = useDispatch()
    const param = useParams()
    const {user} = useSelector((state)=> state.AuthReducer.authData)

    const handleChange=(e)=>{
         setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onImageChnage=(event)=>{
       if (event.target.files && event.target.files[0]){
        let img = event.target.files[0];
        event.target.name === "profileImage" ?
        setProfileImage(img)
        : setCoverImage(img);
       }
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      let userData = formData;
      if(profileImage){
        const data = new FormData();
        const fileName = Date.now() + profileImage.name;
        data.append("name", fileName);
        data.append("file", profileImage);
        userData.profilePicture = fileName;
        try {
          dispatch(uploadImage(data))
        } catch (error) {
          console.log(error);
        }
      }
      if (coverImage){
        const data = new FormData(); 
        const fileName = Date.now() + coverImage.name;
        data.append("name", fileName);
        data.append("file", coverImage);
        userData.coverPicture = fileName;
        try {
          dispatch(uploadImage(data))
        } catch (error) {
          console.log(error);
        }
      }
      dispatch(updateUser(param.id, userData));
      setModalOpened(false)
      console.log(modalOpened)
    }

    const isMobile = useMediaQuery({query: '(max-width: 600px)'})
  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        title="Edit Profile"
        size={isMobile ? "90%":"55%"}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form className='info-form'>
            <div className='info-main-container'>
            <h3>Your info</h3>
            <div className='info-container'>
            <div className='info-in'>
                <input  
                placeholder='First Name' 
                name='firstname' 
                type="text" 
                className="info-input"
                onChange={handleChange}
                value={formData.firstname} />
                <input  
                placeholder='Last Name' 
                name='lastname' 
                type="text" 
                className="info-input"
                onChange={handleChange}
                value={formData.lastname} />
            </div>
            <div className='info-inp'>
            <input  
                placeholder='WorksAt' 
                name='worksat' 
                type="text" 
                className="info-input"
                onChange={handleChange}
                value={formData.worksat} />
            </div>
            <div className='info-in'>
                <input  
                placeholder='Lives In' 
                name='livesin' 
                type="text" 
                className="info-input"
                onChange={handleChange}
                value={formData.livesin} />
                <input  
                placeholder='Country' 
                name='country' 
                type="text" 
                className="info-input"
                onChange={handleChange}
                value={formData.country} />
            </div>
            <div>
                <input type="text"
                placeholder='Relationship Status'
                 className='info-input'
                 name='relationship'
                 onChange={handleChange} 
                 value={formData.relationship}/>
            </div>
            <div className='info-img'>
                Profile Image
                <input type="file" name='profileImage' onChange={onImageChnage}/>
                Cover Image
                <input type="file" name='coverImage'  onChange={onImageChnage} />
            </div>
            </div>
            <button className='btnn' onClick={handleSubmit}>Update</button>
            </div>
        </form> 
      </Modal>
    </>
  );
}

export default ProfileModal