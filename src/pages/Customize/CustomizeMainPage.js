import React from 'react';
import './CustomizeMainPage.css';

function CustomizeMainPage() {
  return (
    <>
      <section>
        <div className="Custom-main">
          <div className="movie-select">
            <div className="Custom-suit">
              <a href="#/">
                <div className="suit-text-box">
                  <h1>FALCON HEAVY</h1>
                  <div className="Custom-box-line"></div>
                  <p>
                    With more than 5 million pounds of thrust at liftoff, Falcon
                    Heavy is the most capable rocket flying. By comparison, the
                    liftoff thrust of the Falcon Heavy equals eighteen 747
                    aircraft at full power.
                  </p>
                </div>
                <video
                  className="Custom-suit-video"
                  // src={require('./movies/suit.mp4')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
            <div className="Custom-craft">
              <a href="#/">
                <div className="craft-text-box">
                  <div className="craft-box-deshed"></div>
                  <h1>FALCON HEAVY</h1>
                  <div className="Custom-box-line"></div>
                  <p>
                    With more than 5 million pounds of thrust at liftoff, Falcon
                    Heavy is the most capable rocket flying. By comparison, the
                    liftoff thrust of the Falcon Heavy equals eighteen 747
                    aircraft at full power.
                  </p>
                </div>
                <video
                  className="Custom-craft-video"
                  // src={require('./movies/spacecraft.webm')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
            <div className="Custom-seat">
              <a href="#/">
                <div className="seat-text-box">
                  <h1>FALCON HEAVY</h1>
                  <div className="Custom-box-line"></div>
                  <p>
                    With more than 5 million pounds of thrust at liftoff, Falcon
                    Heavy is the most capable rocket flying. By comparison, the
                    liftoff thrust of the Falcon Heavy equals eighteen 747
                    aircraft at full power.
                  </p>
                </div>
                <video
                  className="Custom-seat-video"
                  // src={require('./movies/seats3.mp4')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
          </div>
          <div className="moon-box">
            <div className="Custom-moon"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomizeMainPage;
