import React from 'react';

const ProjectsList = (props) => {


  return(
    <div className= "project-column">


    <div className="project-row">
    <div onClick={props.myBff} className="hvrbox" style={{backgroundColor: "#3d23e6"}}>
    <img className="bff" src="./media/header.gif" alt="bff"/>
	     <div className="hvrbox-layer_top">
		   <div className="hvrbox-text">My-Bff</div>
	     </div>
    </div>

    <div onClick={props.thisState} className="hvrbox" style={{backgroundColor: "#aca3a32e"}}>
    <img className="this-state" src="./media/thisstate.gif" alt="thisstate"/>
	     <div className="hvrbox-layer_top">
		   <div className="hvrbox-text">This.State</div>
	     </div>
    </div>
    </div>

    <div className="project-row">
    <div onClick={props.kudos} className="hvrbox" style={{backgroundColor: "#379683"}}>
    <img className="this-state" src="./media/kudos.png" alt="kudos"/>
	     <div className="hvrbox-layer_top">
		   <div className="hvrbox-text">Kudos</div>
	     </div>
    </div>

    <div onClick={props.work} className="hvrbox" style={{backgroundColor: "#1500ff"}}>
    <img className="this-state" src="./media/work.png" alt="work"/>
	     <div className="hvrbox-layer_top">
		   <div className="hvrbox-text">Work</div>
	     </div>
    </div>
    </div>


    </div>
  )
}

export default ProjectsList;
