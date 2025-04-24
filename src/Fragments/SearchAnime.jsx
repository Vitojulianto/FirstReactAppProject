import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { Link } from 'react-router-dom';

const SearchAnime = () => {
  const [search, setSearch] = useState('');
  const [anime, setAnime] = useState([]);
  const baseUrl = 'https://api.jikan.moe/v4';

  const handleAdd = async () => {
    const response = await fetch(`${baseUrl}/anime?q=${search}`);
    const data = await response.json();
    setAnime(data.data);
    localStorage.setItem('animeDetails', JSON.stringify(data.data));
    localStorage.setItem('searchAnime', search);
  };

  useEffect(() => {
        const savedDetail = localStorage.getItem('animeDetails');
        const savedSearch = localStorage.getItem('searchAnime');
        if(savedDetail){
            setAnime(JSON.parse(savedDetail));
        }
        if(savedSearch){
            setSearch(savedSearch);
        }
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">Search Your Favorite Anime</h1>
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8">
          <Input
            type="text"
            placeholder="Enter the anime name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-2 border-purple-300 p-2 rounded w-full sm:w-2/3"
          />
          <Button onClick={handleAdd} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow">
            Search
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {anime.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-md font-semibold text-purple-700">{anime.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAnime;
