import * as React from 'react';
import { PAGES } from 'Pages/MarkdownPages';
import PageContentItem from './PageContentItem';
import './ContentItem.css'

export default function MakrdownPagesList() {
    const pages = PAGES

    return (
        <div className="cnt-list">
            {pages.map(p => <PageContentItem page={p} />)}
        </div>
    );
}
