import React from 'react';
import ImageItem from './imageItem';

const ImageList = ({videos, onVideoSelect})=>{
    const renderedList =  videos.map((video) => {
        return (                         
            <ImageItem onVideoSelect= {onVideoSelect} key={video.id.videoId} video = {video} />            
        );
    });
    return (<div className="ui relaxed divided list">{renderedList} </div>);
    
}
export default ImageList;