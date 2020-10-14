import React, { Component } from 'react';
import './App.css';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearchSubmit('vim')
  }

  onSearchSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
        type: 'video'
      }
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  onVideoSelect = video => {
    // console.log('selectedVideo: ', video);
    this.setState({
      selectedVideo: video
    });
  }

  render() {
    return (
      <div className="app ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
