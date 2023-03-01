import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import Home from './components/Home';
import Login from './components/Login'
// import Docs from "./components/Docs";


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path = "/" index element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/docs" element={<Docs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
