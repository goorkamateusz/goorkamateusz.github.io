import * as React from "react";
import './ProjectsList.css'

export default function ProjectsList() {
    // todo...

    return (
        <div className="proj-list">
            <a href="cyber-fushion.html">
                <div className="proj">
                    <div className="row-con">
                        <img className="proj-icon" src="img/cyber fushion/icon.png" />
                        <div className="title-con">
                            <p className="title">Cyber Fusion</p>
                            <p className="subtitle">Merge defence</p>
                        </div>
                        <span className="to-right">
                            <img className="addition-icon" src="img/unity.svg" />
                            <img className="addition-icon" src="img/smartphone.svg" />
                        </span>
                    </div>
                    <img className="banner" src="img/cyber fushion/cyber-fushion-1.webp" />
                    <p className="brief">
                        Mobile game developed with team of friends and Pixel Storm Game Studio.
                    </p>
                    <p className="like-link">See more...</p>
                </div>
            </a>
        </div>
    )
}
