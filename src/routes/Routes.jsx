import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Navbar from '@/components/Navbar';

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
