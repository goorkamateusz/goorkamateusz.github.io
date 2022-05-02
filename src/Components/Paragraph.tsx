import * as React from "react";

type ParagraphProps = { children: React.ReactNode };

export function Paragraph(props: ParagraphProps) {
    return <p className="long-description"> {props.children} </p>;
}
