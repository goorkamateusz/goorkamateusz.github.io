import * as React from 'react';
import { MarkdownPagesProps } from 'Pages/MarkdownPages';
import ContentItem from './ContentItem';

export interface PageContentItem
{
    page: MarkdownPagesProps
}

export default function PageContentItem(props: PageContentItem) {
    const page = props.page
    return <ContentItem
        href={"/#/" + page.path}
        name={page.title}
        desc={page.brief}
        className='small'/>
}
