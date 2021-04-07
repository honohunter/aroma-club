import React from 'react';
import { Router } from '@reach/router';

import './App.css';

import HomePage from './pages/home';
import ShopPage from './pages/shop';

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <ShopPage path="/shop" />
    </Router>
  );
}

export default App;
