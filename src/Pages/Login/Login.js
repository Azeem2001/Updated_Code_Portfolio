
import React, { useState } from "react"
import styled from "./login.module.scss"
import {
    auth,
    signInWithEmailAndPassword,

} from "../../firebase";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomButton from "../../Components/Button/CustomButton";
const Login = () => {
    const navigate = useNavigate();
    const [UserInfo, SetUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        SetUserInfo({ ...UserInfo, [name]: value });
    };
    
    const postData = async () => {
       
        try {
            const { user } = await signInWithEmailAndPassword(
                auth,
                UserInfo.email,
                UserInfo.password
            );
            if (user.uid ) {
                let redirectUrl =  localStorage.getItem("redirectUrl")
                navigate(redirectUrl)             
                                 
            }
        } catch (error) {
            console.log(error);
            toast.warn("credientails not valid")
           
        }
    };

    return (
        <>
        <h1 className={styled.heading}>Login</h1>
        <div className={styled.LoginContainer}>
            <div className={styled.container}>
            <input
                type="email"
                placeholder="Enter Your Email"
                value={UserInfo.email}
                name="email"
                autoComplete="off"
                required
                onChange={getUserData}
            />
            <br />
            <br />

            <input
                type="password"
                placeholder="Enter Your Password"
                value={UserInfo.password}
                autoComplete="off"
                required
                name="password"
                onChange={getUserData}
            />
            <br />

           <div className={styled.btnContainer}>
           <CustomButton title={"Login"} onClick={postData}/>
            <CustomButton title={"Rigester"} onClick={()=> navigate("/rigester")}/>

           </div>
            </div>
        </div>
        </>
    )
}

export default Login

