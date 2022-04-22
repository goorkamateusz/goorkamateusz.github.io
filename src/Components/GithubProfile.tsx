import * as React from "react";
import { githubProfile } from "Services/GithubProfileService";
import './GithubProfile.css';

export default function GithubProfile() {
    const [profile, setProfile] = React.useState(undefined)

    if (!profile)
        githubProfile.getData().then((value) => setProfile(value))

    return (
        <div className="cols-cont" id="profile">
            {profile && <>
                <div className="smaller-col col">
                    <img id="avatar-img" src={profile["avatar_url"]} />
                </div>
                <div className="bigger-col col">
                    <p className="title" id="my-name">{profile["name"]}</p>
                    <p className="subtitle" id="my-login">{profile["login"]}</p>
                    <p className="description" id="bio">{profile["bio"]}</p>
                    <a id="email" className="profile-data">{profile["email"]}</a>
                    <a id="location" className="profile-data">{profile["location"]}</a>
                    <a id="company" className="profile-data">{profile["company"]}</a>
                </div>
            </>}
        </div>
    )
}