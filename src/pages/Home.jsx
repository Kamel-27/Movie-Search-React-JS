import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const api_url = "http://www.omdbapi.com/?apikey=bf67a7f4";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovie("Iron Man");
  }, []);

  return (
    <div className="container-fluid movie-app">
      <h1 className="app-title">IMDb Movie Search</h1>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearch={searchMovie}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
