import GithubProfile from "Components/GithubProfile";
import Social from "Components/Social";
import { Github } from "Img/Socialmedia";
import * as React from "react";
import './SubpageHeader.css'

export function SubpageHader() {
    return <section className="in-header">
        <header>
            <Social className="social" href="/" icon={<Github />}>Main page</Social>
        </header>
        <main>
            <GithubProfile />
        </main>
    </section>;
}
