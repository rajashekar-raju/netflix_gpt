import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utils/moviesSlice';
import { options } from '../../utils/constants';


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const handlenowPlayingFunction = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
      } 
  
      useEffect(()=>{
        handlenowPlayingFunction();
      },[])
}

export default useNowPlayingMovies;