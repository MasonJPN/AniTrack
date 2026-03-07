'use client'
import { useWatched } from "../context/AnimeContext"

export default function WatchedAnime(){
const {watched} = useWatched()

    return (

        <div className="flex items-center gap-2 text-sm text-gray-400">
  <span className="text-[#00e5ff] font-bold">{watched.length}</span> anime watched
</div>
    )
}