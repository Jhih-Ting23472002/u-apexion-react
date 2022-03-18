import React, { useState } from 'react';
import './CustomizeMainPage.css';
import suitMovie from './movies/suit.mp4';
import craftMovie from './movies/spacecraft.webm';
import seatMovie from './movies/seats3.mp4';
// const mouseEnter = e => {
//   e.currentTarget.play();
//   this.setStart({ isPlaying: true });
//   console.log('e--', e);
// };

function CustomizeMainPage() {
  const [start, setStart] = useState(false);

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
                  onMouseEnter={e => {
                    const newStart = true;
                    setStart(e.currentTarget.play(newStart));
                    console.log(e.currentTarget.play());
                  }}
                  onMouseLeave={e => {
                    const newStart = false;
                    setStart(e.currentTarget.pause(newStart));
                    console.log(e.currentTarget.pause());
                  }}
                  className="Custom-suit-video"
                  src={suitMovie}
                  playsInline=""
                  loop="loop"
                  autoPlay=""
                  muted
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
                  onMouseEnter={e => {
                    const newStart = true;
                    setStart(e.currentTarget.play(newStart));
                    console.log(e.currentTarget.play());
                  }}
                  onMouseLeave={e => {
                    const newStart = false;
                    setStart(e.currentTarget.pause(newStart));
                    console.log(e.currentTarget.pause());
                  }}
                  className="Custom-craft-video"
                  src={craftMovie}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                  muted
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
                  onMouseEnter={e => {
                    const newStart = true;
                    setStart(e.currentTarget.play(newStart));
                    console.log(e.currentTarget.play());
                  }}
                  onMouseLeave={e => {
                    const newStart = false;
                    setStart(e.currentTarget.pause(newStart));
                    console.log(e.currentTarget.pause());
                  }}
                  className="Custom-seat-video"
                  src={seatMovie}
                  playsInline=""
                  loop="loop"
                  autoPlay="autoplay"
                  muted
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
