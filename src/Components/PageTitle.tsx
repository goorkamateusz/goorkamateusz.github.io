import * as React from "react";
import './PageTitle.css'

export interface PageTitleProps {
    title: string
    subtitle: string
    icon?: any
    banner?: string
}

export function PageTitle(props: PageTitleProps) {
    return <div className="pageTitleCon">
        <div className="pageTitle">
            {props.icon && <img className="icon" src={props.icon} />}
            <div className="titleCon">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.subtitle}</p>
            </div>
        </div>
        <img className="banner" src={props.banner} />
    </div>;
}
