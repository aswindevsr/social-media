import React, { useState } from 'react'
import './auth.css'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction.js'

const Auth = () => {
    const loading = useSelector((state)=> state.AuthReducer.loading)
    const [isSignup, setIsSignup] = useState(true)
    const [data,setData] = useState({firstname:"",lastname:"",email:"",password:"",confirmpassword:""})
    const [confirmPass,setConfirmPass] = useState(true)
    // console.log(loading);
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(isSignup){
            data.password === data.confirmpassword ?
            dispatch(signUp(data)):
            setConfirmPass(false);
        } else {
            dispatch(logIn(data))
        }
    }

    const resetForm =()=>{
        setConfirmPass(true)
        setData({firstname:"",lastname:"",username:"",password:"",confirmpassword:""})
    }

    const handleChange =(e)=> (
        setData({...data,[e.target.name]: e.target.value})
    )
  return (
    <div className='container auth-container'>
        <div className='cont-auth'>
        <div className="left-auth">
            <img src="" alt="" />
            <div>
                <h1>@sWin's</h1>
                <h6>SocialMedia App</h6>
            </div>
        </div>
        <div className="right-auth">
            <form action="" onSubmit={handleSubmit}>
                <h3 style={{display:"flex",justifyContent:"center",marginBottom:"1rem"}}>
                   {isSignup? "Sign Up":"Log In"}</h3>
                    { isSignup &&  
                    <div className='row-auth'>
                    <input type="text"
                    placeholder='First Name' 
                    className='infoInput'
                    name='firstname'
                    onChange={handleChange}
                    value={data.firstname}
                    />
                    <input type="text"
                    placeholder='Last Name' 
                    className='infoInput'
                    name='lastname'
                    onChange={handleChange}
                    value={data.lastname}
                    />
                </div>}
                
                <div>
                    <input type="email"
                    placeholder='E-Mail' 
                    className='infoEmail'
                    name='username'
                    onChange={handleChange}
                    value={data.username}
                    />
                </div>
                <div className='row-auth'>
                <input type="password"
                    placeholder='Password' 
                    className='infoInput'
                    name='password'
                    onChange={handleChange}
                    value={data.password}
                    />
                    {isSignup && 
                    <input type="password"
                    placeholder='Confirm Password' 
                    className='infoInput'
                    name='confirmpassword'
                    onChange={handleChange}
                    value={data.confirmpassword}
                    />
                    }
                </div>
                <div>
                    <span style={{display: confirmPass ? "none" : "block",justifyContent:"flex-end",paddingTop:"0.2rem",color:"red"}}> *Please check your password </span>
                </div>

                <div style={{display:"flex",justifyContent:"flex-end",paddingTop:"1rem"}}>
                    <span onClick={()=>{setIsSignup((prev)=>!prev); resetForm()}} className='ls'><h5>{isSignup ? "Already have an account ? Login!" : "Not a user ? Sign UP !"}</h5></span>
                </div>
                <div style={{display:"flex",justifyContent:"flex-end",marginTop:"1.5rem"}}>
                    <button className='btn btn-primary' type='submit' disabled={loading}>
                        {loading ? "Loading..." : isSignup ? "Sign Up" : "Log In"}
                    </button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Auth