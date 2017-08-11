import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import { API_URL } from 'config/constants';
import { setupOperationsTesting } from 'utils/testing';
import { parseResponse } from 'utils/request';

import operations from '../operations';
import actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

setupOperationsTesting(API_URL);

describe('post operations', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_TODOS_SUCCESS when fetching posts has been done', () => {
    const response = { results: [{ id: 1, title: 'Test title '}] };

    nock(API_URL)
      .get('/user/posts')
      .reply(200, response);

    const expectedActions = [
      actions.fetchPostsRequest(),
      actions.fetchPostsSuccess(response),
    ];
    const store = mockStore(fromJS({ posts: [] }));

    return store.dispatch(operations.fetchPostsRequest()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})