export interface MarkdownPagesProps
{
    brief?: string
    path: string
    title: string
    tags?: string[]
}

export const PAGES: MarkdownPagesProps[] =
[
    {
        path: "pixelstorm",
        title: "Pixel Storm Game Studio",
        brief: "Projects I have participated in, experience I have gained.",
        tags: ["job"]
    },
    {
        path: "vscode-plugins",
        title: "VS Code plugins",
        brief: "List of Visual Studio Code plugins I recommend.",
        tags: ["tips"]
    },
]
