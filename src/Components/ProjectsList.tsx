import * as React from "react";
import { Link } from "react-router-dom";
import './ProjectsList.css'
import icon from 'Pages/CyberFusion/icon.png'
import defendTheCity from 'Pages/CyberFusion/defend-the-city.webp'
import { Smartphone, Unity } from "Components/ProjectTypeIcons";

interface ProjectProps {
    to: string
    title: string
    subtitle?: string
    icon?: string
    techs?: React.ReactNode
    brief?: string
    banner?: string
}

function Project(props: ProjectProps) {
    return <Link to={props.to}>
        <div className="proj">
            <div className="row-con">
                {props.icon && <img className="proj-icon" src={props.icon} />}
                <div className="title-con">
                    <p className="title">{props.title}</p>
                    <p className="subtitle">{props.subtitle}</p>
                </div>
                <span className="to-right">
                    {props.techs}
                </span>
            </div>
            {props.banner && <img className="banner" src={props.banner} />}
            <p className="brief">
                {props.brief}
            </p>
            <p className="like-link">See more...</p>
        </div>
    </Link>;
}

export default function ProjectsList() {
    return (
        <div className="proj-list">
            <Project
                title="Cyber Fusion"
                subtitle="Merge defence"
                icon={icon}
                techs={<><Smartphone /> <Unity /></>}
                brief="Mobile game developed with team of friends and Pixel Storm Game Studio."
                banner={defendTheCity}
                to="cyber-fusion" />
        </div>
    )
}
