import React from 'react';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">

        <div className="common">
          <h1 className="about-title">About Me</h1>
          <div className="underline-border"></div>
        </div>

        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about-image">
              <img src="./image/IMG_5746 copy.png" alt="Daniel Shin" />
            </div>
          </div>

          <div className="col-6">
            <div className="about-info">
              <h1>Fullstack Software Engineer</h1>
              <div className="about-info">
                <p>
                  I'm a fullstack software engineer with a passion for problem-solving and creativity. Prior to software engineering, I was on the pre-medical track at Johns Hopkins University. After being exposed to programming, I decided to apply to Hack Reactor's Software Engineering Immersive bootcamp, which I completed in July 2022. I love the challenges coding brings, along with the incessant learning. I am eager to continue my learning and grow as a software engineer!

                  I am now open to work and looking for new job opportunities!
                </p>
                <div className="about-buttons">
                  <a className="btn about-btn-outline" href="resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;