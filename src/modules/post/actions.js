import types from './types';

const fetchPostsRequest = (payload) => {
  return {
    type: types.FETCH_POSTS_REQUEST,
    payload,
  };
};

const fetchPostsSuccess = (payload) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: payload,
  };
};

const fetchPostsError = (error) => {
  return {
    type: types.FETCH_POSTS_ERROR,
    error,
  };
};

export default {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
}