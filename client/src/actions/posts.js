import * as api from "../api";
import { FETCH, CREATE, UPDATE, DELETE } from './ActionTypes'


export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    console.log("action, ", post)

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({type: DELETE, payload: id})
  } catch (error) {
    console.log(error);
  }
};