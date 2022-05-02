import Social from "Components/Social";
import * as React from "react";
import { SubpageHader } from "Components/SubpageHader";
import './PageBase.css'
import './CyberFusionPage.css'
import 'Components/GithubProfile.css'
import icon from 'Pages/CyberFusion/icon.png'
import defendTheCity from 'Pages/CyberFusion/defend-the-city.webp'
import { Section } from "Components/Section";

function GooglePlayIcon() {
    return <svg className="light" height="55px" width="55px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.168 15.838-2.866-2.818-10.521 10.375z" /><path d="m18.168 8.167-13.387-7.557 10.521 10.375z" /><path d="m22.363 13.427c.858-.67.858-2.18-.057-2.85l-2.808-1.598-3.133 3.024 3.133 3.024z" /><path d="m2.034 24 12.234-12.002-12.234-11.997v-.001c-.619.319-1.034.9-1.034 1.655v20.69c0 .755.415 1.336 1.034 1.655z" /></svg>;
}

export default function CyberFusionPage() {
    return (
        <>
            <SubpageHader />

            <Section>
                <PageTitle title="Cyber Fusion" subtitle="Pixel Storm Game Studio" banner={defendTheCity} />
            </Section>

            <Section name="What the game is?">
                <Paragraph>
                    The game is a combination of idle clicker and tower defence game. We have used a merge mechanic to upgrade defeneces towers and walls.
                    Our aim was to create nice idle game with strategy aspect and some kind of war with huge hordes of enemies.
                </Paragraph>
            </Section>

            <Section>
                <Social className="bigger highlighed" href="https://play.google.com/store/apps/details?id=com.PixelStorm.CyberPolice2" icon={<GooglePlayIcon />}>
                    Install now!
                </Social>
            </Section>

            <Section>
                <Paragraph>
                    We have started the project as students who want to create a nice and advanced project on our faculty and now we are developing the game as internt developers in Pixel Storm.
                </Paragraph>
            </Section>

            <Section name="News">
                <NewsBox date="04.08.2021">
                    <a href="https://pwr.edu.pl/uczelnia/aktualnosci/uratuj-swiat-w-nowej-grze-studentow-pwr-12117.html">"Uratuj świat w nowej grze studentów PWr" (link)</a>
                    Wrocław University Of Sciene And Technology publish article about our project.
                </NewsBox>
                <NewsBox date="17.08.2021">
                    We have 15k players one month after release! The version 1.6 is amazing and in the next weeks we want to publish a next huge changes!
                </NewsBox>
            </Section>

            <Section name="Core team">
                <TeamList>
                    <Member href="https://github.com/Majkel1999" name="Michał Kaleta">Our all-embracing project manager and developer. 💪</Member>
                    <Member href="https://github.com/Emilysta" name="Emilia Starczyk">She've made most of the amazing models, graphics and useful shaders! 🖼</Member>
                    <Member href="https://github.com/wiecek1873" name="Michał Więcek">Our developer and specialist of effects who have create every "booom" in the game! 💥</Member>
                    <Member name="Jakub Michalski">The UI/UX 💬 specialist who fights for the players experience from the very beginning!</Member>
                    <Member name="Sebastian Kowalik">Author of opponents models and a huge specialist in 3D graphics! 📐📏</Member>
                    <Member name="Mateusz Górka">So... me. 🙂 The guy who cares about enemies mechanics and rendering, optimisation and code architecture. 🤖</Member>
                </TeamList>
            </Section>
        </>
    )
}

interface TeamListProps {
    children: React.ReactNode
}

function TeamList(props: TeamListProps) {
    return <ul className="two-column-list"> {props.children} </ul>
}

interface MemberProps {
    href?: string
    name: string
    children: React.ReactNode
}

function Member(props: MemberProps) {
    return <li>
        <a href={props.href}>
            <span>{props.name}</span>
            <span>{props.children}</span>
        </a>
    </li>
}

interface NewsBoxProps {
    date?: string
    children: React.ReactNode
}

function NewsBox(props: NewsBoxProps) {
    return <div className="text-block">
        <header>{props.date}</header>
        <p>{props.children}</p>
    </div>;
}

type ParagraphProps = { children: React.ReactNode };

function Paragraph(props: ParagraphProps) {
    return <p className="long-description"> {props.children} </p>;
}

interface PageTitleProps {
    title: string
    subtitle: string
    banner?: string
}

function PageTitle(props: PageTitleProps) {
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

