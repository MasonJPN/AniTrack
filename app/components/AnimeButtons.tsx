
'use client'
import { useWatched } from "../context/AnimeContext"

export default function AnimeButtons({ anime }: { anime: any }) {
    const { setWatched, setWatchLater } = useWatched()

    function handleWatched() {
        setWatched((prev: any[]) => [...prev, anime])
    }

    function handleWatchLater() {
        setWatchLater((prev: any[]) => [...prev, anime])
    }

    return (
        <div className="flex gap-4 mt-4">
            <button onClick={handleWatchLater} className="bg-[#00e5ff] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                Watch Later
            </button>
            <button onClick={handleWatched} className="bg-[#1e2d45] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2a3d55] transition-colors">
                Watched
            </button>
        </div>
    )
}