import React from 'react';

const Work = (props) => {
  return(
    <div className="project-page">

      <h1>Work.IT</h1>
      <p className="main-description">A collaborative project between three Web Developers from General Assembly.</p>

      <div className="computer"
       style={{backgroundColor: "#1500ff"}}>

       <div className="comp-outer-top">
        <img className="comp-inner-top"
         src="./media/workcomp.gif"
         alt="ts1"/>
       </div>
       <div className="comp-stand"></div>
       <div className="comp-base"></div>

      </div>

      <p className="project-blurb">Work.IT is a job search app for the tech industry. Users may register/login and browse recent job posts. Additionally, a user may view more information on both the job or the company hiring.  The goal of this collaboration is to create a full-stack application- with table models that are related in the server.</p>

      <div className="computer"
       style={{backgroundColor: "#1500ff"}}>

       <div className="comp-outer-top">
        <img className="comp-inner-top"
         src="./media/worklogin.png"
         alt="ts1"/>
       </div>
       <div className="comp-stand"></div>
       <div className="comp-base"></div>

      </div>

      <div className="project-blurb">
      <p>Process:</p>
      <p>Whiteboarding models and their relations (ERD), keeps the backend aligned.  A component hierarchy breaks down which developer will work on a particular component.  Wireframes allow for additional reference to create continuity.</p>
      </div>

      <div className="imgprocess-container"
      style={{backgroundColor: "#1500ff"}} >
      <div>
        <img className="workwf"
         src="./media/workwf.jpg"
         alt="workwf"/>
      </div>
      <div className="imgprocess-wf">
        <img className="workerd"
         src="./media/workerd.jpg"
         alt="workerd"/>
        <img className="workerd"
         src="./media/workhier.jpg"
         alt="workhier"/>
      </div>
      </div>

      <div className="bottom-blurb">

       <div className="bottom-description">
        <div className="tech">Technologies</div>
        <div className="tech-p">Front-end: React</div>
        <div className="tech-p">Back-end: Sequelize, Express, PSQL</div>
        <div className="tech-p">Additional Libraries: Dropzone</div>
       </div>

       <div className="bottom-links">
        <a className="git-link"
         href="https://github.com/BrianCarroll112/WorkIt"
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
         onClick={props.kudos}>
         <div className="scroll-arrow">&larr;</div>
         <div className="scroll-name">Previous: Kudos</div>
        </div>
        <div className ="scroll-links"
         onClick={props.myBff}>
         <div className="scroll-arrow">&rarr;</div>
         <div className="scroll-name">Next: My-Bff</div>
        </div>
      </div>

    </div>
  )
}

export default Work;
