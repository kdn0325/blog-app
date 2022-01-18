import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar"> 
            <div className="sidebarItem">
                <span className="sidebarTitles">ABOUT ME</span>
                <img src="http://placekitten.com/500/500" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo a cum id nesciunt sit repellendus explicabo quae, temporibus dolorem est natus? Odit, fugit! Eos sunt sequi facere blanditiis soluta!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitles">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitles">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-google"></i>
                <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            
            </div>
        </div>
    )
}
