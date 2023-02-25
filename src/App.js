import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const OMDb_APIKEY = "90886304";
const OMDB_API = "http://www.omdbapi.com?apikey=90886304";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);

  const searchMovies = async (title) => {
    const res = await fetch(`${OMDB_API}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("claim");
  }, []);

  return (
    <div className="app">
      <h1>MOVIES</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(search)}}></img>
      </div>
      {movies.length > 0 ? (
        <>
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie_eg={movie} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div>aa</div>
        </>
      )}
    </div>
  );
};
export default App;
