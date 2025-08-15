import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const openInNewTab = (e) => {
    e.preventDefault();
    window.open(`/movie/${movie.imdbID}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="movie-card">
      <a href={`/movie/${movie.imdbID}`} onClick={openInNewTab}>
        <img src={movie.Poster} alt={movie.Title} />
      </a>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
