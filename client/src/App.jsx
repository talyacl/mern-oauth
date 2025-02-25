import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
  );
}

export default App;
