'use client'

import React from 'react'
import {useState} from "react"





const SearchBar = () => {


const [query, setQuery] = useState("")

  return (
    <div>

    <input 
        className="w-full max-w-2xl px-6 py-4 rounded-xl bg-[#0f1623] border border-[#1e2d45] text-white focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Anime..."
    />

    </div>
  )
}

export default SearchBar