import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {

  // console.log(movies);
  if(movies!=null){
    return (
      <div>
        <h1 className='text-lg font-bold ml-5 text-white'>{title}</h1>
          <div className='flex overflow-x-auto ml-6'>
              {movies.map(movie=><MovieCard key={movie.id} poster={movie.poster_path}/>)}
          </div>
       </div>
    )
  }
  else{
    return (
      <div>please wait</div>
    )
  }
}

export default MovieList