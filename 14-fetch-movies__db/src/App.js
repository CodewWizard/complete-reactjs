import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler(){
    fetch('https://swapi.dev/api/films').then((response)=>{
      return response.json();
    }).then((data)=>{
      const transformedmovies = data.results.map((movieData)=>{
        return{
          id:movieData.episode_id,
          title : movieData.title,
          openingText : movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
      })
      setMovies(transformedmovies);
    })
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
