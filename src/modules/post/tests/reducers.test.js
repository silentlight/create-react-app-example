import { fromJS } from 'immutable';

import reducer from '../reducers';
import actions from '../actions';

describe('post reducer', () => {

  const initialState = fromJS({
    posts: [],
  });

  const posts = {
    results: [{
      id: 1,
      title: 'Title example'
    }]
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should handle FETCH_POSTS_SUCCESS', () => {
    expect(
      reducer(initialState, actions.fetchPostsSuccess(posts)).toJS()
    ).toEqual({ posts: posts.results })
  })

});