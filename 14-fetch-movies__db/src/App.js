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
      setIsLoading(false);
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
        <p>redux vs react-context</p>
        <p>react contest is not optimize for high-frequency state changes</p>
        <p>Action is sent and dispatched from the view which are payload created stire the info of username and info like type time of coordinates</p>
        <p>redux is pattern and libarary for managing and updating applixation status using events called actions</p>
        <p>it serves centralized store for state that needs to be used across your entire application 
          action is plain object have type field tells what to do dont tell how to do 
          action creator are resubale and portable 
        </p>
      </section>
    </>
  );
}

export default App;
