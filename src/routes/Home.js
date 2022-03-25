import { useState, useEffect } from 'react'

import Movie from '../components/Movie'

/* Movie List API */
/* returns year-based sorted array with movie information whose rating is greater than 8.5*/
/* https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year */

function Home() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  /* fetch data from API using async-awiat */
  const getMovies = async () => {
    const rateFloor = '8.5'
    const sorting = 'year'
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rateFloor}&sort_by=${sorting}`,
    )
    const json = await response.json()
    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovies()
  }, [])
  console.log(movies)
  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            detail={false}
            id={movie.id}
            medium_cover_image={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  )
}

export default Home
