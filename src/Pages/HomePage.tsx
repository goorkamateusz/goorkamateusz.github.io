import * as React from "react"
import GithubProfile from 'Components/GithubProfile';
import GithubStats from 'Components/GithubStats';
import ProjectsList from 'Components/ProjectsList';
import ReposList from 'Components/ReposList';
import Social from 'Components/Social';
import { Facefook as Facebook, Github, Instagram, Linkedin, Youtube } from 'Img/Socialmedia';
import './PageBase.css'
import { Section } from "../Components/Section";

export default function HomePage() {
    return (
        <>
            <Section name={<Social href="https://github.com/goorkamateusz" icon={<Github />}>Github</Social>} className="first">
                <GithubProfile />
            </Section>

            <Section>
                <a href="https://bit.ly/maatiug-polecajki" className="important">☑ Polecajki!</a>
            </Section>

            <Section className="wide cols-cont" name="Socialmedia">
                <Social href='https://www.instagram.com/goorkamateusz' icon={<Instagram />}>Instagram</Social>
                <Social href="https://www.linkedin.com/in/gorkamateusz/" icon={<Linkedin />}> Linkedin </Social>
                <Social href="https://www.youtube.com/channel/UChwJhJpqMo2JWP5RMPyWNLw/" icon={<Youtube />}> YouTube</Social>
                <Social href="https://www.facebook.com/goorkamateusz" icon={<Facebook />}> Facebook </Social>
            </Section>

            <Section name="Main projects">
                <ProjectsList />
            </Section>

            <Section name="Github stats">
                <GithubStats />
            </Section>

            <Section name="Stared repositories">
                <ReposList />
            </Section>
        </>
    )
} 