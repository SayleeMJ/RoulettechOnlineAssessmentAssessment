import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} exact />
      </Routes>
    </Router>
  );
}

export default App;
