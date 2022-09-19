import React from 'react';
import PostCreator from '../components/PostCreator.jsx';
import { useState } from 'react';


const PostContainer = ({ onFeedItemCreated }) => {
  //function using hooks that will allow for conditional rendering of the PostCreator component when state is set to true
  const [openPostCreator, setOpenPostCreator] = useState(false);
  const onGive = () => {
    setOpenPostCreator(true);
  };

  const onCancel = () => {
    setOpenPostCreator(false);
  };

  return (

    <div className="postContainer">
      <button
        className="openPostCreator"
        onClick={openPostCreator ? onCancel : onGive}
      >
        {openPostCreator ? 'Cancel' : 'Give'}
      </button>
      {openPostCreator && (
        <PostCreator
          closePostCreator={onCancel}
          onFeedItemCreated={onFeedItemCreated}
        />
      )}
    </div>
  );
};

export default PostContainer;
