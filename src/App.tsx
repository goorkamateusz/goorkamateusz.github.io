import MarkdownPage from 'Components/MarkdownPage';
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
          {markdownPages.map(p => <Route path={p.path} element={p.element ?? <MarkdownPage page={p} />} />)}
          <Route path="*" element={<a href="/">404, Page not found.</a>} />
        </Routes>
      </Router>
    </>
  );
}
