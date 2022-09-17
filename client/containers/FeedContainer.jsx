import React from 'react';
import FeedItem from '../components/FeedItem.jsx'

//the feed should have scrolling
//feed items should render conditionally out of an array of feed items as they are generated
const FeedContainer = () => {
    return (
        <div className='feedContainer'>
        <FeedItem/>
        </div>
    )
}

export default FeedContainer;
