import React from 'react';
import './IndexMain.css';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const IndexMain = () => (
  <>
    {/* section1 */}
    {/* <div className="index-section1">
      <img src="./index_img/index_section1.png" alt="" />
    </div> */}
    {/* section1 end */}
    {/* section3 */}
    {/* <div class="index_section3">
      <div class="index_team">
        <div class="index_team-left">
          <div class="index_active-img">
            <div class="index_active-img-box">
              <img class="index_bg-img" src="./index_img/person6.png" alt="" />
            </div>
          </div>
          <div class="index_active-text">
            <div class="index_active-text-box">
              <div class="index_active-text-box-left"></div>
              <div class="index_active-text-box-right">
                <h2>CEO - AMANDA</h2>
                <h2 class="animate__animated animate__bounce">
                  MILEAGE - 2000KM{' '}
                </h2>
                <h2>LEVEL - 5</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="index_team-right">
          <div class="index_right-member">
            <div class="index_member col-4">
              <img class="sm-img" src="./index_img/person1.png" alt="" />
              <p>NAME 1</p>
            </div>
            <div class="index_member col-4">
              <img class="sm-img" src="./index_img/person2.png" alt="" />
              <p>NAME 2</p>
            </div>
            <div class="index_member col-4">
              <img class="sm-img" src="./index_img/person3.png" alt="" />
              <p>NAME 3</p>
            </div>
            <div class="index_member col-4">
              <img class="sm-img" src="./index_img/person4.png" alt="" />
              <p>NAME 4</p>
            </div>
            <div class="index_member col-4">
              <img class="sm-img" src="./index_img/person5.png" alt="" />
              <p>NAME 5</p>
            </div>
            <div class="index_member col-4">
              <img class="sm-img" src="./index_img/person6.png" alt="" />
              <p>NAME 6</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* section3 end */}



    {/* section4 */}
    <div className="index-section4">
      <div className="index-sec-container">
        <div className="index-sec-container-top">
          <div className="index_steps">
            <div className="index_steps_circle index_steps_circle-one"></div>
            <a href="#/" className="index_step_words">
              STEP 1 <br />
              選擇行程
            </a>
          </div>
          <i className="fa-solid fa-angles-right index_next_icon"></i>
          <div className="index_steps">
            <div className="index_steps_circle index_steps_circle-two"></div>
            <a href="#/" className="index_step_words">
              STEP 2<br />
              開始訂票
            </a>
          </div>
          <i className="fa-solid fa-angles-right index_next_icon"></i>
          <div className="index_steps">
            <div className="index_steps_circle index_steps_circle-three"></div>
            <a href="#/" className="index_step_words">
              STEP 3<br />
              選擇交通工具
            </a>
          </div>
          <i href="#/" className="fa-solid fa-angles-right index_next_icon"></i>
          <div className="index_steps">
            <div className="index_steps_circle index_steps_circle-four"></div>
            <a href="#/" className="index_step_words">
              STEP 4<br />
              上太空
            </a>
          </div>
        </div>
        <div className="index-sec-container-bottom">
          <div className="index_section4_bottom_fixed">
            <img
              src="./index_img/section4steps.png"
              alt=""
              className="fixed_image"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default IndexMain;
