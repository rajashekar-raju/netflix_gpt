import React, { useState } from 'react'
import netflix_logo from "./images/Netflix_Logo_PMS.png"
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {

    const user = useSelector(store => store.user);
    // console.log(user);

    const navigate = useNavigate();

    const [showGptPage,setShowGptPage]=useState(false);

    const movetoLoginPage = () => {
        signOut(auth).then(() => {
            // navigate("/");
        }).catch((error) => {
          // navigate("/error")
      });
    }

    const showGptInfo = () => {
      setShowGptPage(!showGptInfo);
    }

  return (
    <div className='absolute bg-gradient-to-b from-black px-8 py-4 w-full top-0 flex justify-between'>
        <div className='flex justify-between items-center gap-[1000px] '>
            <img  className="w-44" src={netflix_logo} alt="logo" />  
        </div>
        {user && <div className='mt-2'>
          <p className='text-white font-bold'>{user.displayName}</p>
          <button onClick={movetoLoginPage} className='bg-red-700 px-4 py-2 rounded-lg hover:bg-red-900'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header;