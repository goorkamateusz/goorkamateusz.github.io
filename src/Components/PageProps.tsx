import { ReactNode } from "react";

export interface PageProps {
    brief?: string;
    href: string;
    element?: ReactNode;
    title: string;
    tags?: string[];
    banner?: string;
}
