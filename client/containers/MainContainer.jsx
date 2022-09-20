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

  const onFeedItemDeleted = (feed) => {
    setFeedItems(feed);
  };

  useEffect(() => {
    fetch('/feed')
      .then((res) => res.json())
      .then((data) => setFeedItems(data));
  }, []);

  return (
    <div>
      {/* <h1 className='landingHeader'>Hugelmaps</h1> */}
      <div className="mainContainer">
        <PostContainer onFeedItemCreated={onFeedItemCreated} />
        {feedItems ? (
          <FeedContainer
            feedItems={feedItems}
            onFeedItemDeleted={onFeedItemDeleted}
          />
        ) : (
          <h1>There are no posts yet</h1>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
