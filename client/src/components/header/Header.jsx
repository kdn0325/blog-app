import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesm">React & Node & MongoDB & Node_Express</span>
                <span className="headerTitlelg">KDN-Blog-app</span>
            </div>
            <img className="headerImg" src="http://placekitten.com/1000/1000" alt="" />
        </div>
    )
}
