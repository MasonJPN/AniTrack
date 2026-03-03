'use client'

import React from 'react'
import { useWatched } from '../context/AnimeContext'




const WatchLater = () => {

const {watchLater} = useWatched()


  return (
    <div>

    {watchLater.map((anime, index) => {
      return (
        <div key={index}>
           <img src={anime.images.jpg.image_url}></img>
        </div>
      )
    })}

    </div>
  )
}

export default WatchLater