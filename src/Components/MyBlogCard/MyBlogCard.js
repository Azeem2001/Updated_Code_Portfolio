import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import styled from "./BlogCard.module.scss";
import Comment from "../../Components/Comments/Comment"
import { auth, addDoc, collection, db, onSnapshot } from "../../firebase";
import { useNavigate } from "react-router-dom";

const MyBlogCard = ({ user, allComments=[], posts, isComment, setIsComment }) => {
  // console.log(posts);
  let [comments, setComments] = useState(null);
  // const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const HandleComments = (e, id) => {

    if (!auth?.currentUser?.uid) {
      localStorage.setItem("redirectUrl", "/myblog")
      return navigate("/login")
    }
    onSubmit(e, id)
  }
  const onSubmit = async (e, id) => {
    try {
      
      let data = { avatarUrl: e.avatarUrl, comId: e.comId, fullName: user?.name, replies: e.replies, text: e.text, userId: user?.uid, userProfile: e.userProfile, postId: id, }
      let docRef = collection(db, "comment")
      await addDoc(docRef, data)

    } catch (error) {
      console.log(error)
    }
  }

  const handleComments2 = (allData, article) => {
    let filteredData = allData?.filter((item) => item?.postId === article?.sys?.id)
    return filteredData
  }

  return (
    <div>
      <>
        {posts?.map((article, index) => (
          <>
            <BlogCard article={article} key={index} setIsComment={setIsComment} />
            {
              true && <Comment allComments={handleComments2(allComments, article)} user={JSON.parse(localStorage.getItem("user"))} onSubmit={HandleComments} blogId={article?.sys?.id} />
            }


          </>

        ))}

      </>
    </div>
  );
};

export default MyBlogCard;
