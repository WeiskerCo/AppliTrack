import React from 'react';
import GoogleOAuthButton from './GoogleOAuthButton';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <GoogleOAuthButton />
    </div>
  )
}

export default Home;