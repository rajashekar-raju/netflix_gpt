import React from 'react'
import { IMG_URL } from '../utils/constants'
const MovieCard = ({poster}) => {
  return (
    <div>
      <div className='mr-2 w-52'>
        <img className='cursor-pointer' src={IMG_URL+poster} alt="moviecard" />
      </div>
    </div>
  )
}

export default MovieCard;