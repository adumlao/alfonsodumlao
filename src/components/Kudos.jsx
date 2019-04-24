import React from 'react';

const Kudos = (props) => {
  return(
    <div className="project-page">

      <h1>Kudos</h1>
      <p className="main-description">A collaborative project with the UX Design team from General Assembly. </p>
      <p className="main-description-time"> Timeline from design hand-off to deployment: 4 days.</p>

      <div className="all-phones"
      style={{backgroundColor: "#379683"}}>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <div className="phone-screen"
         style={{backgroundImage: 'url(/media/kudosphone1.png)'}}/>
        <div className="phone-home"></div>
       </div>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <div className="phone-screen"
         style={{backgroundImage: 'url(/media/kudosphone2.gif)'}}/>
        <div className="phone-home"></div>
       </div>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <div className="phone-screen"
         style={{backgroundImage: 'url(/media/kudosphone3.png)'}}/>
        <div className="phone-home"></div>
       </div>

      </div>

      <p className="project-blurb">A responsive web application that tracks your spending.  A user will be able to enter in a weekly budget and pick categories that they want to track.  The app will automatically generate a budget for each category.  The user inputs his spending and the tracker bar changes depending on spending.  A "piggy bank" graphic provides an additional visual for remaining total budget.</p>

      <div className="computer"
      style={{backgroundColor: "#379683"}}>

       <div className="comp-outer-top">
        <img className="comp-inner-top"
         src="./media/kudoscomputer.gif"
         alt="kcomp"/>
       </div>
       <div className="comp-stand"></div>
       <div className="comp-base"></div>

      </div>

      <div className="project-blurb">
      <p>Process:</p>
      <p>The UX Design team and the Development team propose an app that solves a client's painpoint in the financial field.  Keeping in mind a deadline of two weeks, one week for design and one week for development, the team comes up with an MVP and approves wireframes and concepts following a Design Studio exercise.  A Zeplin board is handed off by the desing team to the development team for wireframes and styleguides.</p>
      </div>

      <div className="imgprocess-container"
      style={{backgroundColor: "#379683"}} >
      <div className="imgprocess-wf">
        <img className="kudoswf1"
         src="./media/kudoswf1.png"
         alt="kudoswf1"/>
        <img className="kudoswf2"
         src="./media/kudoswf2.png"
         alt="kudoswf2"/>
      </div>
      </div>

      <div className="project-blurb">
      <p>Code Snippet:</p>
      <p>The code below executes the bar graph visual for a category changing lengths after a user inputs expenses.  The bars also change color depending on how much a user has left to spend.</p>
      </div>

      <div className="kudoscode"
      style={{backgroundColor: "#379683"}} >
        <img className="kudossnip1"
         src="./media/kudossnip1.png"
         alt="kudossnip1"/>
         <img className="kudssnip2"
          src="./media/kudossnip2.png"
          alt="kudssnip2"/>
      </div>

      <div className="bottom-blurb">

       <div className="bottom-description">
        <div className="tech">Technologies</div>
        <div className="tech-p">Front-end: React</div>
        <div className="tech-p">Back-end: Sequelize, Express, PSQL</div>
       </div>

       <div className="bottom-links">
        <a className="project-link"
         href="http://kudoskudos.surge.sh/"
         target="_blank"
         rel="noopener noreferrer">Check out KUDOS
        </a>
        <a className="git-link"
         href="https://github.com/mikebrown4000/Kudos-App"
         target="_blank"
         rel="noopener noreferrer">
         <div>View Github</div>
         <div className="project-git"
          style={{backgroundImage: 'url(/media/github.png)'}}/>
        </a>

       </div>

      </div>

      <div className="scroll">
        <div className="scroll-links"
         onClick={props.thisState}>
         <div className="scroll-arrow">&larr;</div>
         <div className="scroll-name">Previous: This.State</div>
        </div>
        <div className ="scroll-links"
         onClick={props.work}>
         <div className="scroll-arrow">&rarr;</div>
         <div className="scroll-name">Next: Work.IT</div>
        </div>
      </div>

    </div>
  )
}

export default Kudos;
