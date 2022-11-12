import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex-row">
    <div className="left-nav flex-row">
      <h1>
        <Link to="/">
          Bookstore CMS
        </Link>
      </h1>
      <nav>
        <ul className="flex-row">
          <li>
            <Link to="/">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to="/categories">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <span id="icon" className="icon material-symbols-outlined">
      account_circle
    </span>
  </header>
);

export default Header;
