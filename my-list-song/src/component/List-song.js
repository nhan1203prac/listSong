import { useContext, useEffect, useState } from "react"
import { Context } from "./context"
function ListSong(){
    const [idSong,setIdSong] = useState()
    const Song = useContext(Context)
    // console.log(Song);
    const handleSongID = (id)=>{
        setIdSong(id)
        Song.handlePlaySongId(id)
    }
    
    useEffect(()=>{
        setIdSong(Song.song.id)
    })
    return(
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full ">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[20%] ">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>


                    </tr>
                </thead>
                <tbody>
                    {Song.DataSong.map((item, index)=>(
                        <tr key={index} className={`bg-slate-800 h-12 text-gray-400 hover:bg-slate-600 hover:text-gray-400 cursor-pointer ${item.id === idSong && `text-teal-400 hover:text-teal-400`}`} onClick={()=>handleSongID(item.id)} >
                            <td className="text-center">{item.id + 1}</td>
                            <td>{item.name}</td>
                            <td className="text-center">{item.author}</td>
                            <td className="text-center"><a src={item.links}><i className="fa fa-download"></i></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListSong