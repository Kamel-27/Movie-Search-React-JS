import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const api_url = "http://www.omdbapi.com/?apikey=bf67a7f4";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`${api_url}&i=${id}&plot=full`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container-fluid">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <p>
        <strong>Rated:</strong> {movie.Rated}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>IMDB Rating:</strong> {movie.imdbRating}
      </p>
    </div>
  );
}

export default MovieDetails;
