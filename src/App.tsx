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
      </section>

      <section>
        <header>Github stats</header>
        <div>
          <a href="https://github.com/anuraghazra/github-readme-stats">
            <img src="https://github-readme-stats.vercel.app/api?username=goorkamateusz&show_icons=true&count_private=true&title_color=569cd6&text_color=666666&icon_color=569cd6&bg_color=0f0f0f&hide_border=false&layout=compact&hide_title=true" />
          </a>
        </div>
      </section>

      <section>
        <header>Stared repositories</header>
        <div className="repos-list" id="repos-list"></div>
      </section>

      <script src="js/jquery.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}
