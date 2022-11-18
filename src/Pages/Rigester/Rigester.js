import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "./Rigester.module.scss"
import { toast } from "react-toastify";

import {
  auth,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  db, getDoc
} from "../../firebase";
import CustomButton from "../../Components/Button/CustomButton";
const Rigester = () => {
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
  const getCurrentUser = async (uid) => {
    try {
      const res = doc(db, "user", uid)
      const getData = await getDoc(res)
      return {
        ...getData?.data()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const postData = async () => {
    if (UserInfo.name === "") {
      toast.warn(`name is not defined`)
    } else if (UserInfo.email === "") {
      toast.warn(`email is not defined`)
    } else if (UserInfo.password === "") {
      toast.warn(`password is not defined`)
    } else {
      navigate("/myblog")

    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        UserInfo.email,
        UserInfo.password
      );
      const ref = doc(db, "user", user?.uid);
      const response = await setDoc(ref, {
        email: user.email,
        name: UserInfo.name,
      });
      let data = {
        ...await getCurrentUser(user?.uid),
        uid: user?.uid
      }
      localStorage.setItem("user", JSON.stringify(data))
      let newUser = JSON.parse(localStorage.getItem("user"))
      if (newUser?.uid) {
        navigate("/myblog")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styled.RigesterContainer}>
      <div className={styled.container}>
        <br />
        <br />
        <input
          width={"100%"}
          type="text"
          placeholder="Enter Your Name"
          value={UserInfo.name}
          autoComplete="off"
          name="name"
          required
          onChange={getUserData}
        />
        <br />
        <br />

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

        <br />
        <CustomButton title={"Rigester"} onClick={postData} />

      </div>

    </div>
  );
};

export default Rigester;
