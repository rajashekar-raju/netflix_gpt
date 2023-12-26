import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpComingMovies } from '../../utils/moviesSlice';
import { options } from '../../utils/constants';


const useUpComingMovies = () => {
    const dispatch = useDispatch();

    const handleUpComingMoviesFunction = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results))
      } 
  
      useEffect(()=>{
        handleUpComingMoviesFunction();
      },[])
}

export default useUpComingMovies;