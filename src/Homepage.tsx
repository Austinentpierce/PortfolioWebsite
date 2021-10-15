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
        <img src={Project1} width="200" height="200"></img>
        <section>The Color Picker</section>
      </div>
      <div className="Project2">
        <img src={Project2} width="200" height="200"></img>
        <section>ReactoCats</section>
      </div>
      <div className="Project3">
        <img src={Project3} width="200" height="200"></img>
        <section>Rock Paper Scissors Lizard Spock</section>
      </div>
      <div className="Project4">
        <img src={Project4} width="200" height="200"></img>
      </div>
      <div className="Project5">
        <img src={Project5} width="200" height="200"></img>
      </div>
      <div className="Project6">
        <img src={Project6} width="200" height="200"></img>
      </div>
      <div className="Project7">
        <img src={Project7} width="200" height="200"></img>
      </div>
    </main>
  )
}
