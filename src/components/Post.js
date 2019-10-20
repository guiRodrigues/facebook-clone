// stateless functional component
import React from "react";

import Comment from "./Comment";

function Post({ data }) {
  const { author, date, content, comments } = data;

  const avatarStyle = {
    backgroundImage: `url(${author.avatar})`,
    width: "50px",
    height: "50px",
    backgroundSize: "cover",
    borderRadius: "50px"
  };

  return (
    <div className={"post"}>
      <div className={"post-info"}>
        <div style={avatarStyle}></div>
        <div className={"infos"}>
          <span className={"post-author"}>{author.name}</span>
          <span className={"post-date"}>{date}</span>
        </div>
      </div>
      <p className={"post-content"}>{content}</p>
      <div className={"comments"}>
        <div className={"division"}></div>
        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
