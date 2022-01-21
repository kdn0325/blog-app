import React from 'react'
import "./Topbar.css"
import {Link} from "react-router-dom"

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-google"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="TopList">
                    <li className="topListItem">
                        <Link to="/" className="link" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link" >WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (<img className="topImg" src="http://placekitten.com/100/100" alt="" />) :
                 (
                 <ul className="TopList">
                     <li className="topListItem">
                         <Link className="link" to="/login">LOGIN</Link>
                    </li> 
                     <li className="topListItem">
                         <Link className="link" to="/register">REGISTER</Link>
                    </li> 
                </ul>
                )}
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
