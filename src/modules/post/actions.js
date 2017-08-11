import types from './types';

const fetchPostsRequest = () => {
  return {
    type: types.FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (payload) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload,
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