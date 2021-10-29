import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/posts";

export const Delete = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      {posts.map((post) => (
        <p>
          {post.postTitle}{" "}
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};
