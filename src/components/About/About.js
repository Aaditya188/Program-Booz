import React from 'react';

const About = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="max-width-container mx-auto py-3 pt-md-5 mt-md-5 row justify-content-center">
        <div className="col-auto px-4 mt-3">
          <div className="card w-100 bg-white shadow-lg mx-auto" style={{ maxWidth: '350px' }}>
            <img
              src='%PUBLIC_URL%/images/home-bg.jpg'
              className="card-img-top mx-auto py-3 mx-auto"
              style={{ maxWidth: '200px', borderRadius: '20rem' }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Aaditya Prakash</h5>
              <p className="card-text">Full stack developer, student at SRMIST. (Developer of Portal)</p>
              <a
                href="https://Aaditya188.github.io/"
                className="btn btn-outline-info px-4 mr-2 btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/prakashaaditya18/"
                className="btn btn-outline-info px-4 btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="col-auto px-4 mt-3">
          <div className="card bg-white shadow-lg mx-auto" style={{ maxWidth: '350px' }}>
            <img
              src='%PUBLIC_URL%/images/logos/logo.png'
              className="card-img-top mx-auto py-3 mx-auto"
              style={{ maxWidth: '200px' }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">ProgramBooz</h5>
              <p className="card-text">It is plaform for enhacing your competitive coding skills</p>
              <a
                href="https://github.com/Aaditya188/HackInNorth---Ctrl-Alt-Elite"
                className="btn btn-outline-info px-4 btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://github.com/Aaditya188/HackInNorth---Ctrl-Alt-Elite/issues"
                className="btn btn-outline-info px-2 ml-2 btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report Issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
