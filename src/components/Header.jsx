import React from 'react';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header-content">
              <div className="header-section">
                <h2>Hello, I am</h2>
                <h1>Daniel Shin</h1>
                <p>A Full-Stack Software Engineer</p>
                <div className="header-buttons">
                  <a href="#footer" className="btn btn-outline">
                    Let's Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img className="header-image" src="./image/main-image.png" alt=""/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;