// stateless functional component
import React from "react";

function Comment({ data }) {
  const { author, content } = data;

  const avatarStyle = {
    backgroundImage: `url(${author.avatar})`,
    width: "50px",
    height: "50px",
    backgroundSize: "cover",
    borderRadius: "50px"
  };

  return (
    <div className={"comment"}>
      <div style={avatarStyle}></div>
      <div className={"comment-content"}>
        <strong>{author.name} </strong>
        {content}
      </div>
    </div>
  );
}

export default Comment;
