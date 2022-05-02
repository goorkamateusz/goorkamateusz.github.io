import * as React from "react";
import './TeamList.css'

interface TeamListProps {
    children: React.ReactNode
}

export function TeamList(props: TeamListProps) {
    return <ul className="two-column-list"> {props.children} </ul>;
}

interface MemberProps {
    href?: string
    name: string
    children: React.ReactNode
}

export function Member(props: MemberProps) {
    return <li>
        <a href={props.href}>
            <span>{props.name}</span>
            <span>{props.children}</span>
        </a>
    </li>
}