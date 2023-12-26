import React, { useEffect, useState } from 'react'
import Header from './Header'
import background from "./images/background.jpeg"
import plus_sign from "./images/plus_sign.svg"
import LoginPage from './LoginPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { removeUser } from '../utils/userSlice'

const Body = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[])

  return (
    <div className='bg-gradient-to-b from-black'>
        <img className='mb-3' src={background} alt="background" />
        <Header/>
        <LoginPage/>
    </div>
  )
}

export default Body