import React, { useState, useEffect } from 'react';
import PostContainer from './PostContainer.jsx';
import FeedContainer from './FeedContainer.jsx';

//stateful container, makes a get request when the component mounts to access database to populate the feedcontainer
//on rerenders/componentdidupdate will make additional get requests

const MainContainer = () => {
  const [feedItems, setFeedItems] = useState(null);

  const onFeedItemCreated = (feedItem) => {
    setFeedItems([feedItem, ...feedItems]);
  };

  return (
    <div className="mainContainer">
      <h1>Hugelmaps</h1>
      <PostContainer onFeedItemCreated={onFeedItemCreated} />
      {feedItems ? (
        <FeedContainer feedItems={feedItems} />
      ) : (
        <h1>There are no posts yet</h1>
      )}
    </div>
  );
};

export default MainContainer;
