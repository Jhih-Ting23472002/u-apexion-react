import React from 'react';
import './CustomizeCraft.css';

function CustomizeCraft() {
  return (
    <>
      <section className="Customcraft-page-view">
        <div className="craft-tools">
          <div className="craft-step">
            <img src={require('./images/spacecraft-step.png')} alt="" />
          </div>
          <div className="craft-img">
            <img src={require('./images/spacecraft.png')} alt="" />
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

        <div className="suit-card">
          <h1>請選擇太空船外觀</h1>
          <h3>Customize Your SpaceCraft</h3>
          <h2>20,000$</h2>
          <input type="text" />
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

export default CustomizeCraft;
