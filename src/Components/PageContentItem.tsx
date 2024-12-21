import * as React from 'react';
import { PageProps } from "Components/PageProps";
import ContentItem from './ContentItem';

export interface PageContentItem {
    page: PageProps
}

export default function PageContentItem(props: PageContentItem) {
    const page = props.page

    return <ContentItem
        href={page.href.startsWith('http') ? page.href : '#' + page.href}
        name={page.title}
        desc={page.brief}
        tags={page.tags}
        banner={page.banner}
        className='small' />
}
