import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { Homepage } from './Homepage'
import { AboutMe } from './Pages/AboutMe'

import step_0 from './images/logo_white_background.jpg'

export function App() {
  return (
    <main>
      <header>
        <ul>
          <Link to="/">
            <div className="Logo">
              <img src={step_0} width="225" height="70"></img>
            </div>
          </Link>
          <ul className="Logos">
            <Link to="/AboutMe">
              <div className="About">About</div>
            </Link>
            <li className="LinkedIn">
              <a href="https://www.linkedin.com/in/austin-pierce-5017b0220/">
                <i className="fab fa-2x fa-linkedin"></i>
              </a>
            </li>
            <li className="Github">
              <a href="https://github.com/Austinentpierce">
                <i className="fab fa-2x fa-github"></i>
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
