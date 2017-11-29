import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import Post from './Post';

import './Posts.css';
import posts from '../../posts';

export default class Posts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="posts">
        {
          posts.map( post => {
            return (
              <LazyLoad once>
                <Post {...post} key={post.id} />
              </LazyLoad>
            )
          })
        }
      </div>
    )
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  video: PropTypes.object,
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  description: PropTypes.string,
};

Post.defaultProps = {
  avatar: 'https://tracker.moodle.org/secure/useravatar?size=small&avatarId=17380',
  location: null,
  images: null,
  video: null,
  likes: 0,
  comments: null,
  title: null,
  description: null,
};
