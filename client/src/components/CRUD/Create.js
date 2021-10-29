import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from '../../actions/posts'

export const Create = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

  return (
    <div>
      <input
        type="text"
        placeholder="new post"
        onChange={(e) =>
          setPostData({ ...postData, postTitle: e.target.value })
        }
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
