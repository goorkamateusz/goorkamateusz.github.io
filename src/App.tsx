import CyberFusionPage from 'Pages/CyberFusionPage';
import HomePage from 'Pages/HomePage';
import * as React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

export default function App() {
  React.useEffect(() => {
    const jquery = document.createElement('script')
    const script = document.createElement('script')
    jquery.src = "js/jquery.js"
    script.src = "js/main.js"
    document.body.appendChild(jquery)
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cyber-fusion" element={<CyberFusionPage />} />
        </Routes>
      </Router>

      <script src="js/jquery.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}
