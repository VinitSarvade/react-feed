import React from 'react';
import Slider from 'react-slick';

const getImage = (image, title) => {
  return <img className="img-responsive" src={image} alt={title} />
}

const getCarousel = (images, title) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {
        images.map((image, index) => {
          return <img className="img-responsive" src={image} alt={title} key={index} />
        })
      }
    </Slider>
  )
}

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="media">
          <img src={props.avatar} className="avatar img-responsive" alt={props.username} />
          <div className="media__content">
            <h3>{props.username}</h3>
            <h4>{props.location}</h4>
          </div>
        </div>
      </div>
      <div className="post__media">
        { (props.images.length === 1) && getImage(props.images[0], props.title) }
        { (props.images.length > 1) && getCarousel(props.images, props.title) }
      </div>
      <div className="post__content">
        <p className="text-bold">{props.title}</p>
        <p>{props.description}</p>
      </div>
      <div className="post__actions">
        <i className="material-icons">share</i>
        { props.liked && <i className="material-icons red" onClick={() => props.handleUnLike(props) }>favorite</i> }
        { !props.liked && <i className="material-icons" onClick={() => props.handleLike(props) }>favorite_border</i> }
        <i className="material-icons">chat_bubble_outline</i>
        { props.bookmarked && <i className="material-icons float-right blue" onClick={() => props.handleRemoveBookmark(props) }>bookmark</i> }
        { !props.bookmarked && <i className="material-icons float-right" onClick={() => props.handleBookmark(props) }>bookmark_border</i> }
      </div>
      <div className="post__stats">
        <small className="text-light">{props.likes} Likes</small>
      </div>
    </div>
  )
}

export default Post;
