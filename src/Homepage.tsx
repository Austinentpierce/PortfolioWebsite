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
    <main className="HomepageImages">
      <div className="Project1">
        <a href="https://thechangingcolorpicker.netlify.app">
          <img src={Project1} width="200" height="200"></img>
        </a>
        <section>The Color Picker</section>
      </div>
      <div className="Project2">
        <a href="https://reactocats.netlify.app">
          <img src={Project2} width="200" height="200"></img>
        </a>
        <section>ReactoCats</section>
      </div>
      <div className="Project3">
        <a href="https://roshambo22.netlify.app">
          <img src={Project3} width="200" height="200"></img>
        </a>
        <section>Rock Paper Scissors</section>
      </div>
      <div className="Project4">
        <a href="https://snowmangame.netlify.app">
          <img src={Project4} width="200" height="200"></img>
        </a>
        <section>Snowman Game</section>
      </div>
      <div className="Project5">
        <a href="https://plantsrecordsandcrystals.herokuapp.com/ ">
          <img src={Project5} width="200" height="200"></img>
        </a>
        <section>Plants, Records and Crystals</section>
      </div>
      <div className="Project6">
        <a href="https://avg-crypto-currency-tracker.netlify.app">
          <img src={Project6} width="200" height="200"></img>
        </a>
        <section>Crypto Tracker</section>
      </div>
      <div className="Project7">
        <a href="https://scoreboard444.netlify.app">
          <img src={Project7} width="200" height="200"></img>
        </a>
        <section>ScoreBoard</section>
      </div>
    </main>
  )
}
