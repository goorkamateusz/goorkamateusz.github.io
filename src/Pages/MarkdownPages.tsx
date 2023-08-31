import { ReactNode } from "react"
import CyberFusionPage from "./CyberFusionPage"
import * as React from "react"
import defendTheCity from 'Pages/CyberFusion/defend-the-city.webp'

export interface MarkdownPagesProps {
    brief?: string
    path: string
    element?: ReactNode
    title: string
    tags?: string[],
    banner?: string
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
            path: "cyber-fusion",
            title: "Cyber Fusion - Merge Defence",
            brief: "My first commercial released game.",
            tags: ["project"],
            element: <CyberFusionPage />,
            banner: defendTheCity
        },
        {
            path: "vscode-plugins",
            title: "VS Code plugins",
            brief: "List of Visual Studio Code plugins I recommend.",
            tags: ["tips"]
        },
        {
            path: "tools",
            title: "Recomended tools",
            brief: "Summary of software tools, languages and frameworks I recomended.",
            tags: ["tips", "tools"]
        },
    ]
