import React from "react";
import styled from "./Profile.module.scss";

const Profile = ({none}) => {
  const women = "./images/woman.jpg";

  return (
    <>
             
         <div className={styled.LeftSide} style={{ display: none }} >
            <img src={women} alt="women" />
          </div>
      
    </>
  );
};

export default Profile;
