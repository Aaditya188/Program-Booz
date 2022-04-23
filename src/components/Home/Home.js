import React from 'react';
import Visit from './Visit';
import '../../css/home-bg.css';

function Home() {
  return (
    <div id="home">
      <div className="head bg-info home-bg">
        <div className="home-content text-white">
          <div className="home-shadow-box px-3 py-4">
            <h1> ProgramBooz </h1>
            <div
              className="home-text d-inline-block"
              style={{ maxWidth: '700px', fontSize: '1rem', textAlign: 'justify' }}
            >
              It is a platform to practice questions on different competetive wesites with lot of features like category
              wise questions on Codforces. You can also find company wise problems on Company page.
            </div>
          </div>
        </div>
        <Visit />
      </div>
    </div>
  );
}

export default Home;
