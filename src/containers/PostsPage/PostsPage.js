import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  postOperations,
  postSelectors,
} from 'modules/post';

import {
  Post,
} from 'components';

export class PostsPage extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {

    return (
      <div>
        <h1>Posts Page</h1>
        {this.props.posts.map(post =>
          <Post key={post.get('id')} post={post} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: postSelectors.getPosts()(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPosts: () => dispatch(postOperations.fetchPostsRequest()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);