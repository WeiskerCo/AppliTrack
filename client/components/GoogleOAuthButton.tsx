import React from 'react';
// import getGoogleOAuthUrl from '../../server/auth/getGoogleUrl';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const GoogleOAuthButton = () => {
  const navigate = useNavigate();

  const sendOAuthUserData = async data => {
    const OAuthData = await axios.post('api/auth/oauth', data)
  }
  
  return (
    <div>
      <a>Login with Google</a>
      <GoogleLogin 
        onSuccess={response => {
          console.log(jwt_decode(response.credential))
          sendOAuthUserData(jwt_decode(response.credential))
          navigate('/dashboard');
        }}
        onError={() => {
          console.log('Login Failed')
        }}
        useOneTap
        size='large'
      />
    </div>
  )
}

export default GoogleOAuthButton;