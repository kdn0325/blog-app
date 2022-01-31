import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { useLocation,Link } from 'react-router-dom'
import "./SinglePost.css"

export default function SinglePost() {
    const location = useLocation()
    const path= location.pathname.split("/")[2];
    const [post,setPost]= useState({})

    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/"+path);
            setPost(res.data)
        };
        getPost()
    },[path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&(
                <img className="singlePostImg" src={post.photo} alt="" />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="s;inglePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singPostAuthor">
                        Autor:
                        <Link to={`/?user=${post.username}`} className="link" >
                         <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singPostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    )
}
