import React from 'react';
import FeedItem from '../components/FeedItem.jsx';

//the feed should have scrolling
//feed items should render conditionally out of an array of feed items as they are generated

//use map to render each feed item
const FeedContainer = ({ feedItems, onFeedItemDeleted }) => {
  // const reversedFeedItems = feedItems.reverse()
  return (
    <div className="feedContainer">
      {feedItems.map((el, idx) => {
        return <FeedItem post={el} key={idx} onFeedItemDeleted={onFeedItemDeleted}/>;
      })}
    </div>
  );
};

export default FeedContainer;
