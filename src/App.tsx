import MarkdownPage from 'Components/MarkdownPage';
import CyberFusionPage from 'Pages/CyberFusionPage';
import HomePage from 'Pages/HomePage';
import { PAGES } from 'Pages/MarkdownPages';
import * as React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import 'highlight.js/styles/github-dark.css'

export default function App() {
  const markdownPages = PAGES

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cyber-fusion" element={<CyberFusionPage />} />
          {markdownPages.map(p => <Route path={p.path} element={<MarkdownPage page={p} />} />)}
        </Routes>
      </Router>
    </>
  );
}
