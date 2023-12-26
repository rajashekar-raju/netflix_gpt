import React, { useRef, useState } from 'react';
import background from "./images/background.jpeg"
import {checkvalidata} from "../utils/validation"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const LoginPage = () => {

    const [errorMessage,setErrorMessage]=useState(null);
    const [isSigninForm,setSigninForm] = useState(true)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

  const handleValidation = () => {
      const message = checkvalidata(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message) return;
      if(!isSigninForm){
        // sign up 
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => { 
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value,
                  photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(addUser({uid: uid,email: email,displayName: displayName}));
                }).catch((error) => {
                  setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage2 = error.message;
                setErrorMessage(errorMessage2);
            });

            // onAuthStateChanged(auth, (user) => {
            //   if (user) {
            //     const {uid,email,displayName} = user;
            //     // console.log(uid);
            //     dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            //     navigate("/browse");
            //   } else {
            //     // User is signed out
            //     dispatch(removeUser());
            //     navigate("/");
            //   }
            // });
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage3 = error.message;
          setErrorMessage(errorMessage3);
        });
      }
  };


  const handleToggleForm = () => {
        setSigninForm(!isSigninForm);
  }

  return (
    <div>
      <Header/>
    {/* <img className='bg-cover mb-3' src={background} alt="" /> */}
    <div className="flex items-center justify-center absolute top-[200px] left-[550px]">
      <div className="bg-black p-8 rounded shadow-md w-96 bg-opacity-80">
        <h2 className="text-2xl font-semibold mb-4 text-white">{isSigninForm?"Sign in":"Sign Up"}</h2>
        <div className="mb-4">
        { !isSigninForm && 
         <label className="block text-white text-lg font-medium mb-2">
            Name
          </label> 
        }
          {!isSigninForm && <input
            ref={name}
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2"
            placeholder="Enter your name"
            // onChange={(e) => setEmail(e.target.value)}
          />}
          <label htmlFor="email" className="block text-white text-lg font-medium mb-2">
            Email
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2"
            placeholder="Enter your email"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-lg font-medium mb-2">
            Password
          </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2"
            placeholder="Enter your password"
          />
        </div>
        <p className='text-red-700 text-lg mb-2'>{errorMessage}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          onClick={handleValidation}
        >
          {isSigninForm?"Sign in":"Sign up"}
        </button>
        <p className='text-white mt-3 cursor-pointer' onClick={handleToggleForm}>{isSigninForm ? "New to Netflix ? Sign up now":"Already user sign in now"}</p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
