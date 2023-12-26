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
import usePopularMovies from './customHooks/usePopularMovies';
import useTopRatedMovies from './customHooks/useTopRatedMovies';
import useUpComingMovies from './customHooks/useUpComingMovies';
import Header from "./Header";

const Browse = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            // navigate("/");
            // dispatch(removeUser());
        })
        .catch((error) => {
        // navigate("/error");
    });
  }
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        
    </div>
  )
}

export default Browse;