import axios from 'axios'
import React, { useState } from 'react'
import "./Register.css"

export default function Register() {
    const [username,setUsername]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [error,setError]= useState("")
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/auth/register",{
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login");
        }catch(err){
            setError(true)
        }
    };
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                type="text" 
                className="registerInput"
                placeholder="이름을 입력해주세요..." 
                onChange={e=>setUsername(e.target.value)}
                 />
                <label>Email</label>
                <input 
                type="text" 
                className="registerInput"
                placeholder="이메일을 입력해주세요..." 
                onChange={e=>setEmail(e.target.value)}
                 />
                <label>Password</label>
                <input
                type="password"
                className="registerInput"
                placeholder="비밀번호를 입력해주세요..." 
                onChange={e=>setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">회원가입</button>
                <button className="registerResister">로그인</button>
                {error && <span style={{color:"red", marginTop:"10px"}}>틀렸습니다</span>}
            </form>
        </div>
    )
}
