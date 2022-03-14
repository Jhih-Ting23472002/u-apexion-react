import React from 'react';
import './CustomizeSuit.css';
function CustomizeSuit() {
  return (
    <>
      <section className="Customsuit-page-view">
        <div className="back-circle">
          <div className="image-mirrow">
            <img
              className="image-mirrow-img"
              src={require('./images/spacesuit-white.png')}
              alt=""
            />
          </div>
        </div>
        <svg
          className="left-page-svg"
          viewBox="0 0 913 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-5 0L420 0L200 1024L-5 1024L-5 0Z" fill="#323232" />
        </svg>
        <div className="suit-circle">
          <svg
            className="suit-circle-step"
            viewBox="0 0 512 675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M505 46.7082C455.717 18.2707 398.53 2 337.543 2C152.227 2 2 152.228 2 337.543C2 522.858 152.227 673.086 337.543 673.086C398.53 673.086 455.717 656.815 505 628.378"
              stroke="#595959"
              stroke-width="3"
              stroke-linecap="round"
            />
            <circle cx="63" cy="146" r="10" fill="#595959" />
            <circle cx="504" cy="628" r="8" fill="#595959" />
            <circle cx="154" cy="619" r="10" fill="#595959" />
            <circle cx="504" cy="49" r="8" fill="#595959" />
          </svg>
          <button className="suit-circle-btn">完成送出</button>
          <div className="maybe-use-canvus">
            <img src={require('./images/spacesuit-white.png')} alt="" />
          </div>
        </div>
        <div className="suit-card">
          <h1>請選擇太空服外觀</h1>
          <h3>Customize Your SpaceSuit</h3>
          <h2>25,000$</h2>
          <div className="suit-select-color">
            <div className="white suit-flag"></div>
            <div className="orange suit-flag"></div>
            <div className="blue suit-flag"></div>
          </div>
          <div className="country-select">
            <div className="suit-flag">
              <img src={require('./images/taiwan.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/taiwan.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/taiwan.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/taiwan.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/taiwan.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/taiwan.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/taiwan.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/taiwan.png')} alt="" />
            </div>
            <div className="suit-flag">
              <div className="no-select">
                <img src={require('./images/noselect.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="mark-select">
            <div className="suit-flag">
              <img src={require('./images/space-mark-01.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/space-mark-02.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/space-mark-03.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/space-mark-04.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/space-mark-05.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/space-mark-06.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/space-mark-07.png')} alt="" />
            </div>
            <div className="suit-flag">
              <img src={require('./images/space-mark-08.png')} alt="" />
            </div>
            <div className="suit-flag">
              <div className="no-select">
                <img src={require('./images/noselect.png')} alt="" />
              </div>
            </div>
          </div>
        </div>

        <svg
          className="right-page-svg"
          viewBox="0 0 913 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M918 1024L6.10352e-05 1900L410 -5.79779e-05L918 0.000244141L918 1024Z"
            fill="#000000"
          />
        </svg>
      </section>
    </>
  );
}

export default CustomizeSuit;
