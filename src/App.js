import { useState, useEffect } from 'react'

/* Movie List API */
/* returns year-based sorted array with movie information whose rating is greater than 8.5*/
/* https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year */

function App() {
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
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt="movie_img_alt" />
            <h3>{movie.title}</h3>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}

export default App
