import { useState, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import csharp from 'highlight.js/lib/languages/csharp';

import Markdown from 'markdown-to-jsx';

import * as React from 'react';
import './MarkdownPage.css';
import { PageProps } from "Components/PageProps";
import { SubpageHader } from './SubpageHader';
import { PageTitle } from './PageTitle';
import { Section } from './Section';

export interface MakrdownPageProps {
    page: PageProps
}

export default function MarkdownPage(props: MakrdownPageProps) {
    const [post, setPost] = useState('');
    const [footer, setFooter] = useState(undefined);
    const page = props.page

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('csharp', csharp);
    hljs.highlightAll()

    useEffect(() => {
        fetch("content/" + page.href + ".md")
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err));

        fetch("content/common-footer.md")
            .then(res => res.text())
            .then(res => setFooter(res))
            .catch(err => console.log(err));
    });

    return (
        <>
            <SubpageHader />

            <PageTitle title={page.title} subtitle={''} />

            <Section name={page.brief}>
                <div className='markdownContainer'>
                    <Markdown options={{
                        wrapper: 'div',
                        forceWrapper: true,
                    }}>
                        {post}
                    </Markdown>
                </div>
            </Section>

            {footer && <Section name="Notes">
                <div className='markdownContainer withoutBackground'>
                    <Markdown>
                        {footer}
                    </Markdown>
                </div>
            </Section>}
        </>
    );
}
