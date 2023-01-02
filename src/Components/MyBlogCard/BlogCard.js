import React, { useState } from "react";
import styled from "./BlogCard.module.scss";
import CustomButton from "../Button/CustomButton";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import AddLinkIcon from "@mui/icons-material/AddLink";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
const BlogCard = ({ article, setIsComment }) => {
  const { blogHeading, blogImage, blogContent } = article?.fields;
  let text = blogContent;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  //  const HandleComments =   () =>{

  //    if(!auth?.currentUser?.uid) {
  //     localStorage.setItem("redirectUrl", "/myblog" )
  //     navigate("/login")
  //   }
  //    console.log("hello")
  //    setIsComment(true)
  //  }
  return (
    <>
      {blogHeading ? (
        <div className={styled.BlogCardContainer}>
          <h2>{blogHeading}</h2>
          {blogImage ? (
            <img src={blogImage?.fields?.file?.url} alt={blogHeading} />
          ) : null}
          <p className="text">
            {isReadMore ? text.slice(0, 250) : text}
            <span onClick={toggleReadMore}>
              {isReadMore ? (
                <div className={styled.Btns}>
                  <CustomButton title={"Read"} item={"More"} />
                </div>
              ) : (
                <div className={styled.Btns}>
                  <CustomButton title={"Read"} item={"Less"} />
                </div>
              )}
            </span>
          </p>
          {/* <p>{refactortext}
        
          </p> */}

          <div className={styled.footer}>
            <div className={styled.footerItem}>
              <p>
                <SupervisorAccountIcon /> <span>admin</span>
              </p>
              <p>
                <CalendarMonthIcon /> <strong>9 Jan 2017</strong>
              </p>
              <p>
                <MessageIcon /> <span>18</span>
              </p>
              <p>
                <LocalOfferIcon /> <strong>js, php, html</strong>
              </p>
              <p>
                <AddLinkIcon /> <span>permalink</span>
              </p>
              <div className={styled.btn}>
                {/* <CustomButton title={"Comments"} onClick={HandleComments} /> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BlogCard;
