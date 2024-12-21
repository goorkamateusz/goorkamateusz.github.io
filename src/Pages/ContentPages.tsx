import CyberFusionPage from "./CyberFusionPage"
import * as React from "react"
import defendTheCity from 'Pages/CyberFusion/defend-the-city.webp'
import { PageProps } from "../Components/PageProps"

export const MARKDOWN_PAGES: PageProps[] =
    [
        {
            href: "https://www.notion.so/polecajki/a53b4c3ba73145ac898b119350daccbf",
            title: "#Uses",
            brief: "My working setups",
            tags: ["tips", "tools"]
        },
        {
            href: "/pixelstorm",
            title: "Pixel Storm Game Studio",
            brief: "Projects I have participated in, experience I have gained.",
            tags: ["job"],
            banner: "https://pixelstorm.pl/wp-content/uploads/2022/10/contact-e1666608363738.png"
        },
        {
            href: "/cyber-fusion",
            title: "Cyber Fusion - Merge Defence",
            brief: "My first commercial released game.",
            tags: ["project"],
            element: <CyberFusionPage />,
            banner: defendTheCity
        },
        {
            href: "https://polecajki.notion.site/1635321711d88006992df3a3726f36d5",
            title: "VS Code plugins",
            brief: "List of Visual Studio Code plugins I recommend.",
            tags: ["tips"],
            banner: "https://img.notionusercontent.com/ext/https%3A%2F%2Fgithub.com%2Fgoorkamateusz%2Fgoorkamateusz%2Fraw%2Fmaster%2Fimg%2Forla-perc-wide.jpg/size/w=2000?exp=1734802973&sig=T-Xq2htmtnBhpmDHhDFWA78GOhXolJWPz5E6R_wnQu0"
        },
        {
            href: "https://polecajki.notion.site/1635321711d88017b507e64c38483706",
            title: "Recomended tools",
            brief: "Summary of software tools, languages and frameworks I recomended.",
            tags: ["tips", "tools"]
        },
    ]
