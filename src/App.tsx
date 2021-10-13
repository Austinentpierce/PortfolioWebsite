import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { Homepage } from './Homepage'
import { AboutMe } from './Pages/AboutMe'

export function App() {
  return (
    <main>
      <header>
        <ul>
          <Link to="/">
            <div className="Logo">
              <img src="logo_size.jpg" width="300" height="50"></img>
            </div>
          </Link>
          <ul className="Logos">
            <Link to="/AboutMe">
              <div className="About">About</div>
            </Link>
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
      <section>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
        </Switch>
      </section>
      <footer>
        <div>
          <i className="umbrella fas fa-umbrella-beach"></i>Built in
          Tampa,Florida<i className="umbrella fas fa-umbrella-beach"></i>
        </div>
      </footer>
    </main>
  )
}
