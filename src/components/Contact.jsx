import React from 'react';

const Contact = (props) => {
  return(
    <div className="contact-page">
      <h1>Let's Collaborate!</h1>

      <div className="contact-block">
        <div className="contact-icon"
         id="email"
         style={{backgroundImage: 'url(/media/email.png)'}}>
        </div>
        <a className="contact-link"
         href="mailto:alfonso.dumlao@gmail.com">alfonso.dumlao@gmail.com</a>
      </div>

      <div className="contact-block">
        <div className="contact-icon"
         id="email"
         style={{backgroundImage: 'url(/media/github.png)'}}></div>
        <a className="contact-link"
         href="https://github.com/adumlao"
         target="_blank"
         rel="noopener noreferrer">github.com/adumlao</a>
      </div>

      <div className="contact-block">
        <div className="contact-icon"
         style={{backgroundImage: 'url(/media/linkdin.png)'}}>
        </div>
        <a className="contact-link"
         href="https://www.linkedin.com/in/alfonsodumlao/"
         target="_blank"
         rel="noopener noreferrer">@alfonsodumlao</a>
      </div>

      <div className="contact-block">
        <div className="contact-icon"
         style={{backgroundImage: 'url(/media/insta.png)'}}>
        </div>
        <a className="contact-link"
         href="https://www.instagram.com/alfiedoodle/"
         target="_blank"
         rel="noopener noreferrer">@alfiedoodle</a>
      </div>

      <div className="contact-block">
        <div className="contact-icon"
         style={{backgroundImage: 'url(/media/twitter.png)'}}></div>
        <a className="contact-link"
         href="https://twitter.com/AlfonsoDumlao"
         target="_blank"
         rel="noopener noreferrer">@AlfonsoDumlao</a>
      </div>

    </div>
  )
}

export default Contact;
