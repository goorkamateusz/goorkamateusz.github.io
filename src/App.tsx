import MarkdownPage from 'Components/MarkdownPage';
import HomePage from 'Pages/HomePage';
import { MARKDOWN_PAGES } from 'Pages/ContentPages';
import * as React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import 'highlight.js/styles/github-dark.css'

export default function App() {
  const markdownPages = MARKDOWN_PAGES

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {markdownPages
            .filter(p => p.href.startsWith('/'))
            .map((p, i) => <Route key={i} path={p.href} element={p.element ?? <MarkdownPage page={p} />} />)}
          <Route path="*" element={<a href="/">404, Page not found.</a>} />
        </Routes>
      </Router>
    </>
  );
}
