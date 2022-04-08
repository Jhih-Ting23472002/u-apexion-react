import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomizeMainPage.css';
import suitMovie from './movies/suit.mp4';
import craftMovie from './movies/spacecraft.webm';
import seatMovie from './movies/seats3.mp4';

function CustomizeMainPage() {
  const [start, setStart] = useState(false);

  return (
    <>
      <section>
        <div className="Custom-main">
          <div className="movie-select">
            <div className="Custom-suit">
              <Link to="/customize-suit">
                <div className="movie-select-a">
                  <div className="suit-text-box">
                    <h1>太空服訂製</h1>
                    <div className="Custom-box-line"></div>
                    <p>
                      U-Apexion精細設計之太空服是由義大利知名設計師- Michael
                      Change Chen.精心設計，並由德國Tina Hohoho.與西班牙-Amanda
                      Chu.聯手打造，排汗又好穿，一個字...讚！
                    </p>
                  </div>
                  <video
                    onMouseEnter={e => {
                      const newStart = true;
                      setStart(e.currentTarget.play(newStart));
                      // console.log(e.currentTarget.play());
                    }}
                    onMouseLeave={e => {
                      const newStart = false;
                      setStart(e.currentTarget.pause(newStart));
                      // console.log(e.currentTarget.pause());
                    }}
                    className="Custom-suit-video"
                    src={suitMovie}
                    playsInline=""
                    loop="loop"
                    autoPlay=""
                    muted
                  ></video>
                </div>
              </Link>
            </div>
            <div className="Custom-craft">
              <Link to="/customize-suit">
                <div className="movie-select-a">
                  <div className="craft-text-box">
                    <div className="craft-box-deshed"></div>
                    <h1>太空船訂製</h1>
                    <div className="Custom-box-line"></div>
                    <p>
                      U-Apexion 的太空船是經由U-Apexion團隊- Alber Chen. - Sam
                      Chen.與- Troy
                      Guo.為貴賓一字一圖案，親手提筆製作而成，絕對包貴客滿意...一樣讚！
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
                    autoPlay=""
                    muted
                  ></video>
                </div>
              </Link>
            </div>
            <div className="Custom-seat">
              <Link to="/customize-suit">
                <div className="movie-select-a">
                  <div className="seat-text-box">
                    <h1>太空座椅訂製</h1>
                    <div className="Custom-box-line"></div>
                    <p>
                      U-Apexion精細設計之太空座椅是由立陶宛知名設計師-Ting
                      Young.精心設計，座位以三色電鍍效果呈現，並由德國Tina
                      Hohoho.與西班牙-Amanda Chu.聯手打造，美而精細，優秀！
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
                    autoPlay=""
                    muted
                  ></video>
                </div>
              </Link>
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
