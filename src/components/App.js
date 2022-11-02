/*eslint-disable */
import React from 'react';
import BooksContainer from './BooksContainer'
import Categories from './Categories'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {
    return(<Router>
    <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
    </Routes>
    </Router>
    )
}

export default App;