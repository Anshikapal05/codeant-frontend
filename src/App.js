import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './components/Login/Login';
import { Repository } from './pages/Repository';

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Repository />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
