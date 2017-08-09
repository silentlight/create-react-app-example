import { fromJS } from 'immutable';

import types from "./types";

const initialState = fromJS({
  posts: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return state.set('posts', fromJS(action.payload.results));

    default:
      return state;
  }
}
