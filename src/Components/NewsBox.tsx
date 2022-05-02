import * as React from "react";
import './NewsBox.css'

interface NewsBoxProps {
    date?: string
    children: React.ReactNode
}

export function NewsBox(props: NewsBoxProps) {
    return <div className="newsBox">
        <header>{props.date}</header>
        <p>{props.children}</p>
    </div>;
}
