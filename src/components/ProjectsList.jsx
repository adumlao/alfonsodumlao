import React from 'react';

const ProjectsList = (props) => {
  return(
  <div className= "project-column">

    <div className="project-row">

      <div className="hvrbox"
       style={{backgroundColor: "#3d23e6"}}>
       <img className="bff"
        src="./media/header.gif"
        alt="bff"/>
	      <div className="hvrbox-layer_top">
		      <div className="hvrbox-text">
            <h3>My-Bff</h3>
            <p>A social platform for pets.</p>
            <p onClick={props.myBff}
             className="hover-link">View Project</p>
          </div>
        </div>
      </div>

      <div className="hvrbox"
       style={{backgroundColor: "#aca3a32e"}}>
       <img className="this-state"
        src="./media/thisstate.gif"
        alt="thisstate"/>
	      <div className="hvrbox-layer_top">
		      <div className="hvrbox-text">
            <h3>This.State</h3>
            <p>Breaking updates from Congress.</p>
            <p onClick={props.thisState}
             className="hover-link">View Project</p>
          </div>
	      </div>
      </div>

    </div>

    <div className="project-row">

      <div className="hvrbox"
       style={{backgroundColor: "#379683"}}>
       <img className="this-state"
        src="./media/kudos.png"
        alt="kudos"/>
	      <div className="hvrbox-layer_top">
		      <div className="hvrbox-text">
            <h3>Kudos</h3>
            <p>A personalized budgeting web application.</p>
            <p onClick={props.kudos}
             className="hover-link">View Project</p>
          </div>
	      </div>
      </div>

      <div className="hvrbox"
       style={{backgroundColor: "#1500ff"}}>
       <img className="this-state"
        src="./media/work.png"
        alt="work"/>
	      <div className="hvrbox-layer_top">
		      <div className="hvrbox-text">
            <h3>Work.It</h3>
            <p>Postings for job-seekers in the tech industry.</p>
            <p onClick={props.work}
             className="hover-link">View Project</p>
          </div>
	      </div>
      </div>

    </div>

  </div>
  )
}

export default ProjectsList;
