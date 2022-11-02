import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BooksContainer from './BooksContainer';
import Categories from './Categories';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BooksContainer />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
