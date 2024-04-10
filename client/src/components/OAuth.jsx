import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // Trigger Google sign-in popup
      const result = await signInWithPopup(auth, provider);

      // Check if the user chose a photo during sign-in
      const photoURL = result.additionalUserInfo?.profile?.picture || result.user.photoURL;

      // Send user data to the server for authentication
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: photoURL,
        }),
      });

      // Get authentication response from the server
      const data = await res.json();

      // Dispatch sign-in success action with user data
      dispatch(signInSuccess(data));

      // Navigate to the home page after successful sign-in
      navigate('/');
    } catch (error) {
      console.log('Could not sign in with Google:', error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-orange-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continue with Google
    </button>
  );
}
