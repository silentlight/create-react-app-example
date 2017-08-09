import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Post component
 */
class Post extends PureComponent {
  render() {
    const { post } = this.props;

    return (
      <div>
        <h3>{post.get('title')}</h3>
      </div>
    );
  }
}

Post.propTypes = {
  /** Callback to be run when form submits */
  post: PropTypes.object.isRequired,
};

export default Post