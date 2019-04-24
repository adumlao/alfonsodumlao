import React from 'react';

const MyBff = (props) => {
  return(
    <div className="project-page">

      <h1>My-Bff</h1>
      <p className="main-description">A social media platform for pets.</p>
      <p className="main-description-time">Timeline from conception to deployment: 6 days.</p>

      <div className="all-phones"
       style={{backgroundColor: "#3d23e6"}}>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <img className="phone-screen"
         src="./media/bff1.gif"
         alt="bff1"/>
        <div className="phone-home"></div>
       </div>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <img className="phone-screen"
         src="./media/bff2.png"
         alt="bff2"/>
        <div className="phone-home"></div>
       </div>

       <div className="phone">
        <div className="phone-dot"></div>
        <div className="phone-line"></div>
        <img className="phone-screen"
         src="./media/bff3.gif"
         alt="bff3"/>
        <div className="phone-home"></div>
       </div>

      </div>

      <p className="project-blurb">A user will be able to customize their pet's page with a profile picture, banner, location and a quick bio.  They can create blog posts or share pictures with the community as well, and have the ability to comment on other pet's posts.  Everytime the home page loads, a spotlight will be on a different pet profile and the user has the ability to visit this the featured profile and get to meet a new friend.</p>

      <div className="computer"

       style={{backgroundColor: "#3d23e6"}}>
       <div className="comp-outer-top">
        <img className="comp-inner-top"
         src="./media/bffcomp.gif"
         alt="ts1"/>
       </div>
       <div className="comp-stand"></div>
       <div className="comp-base"></div>

      </div>

      <div className="project-blurb">
      <p>Process:</p>
      <p>Planning out the database by whiteboarding models and their relations (ERD), keeps the backend organized.  Wireframes, along with a component hierarchy allows for a smooth transition when we are ready to work on the front-end.</p>
      </div>

      <div className="imgprocess-container"
      style={{backgroundColor: "#3d23e6"}} >
      <div>
        <img className="comp-hierarchy"
         src="./media/bfferd.jpg"
         alt="bfferd"/>
      </div>
      <div className="imgprocess-wf">
        <img className="wireframe"
         src="./media/bffwf1.jpg"
         alt="bffwf1"/>
        <img className="wireframe"
         src="./media/bffwf2.jpg"
         alt="bffwf2"/>
      </div>
      </div>

      <div className="project-blurb">
      <p>Code Snippet:</p>
      <p>Everytime the home page loads, a random user will be on the spotlight component.  The code below helps accomplish this.</p>
      </div>

      <div className="imgprocess-container"
      style={{backgroundColor: "#3d23e6"}} >
        <img className="bff-snippet"
         src="./media/bffsnip.png"
         alt="bffsnip"/>
      </div>


      <div className="bottom-blurb">

        <div className="bottom-description">
          <div className="tech">Technologies</div>
          <div className="tech-p">Front-end: React</div>
          <div className="tech-p">Back-end: Ruby on Rails</div>
          <div className="tech-p">Additional Libraries: Dropzone</div>
        </div>

        <div className="bottom-links">
          <a className="project-link"
           href="http://my-bff.surge.sh/"
           target="_blank"
           rel="noopener noreferrer">Check out MY-BFF</a>

           <a className="git-link"
            href="https://github.com/adumlao/my-bff"
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
          onClick={props.work}>
          <div className="scroll-arrow">&larr;</div>
          <div className="scroll-name">Previous: Work.IT</div>
         </div>
         <div className ="scroll-links"
          onClick={props.thisState}>
          <div className="scroll-arrow">&rarr;</div>
          <div className="scroll-name">Next: This.State</div>
         </div>
       </div>

    </div>
  )
}

export default MyBff;
