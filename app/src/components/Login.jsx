import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

function Login() {
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const handlelogin = () => {
        console.log('ccnw')
        signInWithPopup(auth, googleprovider).then((result) => {
            const user = result.user;
   
           }).catch((error) => {
   
               const errorMessage = error.message;
               // The email of the user's account used.
               const email = error.customData.email;
               // The AuthCredential type that was used.
               const credential = GoogleAuthProvider.credentialFromError(error);
               // ...
           });
    }
       
    return (
        <div className='flex items-center justify-center w-full h-screen '>
            <button className='px-8 py-2 font-semibold text-white rounded-md bg-blue' onClick={handlelogin}>Login</button>
        </div>
    )
}

export default Login
