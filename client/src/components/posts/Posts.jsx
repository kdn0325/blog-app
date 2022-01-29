import React from 'react'
import "./Posts.css"
import Post from '../post/Post'

export default function posts({posts}) {
    return (
        <div className="posts">
            {posts.map(p=>(
                <Post post={p}/>
            ))}
        </div>
    )
}
