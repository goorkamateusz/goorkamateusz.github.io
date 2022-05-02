import * as React from "react";
import icon from 'Pages/CyberFusion/icon.png';
import './PageTitle.css'

export interface PageTitleProps {
    title: string
    subtitle: string
    banner?: string
}

// todo css col, icon, title-con
export function PageTitle(props: PageTitleProps) {
    return <div>
        <div className="page">
            <img className="col icon" src={icon} />
            <div className="col title-con">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.subtitle}</p>
            </div>
        </div>
        <img className="banner" src={props.banner} />
    </div>;
}
