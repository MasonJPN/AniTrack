import React from 'react'
import Link from "next/link"
type AnimeCardProps = {
    title: string;
    image: string;
    id: number;
    rank: number;
    genres: string[];

}




const AnimeCard = ({title, image, rank, genres, id}: AnimeCardProps) => {
  return (
    <Link href={`/anime/${id}`}>
    <div className="bg-[#0f1623] text-gray-500 border border-[#1e2d45] rounded-xl overflow-hidden hover:border-[#00e5ff]/30 transition-colors cursor-pointer ">
        <img src={image} alt={title} className="w-full md:h-52 object-cover" />
        <div className="p-3 flex flex-col gap-1">
            <p className="text-white text-sm font-semibold truncate">{title}</p>
            <p className="text-xs">{genres.join(' · ')}</p>
            <span className="text-amber-300 text-xs">Rank #{rank}</span>
        </div>
    </div>
    </Link>
  )
}

export default AnimeCard