import React from 'react'
import "./SinglePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="http://placekitten.com/800/300" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singPostAuthor">Autor: <b>Abel</b></span>
                    <span className="singPostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus molestias nisi porro rem architecto sapiente praesentium nulla, nostrum dolorum repellat laborum assumenda placeat consectetur quos quia laudantium numquam! Tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, necessitatibus provident? Dolore numquam iusto pariatur modi. Quos, incidunt culpa! Voluptatibus cum temporibus consectetur adipisci repellat vitae repellendus iure blanditiis laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus dolorem hic amet quam in delectus. Quam nam provident rem? Architecto, accusamus adipisci. Facilis fugit quos illum hic reprehenderit quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eligendi officiis laborum tempore praesentium quis nesciunt sed magni odit nostrum. Animi odit dolor deserunt voluptatibus dolorem obcaecati iusto ipsa explicabo?</p>
            </div>
        </div>
    )
}
