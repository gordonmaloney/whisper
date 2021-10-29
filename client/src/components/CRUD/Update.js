import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updatePost } from "../../actions/posts";


export const Update = () => {



  const dispatch = useDispatch();

  const [updateData, setUpdateData] = useState(null);

  const posts = useSelector((state) => state.posts);

  const handleUpdate = (id, updatedPost) => {
    
    dispatch(updatePost(id, updatedPost));
  };

  return (
    <div>
    <input
        type="text"
        placeholder="update post"
        onChange={(e) =>
          setUpdateData({ ...updateData, postTitle: e.target.value })
        }
      />
      {posts.map((post) => (
        <p>
          {post.postTitle}{" "}
          <button onClick={() => handleUpdate(post._id, updateData)}>Update</button>
        </p>
      ))}
    </div>
  );
};
