async function getAnime(id: string) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  const data = await res.json()
  return data.data
}

export default async function AnimePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const anime = await getAnime(id)

  return (
    <div className="p-8 max-w-5xl mx-auto">

      <div className="flex gap-8 mt-20">
        <div>
          <img src={anime.images.jpg.large_image_url} className="border-2 border-[#1e2d45] rounded-xl w-56" />
        </div>

        <div className="text-white flex flex-col gap-4 justify-center">
          <h1 className="text-4xl font-bold">{anime.title}</h1>
          <h2 className="text-gray-400">Rank #{anime.rank}</h2>
          <div className="flex gap-4 mt-4">
            <button className="bg-[#00e5ff] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
              Watch Later
            </button>
            <button className="bg-[#1e2d45] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2a3d55] transition-colors">
              Watched
            </button>
          </div>
        </div>
      </div>

      <div className="text-white mt-10 flex flex-col gap-4">
        <p className="border-2 border-[#1e2d45] rounded-xl w-fit py-2 px-4 text-sm text-gray-400">
          {anime.genres.map((g: any) => g.name).join(' · ')}
        </p>

        <div className="border-2 border-[#1e2d45] rounded-xl p-5">
          <p className="text-lg font-semibold mb-2">Synopsis</p>
          <p className="text-gray-400 leading-relaxed">{anime.synopsis}</p>
        </div>
      </div>

    </div>
  )
}