import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies?.nowPlayingMovies);
  const popular_movies=useSelector(store=>store.movies?.popularMovies);
  const topRated_movies=useSelector(store=>store.movies?.topRatedMovies);
  const upComing_movies=useSelector(store=>store.movies?.upComingMovies);
  if(!movies) return;
  if(!popular_movies) return;
  if(!topRated_movies) return;
  if(!upComing_movies) return;

  return (
    <div className='bg-black'>
        <div className='-mt-64 pl-12 relative z-20'>
        <MovieList title="Now Playing Movies" movies={movies} />
        <MovieList title="Top Rated Movies" movies={topRated_movies} />
        <MovieList title="Up Coming Movies" movies={upComing_movies} />
        <MovieList title="Popular Movies" movies={popular_movies} />
        </div>
    </div>
  )
}

export default SecondaryContainer;