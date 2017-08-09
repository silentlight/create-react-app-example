import { createSelector } from 'reselect';

const sliceRoot = () => (state) => {
  return state.get('post');
};

const getPosts = () => createSelector(
  sliceRoot(),
  (rootSelector) => rootSelector.get('posts')
);

export default {
  getPosts,
};
