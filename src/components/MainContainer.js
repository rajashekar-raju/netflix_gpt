import React, { useEffect } from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import { options } from '../utils/constants'
import { addTrailarVideo } from '../utils/moviesSlice'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;//why we wrote this not understood........
    const first_movie = movies[0];
    const {original_title,overview,id}=first_movie;

    
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround movie_id={id}/>
    </div>
  )
}

export default MainContainer