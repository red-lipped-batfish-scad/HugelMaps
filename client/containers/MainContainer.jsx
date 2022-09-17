import React from 'react';
import PostContainer from './PostContainer.jsx';
import FeedContainer from './FeedContainer.jsx';

//stateful container, makes a get request when the component mounts to access database to populate the feedcontainer
    //on rerenders/componentdidupdate will make additional get requests

const MainContainer = () => {
    return (
        <div className="mainContainer">
        <h1>Hugelmaps</h1>
        <PostContainer/>
        <FeedContainer/>
        </div>
    );
};

export default MainContainer;