import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Movie.module.css'

function Movie({
  detail,
  id,
  large_cover_image,
  medium_cover_image,
  title,
  summary,
  description_full,
  genres,
  year,
  rating,
  runtime,
  likecount,
  downloadcount,
}) {
  const DetailInfo = () => {
    return (
      <div className="detailInfo">
        <h3
          className={styles.movie__detail}
        >{`YEAR ${year} | RATING ${rating} | RUNTIME ${runtime}mins`}</h3>
        <h3
          className={styles.movie__detail}
        >{`LIKES ${likecount} | DOWNLOADS ${downloadcount}`}</h3>
      </div>
    )
  }
  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__img}
        src={detail ? large_cover_image : medium_cover_image}
        alt="movie_img_alt"
      />
      <h3 className={styles.movie__title}>
        {/* a tag refresh browser */}
        {/* <a href="/movie">{title}</a> */}
        {/* Link does NOT refresh browser */}
        {detail ? title : <Link to={`/movie/${id}`}>{title}</Link>}
      </h3>
      <p>{detail ? description_full : summary}</p>
      {detail ? <DetailInfo /> : null}
      <ul className={styles.movie__genres}>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  detail: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  large_cover_image: PropTypes.string,
  medium_cover_image: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  description_full: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  likecount: PropTypes.number,
  downloadcount: PropTypes.number,
}

export default Movie
