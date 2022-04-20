import * as React from "react";
import './Social.css'

interface Socialprops {
    icon: React.ReactNode,
    href: string,
    children?: string | React.ReactNode,
}

export default function Social(props: Socialprops) {
    return (
        <a className="social" href={props.href}>
            {props.icon}
            {props.children && <span>{props.children}</span>}
        </a>
    )
}