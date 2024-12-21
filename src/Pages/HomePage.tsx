import * as React from "react"
import GithubProfile from 'Components/GithubProfile';
import ReposList from 'Components/ReposList';
import Social from 'Components/Social';
import { Facefook as Facebook, Github, Instagram, Linkedin, Notion, Youtube } from 'Img/Socialmedia';
import './PageBase.css'
import { Section } from "Components/Section";
import { SocialCon } from "Components/SocialCon";
import { GithubReadme } from "Components/GithubReadme";
import MakrdownPagesList from "Components/MakrdownPagesList";

export default function HomePage() {
    return (
        <>
            <Section name={<Social href="https://github.com/goorkamateusz" icon={<Github />}>Github</Social>} className="first">
                <GithubProfile />
            </Section>

            <Section name="See also">
                <SocialCon>
                    <Social href="https://www.linkedin.com/in/goorkamateusz/" className="bigger" icon={<Linkedin />}> LinkedIn </Social>
                    <Social href="https://polecajki.notion.site/Polecajki-dbe690d94d54406a98e783875a585b9e" icon={<Notion />}> Polecajki</Social>
                    <Social href='https://www.instagram.com/goorkamateusz' icon={<Instagram />}>Instagram</Social>
                    {/* <Social href="https://www.youtube.com/channel/UChwJhJpqMo2JWP5RMPyWNLw/" icon={<Youtube />}> YouTube</Social> */}
                    {/* <Social href="https://www.facebook.com/goorkamateusz" icon={<Facebook />}> Facebook </Social> */}
                </SocialCon>
            </Section>

            <Section name="About me">
                <GithubReadme />
            </Section>

            <Section name="Content">
                <MakrdownPagesList />
            </Section>

            <Section name="Stared repositories">
                <ReposList />
            </Section>

            {/* <Section name="Github stats">
                <GithubStats />
            </Section> */}
        </>
    )
}
