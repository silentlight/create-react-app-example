import { fromJS } from 'immutable';

import reducer from '../reducers';
import selectors from '../selectors';

describe('post selectors', () => {

  const state = fromJS({
    post: {
      posts: [{
        id: 1,
        title: 'Title example',
      }],
    }
  });

  describe('getPosts selector', () => {
    it('should return all posts', () => {
      expect(selectors.getPosts()(state)).toEqual(state.getIn(['post', 'posts']));
    });

  });

});
