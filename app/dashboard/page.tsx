import SearchBar from '../components/SearchBar'
import React from 'react'
import AnimeCard from '../components/AnimeCard'


async function getTrendingAnime(){
  const res = await fetch ('https://api.jikan.moe/v4/seasons/now')
  const data =  await res.json()
  return data.data
}








 async function Dashboard(){

  const trending = await getTrendingAnime()



  return (
    <div> 


      <div className="text-white mt-30 mb-30">
        <h1 className="text-5xl font-bold text-white " style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>All Your Anime. One Place.</h1>
        <p className="text-gray-400 p-4">Search over 18,000 anime and track your watching progress.</p>
        <SearchBar/>
      </div>



      

      <div>
        <h2 className="text-3xl  font-bold text-white style={{ fontFamily: 'Trebuchet MS, sans-serif' }}">Spring 2026 Hits:</h2>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-7 p-8 mt-0 max-w-7xl mx-auto">
        {trending.map((anime: any, index: number) => {
          return (
            <div key={index}>
            <AnimeCard
                image={anime.images.jpg.image_url}
                title={anime.title}
                rank={anime.rank}
                id={anime.mal_id}
                genres={anime.genres.map((g: any) => g.name)}
                   />
        </div>
          )
        })}
      </div>


    </div>
  )
}

export default Dashboard