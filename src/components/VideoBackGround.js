import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailar from './customHooks/useMovieTrailar';
const VideoBackGround = ({movie_id}) => {

    const trailer_key = useSelector(store=>store.movies?.trailarVideo);

    useMovieTrailar(movie_id);

  return (
    <div>
        <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailer_key?.key+"?autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
        </iframe>
    </div>
  )
}

export default VideoBackGround