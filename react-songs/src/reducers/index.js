import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'song1', duration: '4:05'},
    {title: 'song2', duration: '2:35'},
    {title: 'song3', duration: '1:45'},
    {title: 'song4', duration: '5:26'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
