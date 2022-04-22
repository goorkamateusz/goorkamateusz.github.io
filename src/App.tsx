import CyberFusionPage from 'Pages/CyberFusionPage';
import HomePage from 'Pages/HomePage';
import * as React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cyber-fusion" element={<CyberFusionPage />} />
        </Routes>
      </Router>
    </>
  );
}
