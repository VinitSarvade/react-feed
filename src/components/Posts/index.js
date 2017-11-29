import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import Post from './Post';

import './Posts.css';
import posts from '../../posts';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleUnLike = this.handleUnLike.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleRemoveBookmark = this.handleRemoveBookmark.bind(this);
  }

  handleLike({id, index, likes}) {
    let posts = Array.from(this.state.posts);
    posts[index] = Object.assign({}, posts[index], {likes: likes + 1, liked: true});
    this.setState({
      posts: posts
    })
  }

  handleUnLike({id, index, likes}) {
    let posts = Array.from(this.state.posts);
    posts[index] = Object.assign({}, posts[index], {likes: likes - 1, liked: false});
    this.setState({
      posts: posts
    })
  }

  handleBookmark({id, index}) {
    let posts = Array.from(this.state.posts);
    posts[index] = Object.assign({}, posts[index], {bookmarked: true});
    this.setState({
      posts: posts
    })
  }

  handleRemoveBookmark({id, index}) {
    let posts = Array.from(this.state.posts);
    posts[index] = Object.assign({}, posts[index], {bookmarked: false});
    this.setState({
      posts: posts
    })
  }

  render() {
    let { posts } = this.state;
    return (
      <div className="posts">
        {
          posts.map( (post, index) => {
            return (
              <LazyLoad once key={index} height={320} offset={320}>
                <Post
                  {...post}
                  key={index}
                  index={index}
                  handleLike={this.handleLike}
                  handleUnLike={this.handleUnLike}
                  handleBookmark={this.handleBookmark}
                  handleRemoveBookmark={this.handleRemoveBookmark} 
                />
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
