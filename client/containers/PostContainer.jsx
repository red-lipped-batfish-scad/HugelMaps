import React from 'react';
import PostCreator from '../components/PostCreator.jsx';

const PostContainer = () => {
  return (
    <div className="postContainer">
      <button>Give</button>
      <PostCreator />
    </div>
  );
};

export default PostContainer;
