import React from 'react';
import './CoustomizeMainPage.css';

function CoustomizeMainPage() {
  return (
    <>
      <section>
        <div className="main">
          <div className="movie-select">
            <div className="suit-text-box">
              <div className="suit-text-card"></div>
            </div>
            <div className="seat-text-box"></div>
            <div className="suit">
              <a href="#/">
                <video
                  src={require('./movies/suit.mp4')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
            <div className="craft-text-box">
              <div className="craft-text-card">
                <h1>FALCON HEAVY</h1>
                <hr />
                <p>
                  With more than 5 million pounds of thrust at liftoff, Falcon
                  Heavy is the most capable rocket flying. By comparison, the
                  liftoff thrust of the Falcon Heavy equals eighteen 747
                  aircraft at full power.
                </p>
              </div>
            </div>
            <div className="craft">
              <a href="#/">
                <video
                  src={require('./movies/spacecraft.webm')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
            <div className="seat">
              <a href="#/">
                <video
                  src={require('./movies/seats3.mp4')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
          </div>
          <div className="moon-box">
            <div className="moon"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoustomizeMainPage;
