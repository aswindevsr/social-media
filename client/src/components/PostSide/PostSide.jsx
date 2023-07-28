import React from 'react'
import './post-side.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'

const PostSide = () => {
  return (
    <div className="post-side">
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide