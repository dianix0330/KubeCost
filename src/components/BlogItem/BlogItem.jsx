import React from "react";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import "./index.css";

export default function BlogItem({ title, postId, body, userId }) {
  return (
    <Link
      className="blog__item"
      to={`/${postId}`}
      state={{ title, body, userId }}
    >
      <div className="blog__item__title">
        <Avatar title={userId} />
        {title}
      </div>
      <p className="blog__item__body">{body}</p>
    </Link>
  );
}
