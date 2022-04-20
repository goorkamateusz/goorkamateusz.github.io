import * as React from "react";
import './GithubProfile.css';

export default function GithubProfile() {
    // todo... its only copied and jquery still provide logic

    return (
        <div className="cols-cont" id="profile">
            <div className="smaller-col col">
                <img id="avatar-img" />
            </div>
            <div className="bigger-col col">
                <p className="title" id="my-name"></p>
                <p className="subtitle" id="my-login"></p>
                <p className="description" id="bio"></p>
                <a id="email" className="profile-data"></a>
                <a id="location" className="profile-data"></a>
                <a id="company" className="profile-data"></a>
            </div>
        </div>
    )
}