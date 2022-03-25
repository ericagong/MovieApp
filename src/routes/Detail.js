import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Movie from '../components/Movie'

/* Movie API */
/* return information of movie with matching id */
/* https://yts.mx/api/v2/movie_details.json?movie_id=${id} */

function Detail() {
  const params = useParams()
  const id = params.id
  console.log(id)
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const getMovieDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
    )
    const json = await response.json()
    setMovie(json.data.movie)
    setLoading(false)
  }
  useEffect(() => {
    getMovieDetail()
  }, [])
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <Movie
          detail={true}
          id={movie.id}
          large_cover_image={movie.large_cover_image}
          title={movie.title}
          description_full={movie.description_full}
          genres={movie.genres}
          year={movie.year}
          rating={movie.rating}
          runtime={movie.runtime}
          likecount={movie.like_count}
          downloadcount={movie.download_count}
        />
      )}
    </div>
  )
}

export default Detail
