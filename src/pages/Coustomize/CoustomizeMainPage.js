import React from 'react';
import './CoustomizeMainPage.css';

function CoustomizeMainPage() {
  return (
    <>
      <section>
        <div className="Coustom-main">
          <div className="movie-select">
            <div className="Coustom-suit">
              <a href="#/">
                <div className="suit-text-box">
                  <h1>FALCON HEAVY</h1>
                  <hr />
                  <p>
                    With more than 5 million pounds of thrust at liftoff, Falcon
                    Heavy is the most capable rocket flying. By comparison, the
                    liftoff thrust of the Falcon Heavy equals eighteen 747
                    aircraft at full power.
                  </p>
                </div>
                <video
                  className="Coustom-suit-video"
                  src={require('./movies/suit.mp4')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
            <div className="Coustom-craft">
              <a href="#/">
                <div className="craft-text-box">
                  <div className="craft-box-deshed"></div>
                  <h1>FALCON HEAVY</h1>
                  <hr />
                  <p>
                    With more than 5 million pounds of thrust at liftoff, Falcon
                    Heavy is the most capable rocket flying. By comparison, the
                    liftoff thrust of the Falcon Heavy equals eighteen 747
                    aircraft at full power.
                  </p>
                </div>

                <video
                  className="Coustom-craft-video"
                  src={require('./movies/spacecraft.webm')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
            <div className="Coustom-seat">
              <div className="seat-text-box">
                <h1>FALCON HEAVY</h1>
                <hr />
                <p>
                  With more than 5 million pounds of thrust at liftoff, Falcon
                  Heavy is the most capable rocket flying. By comparison, the
                  liftoff thrust of the Falcon Heavy equals eighteen 747
                  aircraft at full power.
                </p>
              </div>
              <a href="#/">
                <video
                  className="Coustom-seat-video"
                  src={require('./movies/seats3.mp4')}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                ></video>
              </a>
            </div>
          </div>
          <div className="moon-box">
            <div className="Coustom-moon"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoustomizeMainPage;
