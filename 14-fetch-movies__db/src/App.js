import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler(){
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
      const transformedmovies = data.results.map((movieData)=>{
        return{
          id:movieData.episode_id,
          title : movieData.title,
          openingText : movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
      })
      setMovies(transformedmovies);
      setIsLoading(false)
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  );
}

export default App;
