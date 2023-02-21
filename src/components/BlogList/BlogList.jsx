import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import { useFetch } from "../../hooks";
import { useLocation, useParams } from "react-router-dom";
import "./index.css";

export default function BlogList() {
  const location = useLocation();
  const { id } = useParams();

  const { loading, data, error } = useFetch(
    `${process.env.REACT_APP_BASE_URL}${id === "all" ? "" : "?userId=" + id}`
  );

  if (error) {
    throw Error("Couldn't load the data from the server.");
  }

  return (
    <>
      {loading || !data ? (
        <div className="loader_spin"></div>
      ) : (
        <div className="blog__list">
          {data.map((blog) => (
            <BlogItem
              key={blog.id}
              postId={blog.id}
              title={blog.title}
              body={blog.body}
              userId={blog.userId}
            />
          ))}
        </div>
      )}
    </>
  );
}
