import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "./Myblog.module.scss";
import CustomButton from "../../Components/Button/CustomButton";
import CottageIcon from "@mui/icons-material/Cottage";
import TextField from "@mui/material/TextField";
import MyBlogCard from "../../Components/MyBlogCard/MyBlogCard";
import { client } from "../../client";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { auth, getDocs, collection, db, where, query, onSnapshot } from "../../firebase";

const MyBlog = ({ data, user }) => {
  const blog_1 = "./images/blog-post-small-1.jpg";
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isComment, setIsComment] = useState(false);
  const [allComments, setAllComments] = useState([]);

  const handleBlogsComment = async () => {
    let copyArr = []
    const docRef = collection(db, "comment");
    onSnapshot(docRef, (res) => {
      res?.docChanges()?.forEach((data) => {
        copyArr.push(data?.doc?.data())
      })
    })
    setAllComments(copyArr)
  }

  useEffect(() => {
    handleBlogsComment()

  }, [])

  const navigate = useNavigate();

  useEffect(() => {
    setArticle(data);

  }, [data]);
  // console.log(article[0]?.sys?.id);
  //  const BlogId = article?.map((item)=>  item.sys?.id)  
  //  console.log(BlogId)


  return (
    <>
      {false ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 1rem)", backgroundColor: "grey" }}><CircularProgress /></div> : (
        <div className={styled.MyBlogContainer}>
          <div className={styled.MyBlog}>
            <h1>
              MY <span>BLOG</span>
            </h1>
            <Grid container gap={2}>
              <Grid item xl={7.5}>
                <MyBlogCard user={user} allComments={allComments} isComment={isComment} posts={article} setIsComment={setIsComment} setLoading={true} />

              </Grid>
              <Grid item xl={4}>
                <div className={styled.leftSide}>
                  <CustomButton
                    Icon={<CottageIcon />}
                    persentage={"100%"}
                    title={"Home"}
                    onClick={() => navigate("/")}
                  />
                  <div className={styled.Input}>
                    <input type="text" placeholder="Search In my Blog..." />
                  </div>
                  <div className={styled.posts}>
                    <h3>RECENT POSTS</h3>

                    {article?.map((items, index) =>
                      items?.fields?.blogImage ? (
                        <div className={styled.recentPosts}>
                          <div className={styled.img}>

                            {items?.fields.blogImage ? (
                              <img
                                src={items?.fields.blogImage?.fields?.file?.url}
                                alt={items?.fields?.blogHeading}
                              />
                            ) : null}
                          </div>
                          <div className={styled.text}>
                            <h3>{items.fields?.blogHeading}</h3>
                            <p>{items.fields?.blogDate}</p>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>

              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};

export default MyBlog;
