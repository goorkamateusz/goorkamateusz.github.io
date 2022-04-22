import * as React from "react";
import { Link } from "react-router-dom";
import './ProjectsList.css'
import icon from 'Pages/CyberFusion/icon.png'
import defendTheCity from 'Pages/CyberFusion/defend-the-city.webp'
import { Smartphone, Unity } from "Components/ProjectTypeIcons";

export default function ProjectsList() {
    // todo...

    return (
        <div className="proj-list">
            <Link to="cyber-fusion">
                <div className="proj">
                    <div className="row-con">
                        <img className="proj-icon" src={icon} />
                        <div className="title-con">
                            <p className="title">Cyber Fusion</p>
                            <p className="subtitle">Merge defence</p>
                        </div>
                        <span className="to-right">
                            <Smartphone />
                            <Unity />
                        </span>
                    </div>
                    <img className="banner" src={defendTheCity} />
                    <p className="brief">
                        Mobile game developed with team of friends and Pixel Storm Game Studio.
                    </p>
                    <p className="like-link">See more...</p>
                </div>
            </Link>
        </div>
    )
}
