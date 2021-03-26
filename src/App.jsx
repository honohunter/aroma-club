import React from 'react';
import { Router } from '@reach/router';

import './App.css';

import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <HomePage path="/" />
    </Router>
  );
}

export default App;
