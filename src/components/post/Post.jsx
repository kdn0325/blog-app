import React from 'react'
import './Post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="http://placekitten.com/1200/1200" alt="" />
            <div className="postInfo">
                <div className="postcats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">
                    1 Hour ago
                </span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquid delectus aut? Ab quo magnam ut id, doloremque accusantium omnis sequi, reiciendis perspiciatis neque dolorum nemo architecto ipsam fugiat in.
            </p>
        </div>
    )
}
