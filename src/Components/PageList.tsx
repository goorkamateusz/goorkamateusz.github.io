import * as React from 'react';
import { MARKDOWN_PAGES } from 'Pages/ContentPages';
import { PageProps } from "Components/PageProps";
import PageContentItem from './PageContentItem';
import './ContentItem.css'

export interface PageListProps
{
    pages: PageProps[]
}

export default function PageList(props: PageListProps) {
    return (
        <div className="cnt-list">
            {props.pages.map((p, i) => <PageContentItem key={i} page={p} />)}
        </div>
    );
}
