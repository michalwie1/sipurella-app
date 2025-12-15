import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import UserForm from './UserForm';


function App() {
  return (
    <div dir="rtl" lang="he">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<UserForm />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
