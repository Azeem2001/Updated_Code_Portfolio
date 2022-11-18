import React, { useState } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import styled from "./Comments.module.scss";
const Comments = ({ allComments, user, data, onSubmit, blogId }) => {
  return (
    <div className={styled.Wrapper}>
      <CommentSection

        currentUser={{
          currentUserId: user?.uid,
          currentUserImg: "https://cdn-icons-png.flaticon.com/512/892/892781.png?w=360",
          currentUserFullName: user?.name,
        }}
        commentData={allComments}
        onSubmitAction={(e) => onSubmit(e, blogId)}
        onDeleteAction={() => window.prompt("Are you sure?")}
        onReplyAction={() => alert("Reply was posted")}
        onEditAction={() => alert("Reply was edited!")}
      />
    </div>
  );
};

export default Comments;
