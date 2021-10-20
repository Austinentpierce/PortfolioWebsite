import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { Homepage } from './Homepage'
import { AboutMe } from './Pages/AboutMe'

import step_0 from './images/white_logo_color_background.jpg'

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
          <i className="fab fa-html5"></i>Built in Tampa,Florida
          <i className="fab fa-css3-alt"></i>
        </div>
      </footer>
    </main>
  )
}
