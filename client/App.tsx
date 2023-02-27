import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
// import Docs from "./components/Docs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/docs" element={<Docs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
