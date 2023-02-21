import React from "react";
import "./index.css";

export default function CommentItem({ name, email, body }) {
  return (
    <div className="blog__comment">
      <h4 style={{ textTransform: "uppercase" }}>{name}</h4>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
}
