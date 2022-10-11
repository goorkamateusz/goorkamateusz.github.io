import * as React from "react";
import './Paragraph.css'

type ParagraphProps = { children: React.ReactNode };

export function Paragraph(props: ParagraphProps) {
    return <p className="long-description"> {props.children} </p>;
}
