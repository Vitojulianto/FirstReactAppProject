import React, { useEffect , useState} from 'react'
import Navbar from '../Fragments/Navbar'
import SearchAnime from '../Fragments/SearchAnime'
import { Link } from 'react-router-dom'

const Anime = () => {
    const baseUrl = 'https://api.jikan.moe/v4'
    const [popularAnime, setPopularAnime] = useState([])

    useEffect(() => {
        const fetchPopularAnime = async () => {
            const response = await fetch(`${baseUrl}/top/anime?filter=favorite`)
            const data = await response.json()
            console.log(data.data)
            setPopularAnime(data.data)
        }
        fetchPopularAnime()
    }, [])

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <SearchAnime />
            <h2 className="text-4xl text-center text-indigo-600 mt-8 font-semibold">Popular Anime</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
                {popularAnime.map(anime => (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="anime-card bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                        <img 
                            src={anime.images.jpg.image_url} 
                            alt={anime.title} 
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{anime.title}</h3>
                        <p className="text-gray-500 mt-2">Rank: #{anime.rank}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Anime
