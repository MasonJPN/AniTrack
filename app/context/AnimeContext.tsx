'use client'

import {useState, useContext, createContext} from "react"


const WatchedContext = createContext(null);


export function WatchedProvider({children}){
    const [watched, setWatched] = useState([])
    const [watchLater, setWatchLater] = useState([])


    function removeWatched(id: number){
        setWatched((prev) => prev.filter((anime) => anime.mal_id !== id))

    }


    return (
        <WatchedContext.Provider value={{watched, setWatched, watchLater, setWatchLater, removeWatched}}>
            {children}
        </WatchedContext.Provider>
    )
}

export function useWatched(){
    return useContext(WatchedContext)
}