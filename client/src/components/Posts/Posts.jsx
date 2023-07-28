import React, { useEffect } from 'react'
import './posts.css'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction'
import { useParams } from 'react-router-dom'

const Posts = () => {

  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.AuthReducer.authData)
  let {posts, loading} = useSelector((state)=>state.postReducer)
  const params = useParams()

  useEffect(()=> {
    dispatch(getTimelinePosts(user._id))
  }, []);

  if(!posts) return "No posts"

  if(params.id) posts = posts.filter((post)=> post.userId === params.id)
  return (
    <div className="posts">
      {loading? "Fetching posts..." :
        posts.map((data,id)=>(
            <Post data={data} id={id}/>
        ))}
    </div>
  )
}

export default Posts