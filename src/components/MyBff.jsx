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
           rel="noopener noreferrer">check out MY-BFF</a>

           <a href="https://github.com/adumlao/my-bff"
            target="_blank"
            rel="noopener noreferrer">
              <div className="project-git"
               style={{backgroundImage: 'url(/media/github.png)'}}/>
           </a>
        </div>

       </div>

       <div className="scroll">
         <div className="scroll-links"
          onClick={props.work}>
          <div className="scroll-arrow">&larr;</div>
          <div>Previous: Work.IT</div>
         </div>
         <div className ="scroll-links"
          onClick={props.thisState}>
          <div className="scroll-arrow">&rarr;</div>
          <div>Next: This.State</div>
         </div>
       </div>

    </div>
  )
}

export default MyBff;
