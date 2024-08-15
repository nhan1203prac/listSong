import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Context } from './context';
import { useContext } from 'react';
function Playing(){
    const Songs = useContext(Context)
    // console.log(Songs.song);
    const handleNextClick = ()=>{
        Songs.handlePlaySongId(Songs.song.id+1)
      }
      const handlePreviousClick = ()=>{
        Songs.handlePlaySongId(Songs.song.id-1)
      }
    return(
        <div className='play-music'>
            <AudioPlayer
        className="play-music"
        src={Songs.song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleNextClick}

        onClickPrevious={handlePreviousClick}
       
      />
        </div>
    )
}
export default Playing