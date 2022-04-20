import GithubProfile from 'Components/GithubProfile';
import GithubStats from 'Components/GithubStats';
import ProjectsList from 'Components/ProjectsList';
import ReposList from 'Components/ReposList';
import Social from 'Components/Social';
import { Facefook as Facebook, Github, Instagram, Linkedin, Youtube } from 'Img/Socialmedia';
import * as React from 'react';

export default function App() {
  React.useEffect(() => {
    const jquery = document.createElement('script')
    const script = document.createElement('script')
    jquery.src = "js/jquery.js"
    script.src = "js/main.js"
    document.body.appendChild(jquery)
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <section className="first">
        <header>
          <Social href="https://github.com/goorkamateusz" icon={<Github />}>Github</Social>
        </header>
        <main>
          <GithubProfile />
        </main>
      </section>

      <section>
        <a href="https://bit.ly/maatiug-polecajki" className="important">☑ Polecajki!</a>
      </section>

      <section className="wide">
        <header>Socialmedia</header>
        <main className="cols-cont">
          <Social href='https://www.instagram.com/goorkamateusz' icon={<Instagram />}>Instagram</Social>
          <Social href="https://www.linkedin.com/in/gorkamateusz/" icon={<Linkedin />}> Linkedin </Social>
          <Social href="https://www.youtube.com/channel/UChwJhJpqMo2JWP5RMPyWNLw/" icon={<Youtube />}> YouTube</Social>
          <Social href="https://www.facebook.com/goorkamateusz" icon={<Facebook />}> Facebook </Social>
        </main>
      </section>

      <section>
        <header>Main projects</header>
        <ProjectsList />
      </section>

      <section>
        <header>Github stats</header>
        <div>
          <GithubStats />
        </div>
      </section>

      <section>
        <header>Stared repositories</header>
        <ReposList />
      </section>

      <script src="js/jquery.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}
