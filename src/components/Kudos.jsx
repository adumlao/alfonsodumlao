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
