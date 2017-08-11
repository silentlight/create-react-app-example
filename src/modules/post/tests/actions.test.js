import types from '../types'
import actions from '../actions';

describe('post actions', () => {

  it('fetchPostsRequest should create FETCH_POSTS_REQUEST action', () => {
    expect(actions.fetchPostsRequest()).toEqual({
      type: types.FETCH_POSTS_REQUEST,
    })
  });

  it('fetchPostsSuccess should create FETCH_POSTS_SUCCESS action', () => {

    const payload = { results: [{
      id: 1,
      title: 'Test title',
    }] };

    expect(actions.fetchPostsSuccess(payload)).toEqual({
      type: types.FETCH_POSTS_SUCCESS,
      payload,
    })
  });

  it('fetchPostsError should create FETCH_POSTS_ERROR action', () => {

    const error = 'Test error';

    expect(actions.fetchPostsError(error)).toEqual({
      type: types.FETCH_POSTS_ERROR,
      error,
    })
  });

});