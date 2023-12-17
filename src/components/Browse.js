import React, { useEffect } from 'react'
import netflix_logo from "./images/Netflix_Logo_PMS.png"
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import useNowPlayingMovies from './customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            navigate("/");
            dispatch(removeUser());
        })
        .catch((error) => {
        navigate("/error");
    });
  }
    useNowPlayingMovies();



  return (
    <div>
        <div className='flex items-center justify-between absolute gap-[1000px]'>
             <img  className="w-44" src={netflix_logo} alt="logo" />  
             <button onClick={handleSignOut} className='bg-red-700 h-10 px-3 rounded-lg text-white'>Sign out</button> 
             {/* <p className='text-black cursor-pointer'>{user.email}</p> */}
        </div>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse;