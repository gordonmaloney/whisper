import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

export const Read = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts.map((post) => (
        <p>{post.postTitle}</p>
      ))}
    </div>
  );
};
