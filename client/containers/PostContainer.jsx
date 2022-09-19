import React from 'react';
import PostCreator from '../components/PostCreator.jsx';

const PostContainer = ({onFeedItemCreated}) => {
  return (
    <div className="postContainer">
      <button>Give</button>
      <PostCreator onFeedItemCreated={onFeedItemCreated}/>
    </div>
  );
};

export default PostContainer;
