import React from 'react'
import BusinessLogo from './images/logo_white_background.jpg'

export function App() {
  return (
    <main>
      <header>
        <ul>
          <div className="Logo">
            <img src={BusinessLogo} width="300" height="50"></img>
          </div>
          <ul className="Logos">
            <div className="About">About</div>
            <li className="LinkedIn">
              <a href="https://www.linkedin.com/in/austin-pierce-5017b0220/">
                <img
                  src="https://simg.nicepng.com/png/small/461-4616944_linkedin-logo-png-linked-in-icon-svg.png"
                  width="45"
                  height="35"
                  alt="LinkedinLogo"
                />
              </a>
            </li>
            <li className="Github">
              <a href="https://github.com/Austinentpierce">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li className="EmailLogo">
              <a href="mailto:austinentpierce@gmail.com">
                <i className="envelope fa-2x fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </ul>
      </header>
      <footer>
        <div>
          <i className="umbrella fas fa-umbrella-beach"></i>Built in
          Tampa,Florida<i className="umbrella fas fa-umbrella-beach"></i>
        </div>
      </footer>
    </main>
  )
}
