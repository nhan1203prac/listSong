import './App.css';
import DetailSong from './component/Detail-song';
import Navbar from './component/Navbar';
import ListSong from './component/List-song';
import Playing from './component/Playing';
import { Context } from './component/context';
import DataSong from "./component/Song.json"
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(DataSong[0])
  const handlePlaySongId = (id)=>{
    let isHasValue = DataSong.find(item=>item.id === id)
    if(isHasValue == null)
      setSong(DataSong[0])
    else 
      setSong(isHasValue)

  }
  return (
   <Context.Provider value={{DataSong,song, handlePlaySongId}}>
      <div className="App h-[100vh]">
        <Navbar/>
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
            <DetailSong/>
            <ListSong/>
        </div>
        <Playing/>
      </div>
   </Context.Provider>
  );
}

export default App;
