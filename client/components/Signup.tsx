import React from 'react';

const signup: React.FC = () => {

  return (
    <div>
        <label id='username'> Username: 
            <input type="text" />
        </label>
        <label id='password'> Password: 
            <input type="text" />
        </label>
        <button id='oauth'>
            Oauth Here
        </button>
    </div>
  )
}

export default signup;