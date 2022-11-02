import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex-row">
    <h1>Math Magicians</h1>
    <nav>
      <ul className="flex-row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
