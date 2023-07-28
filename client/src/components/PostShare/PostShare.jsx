import React,{useState,useRef} from 'react'
import './post-share.css'
import profilepic from '../../assets/person-4.jpg'
import ImageIcon from '@mui/icons-material/Image';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/uploadAction.js';


const  PostShare = () => {

    const loading = useSelector((state)=>state.postReducer.uploading)
    const [image,setImage] = useState(null)
    const imageRef = useRef()
    const {user} = useSelector((state)=>state.AuthReducer.authData)
    const desc = useRef()
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const onImageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const reset =()=>{
        setImage(null)
        desc.current.value=""
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if(image){
            const data = new FormData()
            const filename = Date.now()+ image.name
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename;
            // console.log(newPost);
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                // console.log(error);
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }
  return (
    <div className="post-share">
        <img src={user.profilePicture? serverPublic + user.profilePicture: serverPublic + "defaultProfile.jpg"} alt="" />
        <div>
              <input type="text" 
            ref={desc}
            placeholder="What's happening" />
        
        <div className="post-option">
            <div className="option"
              style={{color:"var(--photo)"}}
              onClick={()=>imageRef.current.click()}
            >
                <ImageIcon/>
                <span>Photo</span>
            </div>
            <div className="option"
            style={{color:"var(--video)"}}
            >
                <PlayCircleFilledIcon/>
                <span>Video</span>
            </div>
            <div className="option"
            style={{color:"var(--location)"}}
            >
                <LocationOnIcon/>
                <span>Location</span>
            </div>
            <div className="option"
               style={{color:"var(--schedule)"}}
            >
                <CalendarMonthIcon/>
                <span>Schedule</span>
            </div>
            <button className='btn ps-btn'

            onClick={handleSubmit}
            disabled={loading}
            > {loading ? "Uploading...":"Share"} </button>
            <div style={{display:"none"}}>
                <input type="file" ref={imageRef} name='myImage' onChange={onImageChange}/>
            </div>
        </div> 
        {image && 
          <div className="preview-img">
              <div onClick={()=>setImage(null)}><CloseIcon/></div>
              <img src={URL.createObjectURL(image)} alt="" />
          </div>
        }
        </div>
    </div>
  )
}

export default PostShare