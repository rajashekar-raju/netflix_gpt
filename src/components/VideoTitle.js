import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute p-5 top-[109px] bg-gradient-to-r text-white from-black w-screen aspect-video'>
        <div>
        <h1 className='text-3xl font-bold mb-2'>{title}</h1>
        <p className='w-1/4 text-lg'>{overview}</p>
        </div>
        <div className='mt-3'>
            <button className='bg-gray-700 py-3 px-8 rounded-lg text-white mr-2 bg-opacity-70'>Play</button>
            <button className='bg-gray-700 py-3 px-8 rounded-lg text-black bg-opacity-70'>More info?</button>
        </div>
    </div>
  )
}

export default VideoTitle