import React from 'react';

const ThisState = (props) => {
  return(
    <div className="project-page">

      <h1>This.State</h1>
      <p className="main-description">A site that gives the public access to real-time bills and legislation passed by Congress, giving additional insight on how each party voted.</p>
      <p className="main-description-time"> Timeline from research to deployment: 3 days.</p>

      <div className="all-phones"
       style={{backgroundColor: "grey"}}>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <img className="phone-screen"
         src="./media/ts2.png"
         alt="ts2"/>
        <div className="phone-home"></div>
       </div>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <img className="phone-screen"
         src="./media/ts1.gif"
         alt="ts1"/>
        <div className="phone-home"></div>
       </div>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <img className="phone-screen"
         src="./media/ts3.png"
         alt="ts3"/>
        <div className="phone-home"></div>
       </div>

      </div>

      <p className="project-blurb">A directory of every member of the house and senator's contact information, as well as statistics on each of their voting records (including how many votes they've missed, their percentage of voting against party), will be available to the user. They can search for a legislator by state or by representative id.  A bills archive will also enable the user to search for a piece of legislation by keyword. Finally, a press release section connects the public with the most up-to-date memos from our lawmakers.</p>

      <div className="computer"
       style={{backgroundColor: "grey"}}>

       <div className="comp-outer-top">
        <img className="comp-inner-top"
         src="./media/tscomp.gif"
         alt="ts1"/>
       </div>
       <div className="comp-stand"></div>
       <div className="comp-base"></div>

      </div>

      <div className="bottom-blurb">

       <div className="bottom-description">
        <div className="tech">Technologies</div>
        <div className="tech-p">Front-end: React</div>
        <div className="tech-p">API used: ProPublica Congress</div>
       </div>

       <div className="bottom-links">
        <a className="project-link"
         href="http://this.state.surge.sh/"
         target="_blank"
         rel="noopener noreferrer">check out THIS.STATE
        </a>
        <a href="https://github.com/adumlao/this.state"
         target="_blank"
         rel="noopener noreferrer">
         <div className="project-git"
          style={{backgroundImage: 'url(/media/github.png)'}}/>
        </a>

       </div>

      </div>

      <div className="scroll">
        <div className="scroll-links"
         onClick={props.myBff}>
         <div className="scroll-arrow">&larr;</div>
         <div className="scroll-name">Previous: My-Bff</div>
        </div>
        <div className ="scroll-links"
         onClick={props.kudos}>
         <div className="scroll-arrow">&rarr;</div>
         <div className="scroll-name">Next: Kudos</div>
        </div>
      </div>

    </div>
  )
}

export default ThisState;
