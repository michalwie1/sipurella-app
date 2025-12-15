import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import UserForm from './UserForm';
import ConfirmationPage from './pages/ConfirmationPage.jsx';



function App() {
  return (
    <div dir="rtl" lang="he">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
