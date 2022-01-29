import axios from 'axios';
import React, { useContext, useRef } from 'react'
import {Context} from "../../context/Context";
import "./Login.css"

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const {user,dispatch,isFetching} = useContext(Context);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = axios.post("/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value,
            });
            dispatch({type:"LOGIN_SUCESS",payload:res.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    };
    console.log(user)
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your Username..." ref={userRef}/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your Password..." ref={passwordRef}/>
                <button className="loginButton" type="submit">Login</button>
                <button className="loginResister">Resister</button>
            </form>
        </div>
    )
}
