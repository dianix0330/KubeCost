import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import { useFetch } from "../../hooks";
import { useLocation, useParams, Link } from "react-router-dom";
import "./index.css";

export default function BlogContainer() {
  const { id } = useParams();
  const location = useLocation();
  const { title, body, userId } = location.state;

  const { loading, data, error } = useFetch(
    `${process.env.REACT_APP_BASE_URL}/${id}/comments`
  );

  return (
    <div className="blog__container">
      {loading || !data ? (
        <div className="spinner__container">
          <div className="loader_spinner"></div>
        </div>
      ) : (
        <>
          <div className="blog__content">
            <div className="blog__title">{title}</div>
            <div className="blog__body">{body}</div>
            <div className="blog__buttons">
              <Link className="button button--author" to={`/author/${userId}`} >Author's Blogs</Link>
              <Link className="button button--return" to={`/`}>Return</Link>
            </div>
          </div>
          <div className="blog__comments">
            {data.map((comment) => (
              <CommentItem
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
