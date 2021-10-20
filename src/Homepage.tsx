import React from 'react'
import Project1 from './images/Screen Shot 2021-10-15 at 5.09.42 PM.png'
import Project2 from './images/Screen Shot 2021-10-15 at 5.11.33 PM.png'
import Project3 from './images/Screen Shot 2021-10-15 at 5.12.18 PM.png'
import Project4 from './images/Screen Shot 2021-10-15 at 5.13.07 PM.png'
import Project5 from './images/Screen Shot 2021-10-15 at 5.14.02 PM.png'
import Project6 from './images/Screen Shot 2021-10-15 at 5.14.54 PM.png'
import Project7 from './images/Screen Shot 2021-10-15 at 5.16.09 PM.png'
export function Homepage() {
  return (
    <main>
      <h1 className="PortfolioHeader">Portfolio</h1>
      <div className="HomepageImages">
        <div className="Project1">
          <section>The Color Picker</section>
          <a href="https://thechangingcolorpicker.netlify.app">
            <img
              src={Project1}
              width="200"
              height="200"
              alt="Click to view project!"
            ></img>
          </a>
          <p>
            As part of this project, I have included the HSL (hue, saturation
            and lightness) color analysis tool. This is one of the many ways CSS
            can identify colors on the web. In addition to the HSL color
            percentages, In addition to HSL color percentages, the website also
            responds to user events via React. Hooks were utilized to update the
            user interface, and props were used to render the inline styles for
            dynamically updating the DOM elements.
          </p>
          <p>This project was made with Typescript, React, HTML and SCSS</p>
        </div>
        <div className="Project2">
          <section>ReactoCats</section>
          <a href="https://reactocats.netlify.app">
            <img src={Project2} width="200" height="200"></img>
          </a>

          <p>
            A clone website of Githubs mascot site was made as a way to
            demonstrate what I learned about developing websites from scratch
            and implementing the technologies I learned within a short period of
            time.
          </p>
          <p>This project was made with Typescript, React, HTML and SCSS</p>
        </div>
        <div className="Project3">
          <section>Rock Paper Scissors</section>
          <a href="https://roshambo22.netlify.app">
            <img src={Project3} width="200" height="200"></img>
          </a>
          <p>This project was made with Javascript, React, HTML and SCSS</p>
        </div>
        <div className="Project4">
          <section>Snowman Game</section>
          <a href="https://snowmangame.netlify.app">
            <img src={Project4} width="200" height="200"></img>
          </a>
          <p>This project was made with Typescript, React, HTML and SCSS</p>
        </div>
        <div className="Project5">
          <section>Plants, Records and Crystals</section>
          <a href="https://plantsrecordsandcrystals.herokuapp.com/ ">
            <img src={Project5} width="200" height="200"></img>
          </a>
        </div>
        <div className="Project6">
          <section>Crypto Tracker</section>
          <a href="https://avg-crypto-currency-tracker.netlify.app">
            <img src={Project6} width="200" height="200"></img>
          </a>
        </div>
        <div className="Project7">
          <section>ScoreBoard</section>
          <a href="https://scoreboard444.netlify.app">
            <img src={Project7} width="200" height="200"></img>
          </a>
        </div>
      </div>
    </main>
  )
}
