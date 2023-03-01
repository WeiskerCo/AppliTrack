import React, { useState, useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const login: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(): void {
    // axios.post('/api/user', {
    //   userName: userName,
    //   password: password
    // })
    // .then((res) => {
      // if (res.status === 200) {
        console.log('good status')
        navigate("/dashboard")
      // } else {
      //   console.log('bad status')
      // }
    // })
    // .catch((err) => console.log(err))
  };

  return (
    <div>
        <label id='username'> Username: 
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label id='password'> Password: 
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default login;