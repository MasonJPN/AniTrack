import AnimeCard from "../components/AnimeCard"


async function getTopAnime() {
  const res = await fetch('https://api.jikan.moe/v4/top/anime')
  const data = await res.json()
  return data.data
}

export default async function TopRated() {
  const animes: any[] = await getTopAnime()

  return (
    <div className="mr-7" >
    <h1 className="text-white font-extrabold mt-40  text-5xl "style={{ fontFamily: 'Trebuchet MS, sans-serif' }}> THIS WEEKS TOP RATED ANIME:</h1>
    <p className="text-gray-400 text-lg mt-1">The highest rated anime based on MAL scores</p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 p-8 mt-20 max-w-7xl mx-auto">
      
      {animes.map((anime: any, index: number) => (
        <AnimeCard
        key={index}
        image={anime.images.jpg.image_url}
        title={anime.title}
        rank={anime.rank}
        id={anime.mal_id}
        genres={anime.genres.map((g: any) => g.name)}
        />
      ))}
    </div>
    </div>
  )
}