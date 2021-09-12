import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">KST Tours</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/promotionsPage">Promotions</NavLink></li>
            <li className="nav-item"><SearchBar /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
