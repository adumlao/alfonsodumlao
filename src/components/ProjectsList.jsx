import React from 'react';

const ProjectsList = (props) => {
  return(
    <div>
    <div>ProjectsList</div>
    <div onClick={props.myBff}>My-Bff</div>
    <div onClick={props.thisState}>This.State</div>
    <div onClick={props.kudos}>Kudos</div>
    <div onClick={props.work}>Work</div>
    </div>
  )
}

export default ProjectsList;
