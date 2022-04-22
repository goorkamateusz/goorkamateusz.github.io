import * as React from "react";
import { githubProfile } from "Services/GithubProfileService";
import './GithubProfile.css';

export default function GithubProfile() {
    const [profile, setProfile] = React.useState(undefined)

    if (!profile)
        githubProfile.getData().then((value) => setProfile(value))

    return (
        <div className="cols-cont profile">
            {profile && <>
                <div className="smaller-col col">
                    <img className="avatar-img" src={profile["avatar_url"]} />
                </div>
                <div className="bigger-col col">
                    <p className="title">{profile["name"]}</p>
                    <p className="subtitle">{profile["login"]}</p>
                    <p className="description">{profile["bio"]}</p>
                    <a className="profile-data">{profile["email"]}</a>
                    <a className="profile-data">{profile["location"]}</a>
                    <a className="profile-data">{profile["company"]}</a>
                </div>
            </>}
        </div>
    )
}