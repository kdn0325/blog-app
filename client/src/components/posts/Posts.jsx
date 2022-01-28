import React from 'react'
import "./Posts.css"
import Post from '../post/Post'

export default function posts() {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
