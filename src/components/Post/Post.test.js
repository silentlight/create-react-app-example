import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Post from './Post';

const post = fromJS({
  title: "Test post",
});

describe('Post', () => {

  const component = shallow(<Post post={post}/>);

  it('renders and matches the snapshot', () => {
    const tree = renderer.create(<Post post={post} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the title', () => {
    expect(component.find('h3').text()).toEqual(post.get('title'));
  });

});