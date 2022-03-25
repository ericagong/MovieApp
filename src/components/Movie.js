import PropTypes from 'prop-types'

function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt="movie_img_alt" />
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
