import React from 'react';

const FeedItem = ({ post, onFeedItemDeleted }) => {
  const deletePost = (event) => {
    fetch(`feed/delete/:${post.feed_id}`)
      .then(console.log('listing deleted'))
      .then((res) => res.json())
      .then((data) => onFeedItemDeleted(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="feedItem">
      <button type="button" className="deletePost" onClick={deletePost}>
        Delete
      </button>
      <h3>Listing</h3>
      <p>post.material</p>
      <p>post.detail</p>
      <p>post.quantity</p>
      <p>post.location</p>
      <p>post.contact</p>
      <p>post.date</p>
    </div>
  );
};

export default FeedItem;
