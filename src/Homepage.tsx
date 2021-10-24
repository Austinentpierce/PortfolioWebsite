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
        <div className="Project5">
          <section className="ProjectHeader">
            Plants, Records and Crystals
          </section>
          <a href="https://plantsrecordsandcrystals.herokuapp.com/ ">
            <img src={Project5} width="200" height="200"></img>
          </a>
          <p>
            The Plants, Records and Crystals project was my final project in my
            coding bootcamp journey. It is a full stack application, Creating,
            Reading, Updating and Deleting data from the database and displaying
            on the selected pages. This app was specifically created for my
            fiancé and to be used by her personally. She heavily collects the 3
            items and has so many of them they started getting out of control so
            I decided to surprise her with a place to store all of them. It is
            strictly a mobile app so the laptop did not have to be carried
            everywhere. If you are viewing it for best user experience, please
            view on mobile view on the computer or on a mobile phone.{' '}
          </p>
          <p>
            This project was made with Typescript, React, C#, .NET, PostgreSQL,
            HTML and CSS
          </p>
        </div>

        <div className="Project2">
          <section className="ProjectHeader">ReactoCats</section>
          <a href="https://reactocats.netlify.app">
            <img src={Project2} width="200" height="200"></img>
          </a>

          <p>
            A clone website of Githubs mascot site was made as a way to
            demonstrate what I learned about developing websites from scratch
            and implementing the technologies I learned within a short period of
            time.
          </p>
          <p>This project was made with Typescript, React, HTML and CSS</p>
        </div>
        <div className="Project3">
          <section className="ProjectHeader">Rock Paper Scissors</section>
          <a href="https://roshambo22.netlify.app">
            <img src={Project3} width="200" height="200"></img>
          </a>
          <p>
            Roshambo is a project that builds the classic game of Rock, Paper,
            Scissors while integrating practice with UI wireframes to have a
            general idea of what I wanted the project to look like, along with
            working with the DOM. As well as conditional logic to determine a
            winner based on each players choice.
          </p>
          <p>This project was made with Javascript, React, HTML and CSS</p>
        </div>
        <div className="Project4">
          <section className="ProjectHeader">Snowman Game</section>
          <a href="https://snowmangame.netlify.app">
            <img src={Project4} width="200" height="200"></img>
          </a>
          <p>
            Snowman was a really fun app to make, creating this got me during
            the coding bootcamp to have more familiarity with importing images,
            using state, manipulating the code to have the players score to
            change the images right before your eyes. Many of my friends kids
            love playing the Snowman Game so it makes the creation more
            enjoyable knowing it is being used constantly.
          </p>
          <p>This project was made with Typescript, React, HTML and CSS</p>
        </div>
        <div className="Project1">
          <section className="Project5Header">The Color Picker</section>
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
          <p>This project was made with Typescript, React, HTML and CSS</p>
        </div>
        <div className="Project6">
          <section className="ProjectHeader">Crypto Tracker</section>
          <a href="https://avg-crypto-currency-tracker.netlify.app">
            <img src={Project6} width="200" height="200"></img>
          </a>
          <p>
            Crypto Tracker was made to track certain crypto prices and to be
            updated every 10 seconds. It shares important characteristics of
            each crypto coin needed to understand more information of the coin
            just besides the price.
          </p>
          <p>This project was made with Typescript, React, HTML and CSS</p>
        </div>
        <div className="Project7">
          <section className="ProjectHeader">ScoreBoard</section>
          <a href="https://scoreboard444.netlify.app">
            <img src={Project7} width="200" height="200"></img>
          </a>
          <p>
            Scoreboard was one of the first projects I made with typescript it
            is simple but it was to show the progress of knowledge learned just
            less than a weeks time from 0 knowledge to the project you see now.
          </p>
          <p>This project was made with Typescript, HTML and CSS</p>
        </div>
      </div>
    </main>
  )
}
