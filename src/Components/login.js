
import Header from './Header'
import React, { useState, useRef} from 'react';
import { checkValidData } from "../Utils/Validate"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../Utils/Firebase";

import { useDispatch } from 'react-redux';
import { addUser} from '../Utils/userSlice';
import { USER_AVATAR } from '../Utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the Form Data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;


    //Sign In / Sign Up

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "name.current.value", photoURL: USER_AVATAR,
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

            
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
    else {
      //Sign In Logic

      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });


    }



  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  };



  return (
    <div>
      <Header />
      <div className="absolute" >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg" alt="logo" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700" />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700" />
        <p class="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login