import React from 'react';
import getGoogleOAuthUrl from '../../server/auth/getGoogleUrl';


const GoogleOAuthButton = () => {
  return (
    <div>
      <a href={getGoogleOAuthUrl()}>
        Login with Google
      </a>
    </div>
  )
}

export default GoogleOAuthButton;