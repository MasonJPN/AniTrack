'use client'

import React from 'react'
import {useState} from "react"








const SearchBar = () => {
const [query, setQuery] = useState("")
const [results, setResults] = useState([])

async function SearchAnime(){
  const res = await fetch (`https://api.jikan.moe/v4/anime?q=${query}&limit=5`)
  const data = await res.json()
  return setResults(data.data)
}





  return (
    <div>

    <input 
        className="w-full max-w-2xl px-6 py-4 rounded-xl bg-[#0f1623] border border-[#1e2d45] text-white focus:outline-none"
        value={query}
        onChange={(e) => {setQuery(e.target.value); SearchAnime()}}
          
        placeholder="Search Anime..."
    />

    {results && results.length > 0 && (
      <div className="bg-white border border-[#1e2d45] rounded-xl  mt-1 max-w-2xl ">
        {results.map((anime: any, index: number) => {
          return (
            <div key={index} className="px-4 py-3 hover:bg-gray-300 cursor-pointer text-black text-sm border-b border-[#1e2d45] last:border-0 rounded-xl">
               {anime.title}
            </div>
          )
        })}
      </div>

    )}


    </div>
  )
}

export default SearchBar