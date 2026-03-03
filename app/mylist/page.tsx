'use client'

import React from 'react'
import { useWatched } from '../context/AnimeContext'
import AnimeCard from '../components/AnimeCard'




export default function MyList(){

const {watched, removeWatched} = useWatched()



  return(
    <div>
        <div className="mt-20 px-8">
            <h2 className="font-extrabold text-5xl text-white" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
                My Watched Anime
            </h2>
             <p className="text-gray-400 text-xl mt-2">
             <span className="text-[#00e5ff] font-bold">{watched.length}</span> anime watched
            </p>
          <div className="border-b border-[#1e2d45] mt-6" />
        </div>



    {watched.map((anime, index) => {
      return(
        <div key={index} className="flex items-center gap-4 p-4 bg-[#0f1623] border border-[#1e2d45] rounded-xl mx-8 mt-4">
           <img src={anime.images.jpg.image_url} className="w-16 h-20 object-cover rounded-lg" />
            <h2 className="text-white">{anime.title}</h2>
            <p className="text-gray-400">Score ⭐ {anime.score}</p>
           <p className="text-gray-400">Rank # <span className="text-[#00e5ff] font-bold">{anime.rank}</span></p>
           <p className="text-gray-400">{anime.episodes} episodes</p>
          <button onClick={() => removeWatched(anime.mal_id)} className="bg-red-600 hover:bg-red-700 transition-colors ml-auto text-l font-bold h-10 w-20 rounded-xl text-white">
            Remove
          </button>
        </div>
      )
    })}
    
    
    </div>
  )
}