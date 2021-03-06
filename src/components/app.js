import React from 'react';
import {SearchBar} from './searchBar';
import youtube from '../apis/youtube';
import ImageList from './imageList';
import VideoDetail from './videoDetail';

export class App extends React.Component {
    state = { videos: [], selectedVideo: null};
    onTermSubmit = async (term) =>{
        //console.log(term);
      const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        //console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });

    }
    onVideoSelect = (video) => {
        //console.log('Video App!', video);
        this.setState({selectedVideo:  video});
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                        </div>
                    <div className="five wide column">
                    <ImageList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>                    
                    </div>
                </div>
                
            </div>
        )
    }
}
