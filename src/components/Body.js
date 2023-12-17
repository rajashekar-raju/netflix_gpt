import React, { useEffect, useState } from 'react'
import Header from './Header'
import background from "./images/background.jpeg"
import plus_sign from "./images/plus_sign.svg"
// import { onAuthStateChanged } from "firebase/auth";
// import {auth} from "../utils/firebase"
// import { useDispatch } from 'react-redux';
// import {addUser, removeUser } from '../utils/userSlice';
// import { useNavigate } from 'react-router-dom';

const Body = () => {

    const [showdata,setShowData]=useState(false)
    const [second,setSecond]=useState(false)
    const [third,setThird]=useState(false)
    const [fourth,setFourth]=useState(false)
    const [fifth,setFifth]=useState(false)
    const [sixth,setSixth]=useState(false)

   
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  

    

   const showInfo = () => {
        setShowData(!showdata);
    }
    const showSecond = () => {
        setSecond(!second)
    }
    const showThird = () => {
        setThird(!third)
    }
    const showFouth = () => {
        setFourth(!fourth)
    }
    const showFifth = () => {
        setFifth(!fifth)
    }
    const showSixth = () => {
        setSixth(!sixth) 
    }

    

    

  return (
    <div className='bg-black'>
        <img className='bg-contain h-[100vh] w-[100vw] mb-3' src={background} alt="background" />
        <Header/>
        <hr className='mb-3 text-5xl border-gray-700 border-4'/>
        <div>
            <h1 className='text-5xl font-bold text-white ml-96 mb-3'>Frequently Asked Questions</h1>
            <div className='cursor-pointer text-white max-w-[1000px] mx-auto px-3 py-4 text-xl bg-gray-600 mb-3' onClick={showInfo}>
                <div className='flex justify-between '>
                What is Netflix
                <img src={plus_sign} alt="" />
                </div>
               {showdata && <div>
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
                </div>}
            </div>
            <div className='cursor-pointer text-white max-w-[1000px] mx-auto px-3 py-4 text-xl bg-gray-600 mb-3' onClick={showSecond}>
                <div className='flex justify-between '>
                What is Netflix
                <img src={plus_sign} alt="" />
                </div>
               {second && <div>
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
                </div>}
            </div>
            <div className='cursor-pointer text-white max-w-[1000px] mx-auto px-3 py-4 text-xl bg-gray-600 mb-3' onClick={showThird}>
                <div className='flex justify-between '>
                What is Netflix
                <img src={plus_sign} alt="" />
                </div>
               {third && <div>
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
                </div>}
            </div>
            <div className='cursor-pointer text-white max-w-[1000px] mx-auto px-3 py-4 text-xl bg-gray-600 mb-3' onClick={showFouth}>
                <div className='flex justify-between '>
                What is Netflix
                <img src={plus_sign} alt="" />
                </div>
               {fourth && <div>
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
                </div>}
            </div>
            <div className='cursor-pointer text-white max-w-[1000px] mx-auto px-3 py-4 text-xl bg-gray-600 mb-3' onClick={showFifth}>
                <div className='flex justify-between '>
                What is Netflix
                <img src={plus_sign} alt="" />
                </div>
               {fifth && <div>
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
                </div>}
            </div>
            <div className='cursor-pointer text-white max-w-[1000px] mx-auto px-3 py-4 text-xl bg-gray-600 mb-3' onClick={showSixth}>
                <div className='flex justify-between '>
                What is Netflix
                <img src={plus_sign} alt="" />
                </div>
               {sixth && <div>
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
                </div>}
            </div>
        </div>
        <hr className='mb-3 text-5xl border-gray-700 border-4 mt-5'/>
        <p className='mb-3 text-2xl text-white ml-96'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='ml-[500px] mb-10 '>
                <input className='px-4 py-2 mr-2' type="email" placeholder='enter email'/>
                <button className='bg-[#e50914] text-white rounded-lg px-4 py-2'>Get Started</button>
        </div>
        <hr className='mb-3 text-5xl border-gray-700 border-4'/>

    </div>
  )
}

export default Body