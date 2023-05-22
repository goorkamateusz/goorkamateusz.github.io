export interface MarkdownPagesProps
{
    brief?: string;
    path: string,
    title: string,
}

export const PAGES: MarkdownPagesProps[] =
[
    {
        path: "test",
        title: "Test",
        brief: "test 123"
    },
]
