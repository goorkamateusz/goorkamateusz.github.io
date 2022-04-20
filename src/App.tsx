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
          <a className="social" href="https://github.com/goorkamateusz">
            <svg width="24px" viewBox="0 0 512 512"><path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872 c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464 c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496 c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368 c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68 c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672 c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992 c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496 c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z" /></svg>
            <span id="github-url">Github</span>
          </a>
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
          <a className="social" href="https://www.instagram.com/goorkamateusz">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            <span>Instagram</span>
          </a>
          <a className="social" href="https://www.linkedin.com/in/gorkamateusz/">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            <span>Linkedin</span>
          </a>
          <a className="social" href="https://www.youtube.com/channel/UChwJhJpqMo2JWP5RMPyWNLw/">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            <span>YouTube</span>
          </a>
          <a className="social" href="https://www.facebook.com/goorkamateusz">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg>
            <span>Facebook</span>
          </a>
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
