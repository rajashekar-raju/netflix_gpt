import React from 'react'
import netflix_logo from "./images/Netflix_Logo_PMS.png"
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate();

    const movetoLoginPage = () => {
        navigate("/login")
    }

  return (
    <div className='absolute top-4 left-10 '>

        <div className='flex justify-between items-center gap-[1000px] '>
             <img  className="w-44" src={netflix_logo} alt="logo" />  
             <button onClick={movetoLoginPage} className='bg-red-700 h-10 px-3 rounded-lg text-white'>Login</button> 
        </div>

        <div className='max-w-[1100px] my-10 mx-auto mt-44 text-white'>
            <h1 className='text-5xl font-bold text-white mb-3'>The biggest Indian hits. The best Indian stories. All streaming here.</h1>
            <p className='mb-3 text-2xl'>Watch anywhere. Cancel anytime.</p>
            <p className='mb-3 text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div>
                <input className='px-4 py-2 mr-2' type="email" placeholder='enter email'/>
                <button  className='bg-[#e50914] text-white rounded-lg px-4 py-2'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Header;