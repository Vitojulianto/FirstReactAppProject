import React, { useEffect , useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Animedesc = () => {
  const { id } = useParams()
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await response.json();
      setDetails(data.data);
      console.log(data.data);
    }
    fetchAnimeDetails()
  }, [id])

  if (!details) {
    return <p className="text-center text-xl text-gray-600 mt-10">Loading...</p>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link 
        to="/anime" 
        className="text-blue-500 hover:underline text-sm mb-4 inline-block"
      >
        ← Go Back
      </Link>

      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
        <img 
          src={details.images.jpg.image_url} 
          alt={details.title} 
          className="w-full max-w-md mx-auto rounded-lg mb-6"
        />
        <p className="text-gray-700 leading-relaxed">{details.synopsis}</p>

        {details.trailer && details.trailer.url ? (
          <a 
            href={details.trailer.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Watch Trailer
          </a>
        ) : (
          <p className="text-gray-500 mt-4 italic">Trailer not available</p>
        )}
      </div>
    </div>
  )
}

export default Animedesc
