import React from 'react';

const AboutMe = (props) => {
  return(
    <div className="about-page">
      <img className="about-pic"
       src="./media/aboutMe.jpg"
       alt="aboutme" />

      <div className="about-blurbs">
        <p className="about-p">Alfonso Dumlao is a web developer from Brooklyn.  He enjoys creating sites and applications that have clean layouts, visual appeal, have smart functionality, and are user-intuitive.  With an extensive background in flagship retail management- goal-setting, calendar-planning and team-motivating come second nature to him.  Having lived and breathed visual merchandising and styling for over a decade, attention to detail and flair translates into the products he builds.</p>

        <p className="about-p">In his free time, he likes to go camping, do yoga, and sit by the fireplace with his husband, Cameron, and cat, Nina.</p>
      </div>
    </div>
  )
}

export default AboutMe;
