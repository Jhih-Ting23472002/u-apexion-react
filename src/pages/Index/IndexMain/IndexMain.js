import React, { useState, useEffect } from 'react';
import './IndexMain.css';
import CameraController from './CameraController';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper';
import { data } from './image_data';

const IndexMain = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleSlideChange = () => {
    setIsToggleOn(true);
    if (isToggleOn === true) {
      setIsToggleOn(false);
    }
  };
  const [image_toggle, setImageToggle] = React.useState(false);
  const [animation, setAnimation] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [sec4Animate, setsec4Animate] = React.useState(false);
  const [circle4, setCircle4] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  console.log(scrollTop);

  const imagehandler = e => {
    setIndex(e.target.dataset.value);
    setImageToggle(true);
    setAnimation(true);
    setAnimation(!animation);
    //if (image_toggle === true) {
    setTimeout(() => {
      setImageToggle(false);
      setAnimation(false);
      console.log(image_toggle);
    }, 600);

    //console.log(e);
    // }
    console.log(index);
    console.log(e.target.dataset.value);
  };
  const handleSectionScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 3750) {
      setsec4Animate(true);
      setCircle4(true);
    }
  };

  const handleGoToTop = () => {
    setScrollTop(true);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 300);
    // console.log(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSectionScroll);
  }, []);

  // {
  /* earth */
  // }
  return (
    <>
      <div
        className="indexContainer"
        onScroll={handleSectionScroll}
        style={{ position: 'relative' }}
      >
        <div>
          <CameraController></CameraController>
        </div>
        {/* -------------section1-------------- */}
        <Swiper
          onSlideChange={handleSlideChange}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper">
            <img
              className="index_swiper_img"
              src="./index_img/bg-2.png"
              alt=""
            />
            <div
              className="index_swiper_date"
              style={{
                top: isToggleOn === true ? '0' : '3%',
              }}
            >
              <div className="index_swiper_date_text">
                <p>APRIL.</p>
                <p>16</p>
                <p>/</p>
                <p>APRIL.</p>
                <p>22</p>
              </div>
            </div>
            <div
              className="index_swiper_title"
              style={{
                left: isToggleOn === true ? '0' : '3%',
              }}
            >
              <div className="index_swiper_title_text">
                <p>Aries</p>
                <p>12星座之旅</p>
              </div>
            </div>
            <div
              className="index_swiper_inner_img1"
              style={{
                opacity: isToggleOn === true ? '0.3' : '1',
              }}
            >
              <div className="index_swiper_inner_img_text">
                <img src="./index_img/geminipic.png" alt="" />
                {/* <div className="index_swiper_inner_img_text_inner"></div> */}
              </div>
            </div>
            <button className="index_swiper_btn">查看更多</button>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              className="index_swiper_img"
              src="./index_img/bg-1.png"
              alt=""
            />
            <div
              className="index_swiper_date"
              style={{
                right: isToggleOn === true ? '3%' : '0%',
              }}
            >
              <div className="index_swiper_date_text">
                <p>APRIL.</p>
                <p>12</p>
                <p>/</p>
                <p>APRIL.</p>
                <p>18</p>
              </div>
            </div>
            <div
              className="index_swiper_title"
              style={{
                left: isToggleOn === true ? '3%' : '0%',
              }}
            >
              <div className="index_swiper_title_text">
                <p>MARS-The Martian</p>
                <p>電影場景旅遊</p>
              </div>
            </div>
            <div
              className="index_swiper_inner_img2"
              style={{
                opacity: isToggleOn === true ? '1' : '0.3',
                bottom: isToggleOn === true ? '15%' : '20%',
              }}
            >
              <img
                className="index_swiper_pimg"
                src="./index_img/c-img.png"
                alt=""
              />
            </div>
            <button className="index_swiper_btn">查看更多</button>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              className="index_swiper_img4"
              src="./index_img/suit.png"
              alt=""
            />
            <div
              className="index_swiper_date4"
              style={{
                right: isToggleOn === true ? '-3%' : '0%',
              }}
            >
              <img
                className="index_swiper_dateimg"
                src="./index_img/custom_pic2.png"
                alt=""
              />
            </div>
            <div
              className="index_swiper_title4"
              style={{
                right: isToggleOn === true ? '3%' : '0%',
              }}
            >
              <img
                className="index_swiper_titleimg"
                src="./index_img/custom_text.png"
                alt=""
              />
            </div>
            <button
              className="index_swiper_btn"
              style={{ right: '6%', bottom: '8%' }}
            >
              查看更多
            </button>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              className="index_swiper_img"
              src="./index_img/bg-3.png"
              alt=""
            />
            <div
              className="index_swiper_date"
              style={{
                right: isToggleOn === true ? '3%' : '0%',
              }}
            >
              <div className="index_swiper_date_text">
                <p>APRIL.</p>
                <p>10</p>
                <p>/</p>
                <p>MAY.</p>
                <p>18</p>
              </div>
            </div>
            <div
              className="index_swiper_title"
              style={{
                left: isToggleOn === true ? '3%' : '0%',
              }}
            >
              <div className="index_swiper_title_text">
                <p>SPRING</p>
                <p>春季服飾熱賣中</p>
              </div>
            </div>
            <div
              className="index_swiper_inner_img3"
              style={{
                opacity: isToggleOn === true ? '1' : '0.3',
                right: isToggleOn === true ? '18%' : '21%',
              }}
            >
              <img
                className="index_swiper_pimg"
                src="./index_img/img2.png"
                alt=""
              />
            </div>
            <button className="index_swiper_btn">查看更多</button>
          </SwiperSlide>
        </Swiper>
        {/* -------------section1 end-------------- */}
        <div className="index_sec_two_bg">
          <div className="index_sec_two_bg_img">
            <div className="index_sec_two_bg_img_outer">
              <img src="./index_img/index_milestone.png" alt="" />
            </div>
            <div className="index_sec_two_bg_img_outer">
              <img src="./index_img/index__inner.png" alt="" />
            </div>
            <div className="index_sec_two_bg_img_outer">
              <img src="./index_img/index_trainnee.png" alt="" />
            </div>
            <div className="index_sec_two_bg_img_outer">
              <img src="./index_img/index_suveneer.png" alt="" />
            </div>
          </div>
          <div className="index_sec_two_texts_outer">
            <div className="index__sec_two_texts_outer1">
              <div className="index_sec_two_texts">
                <div className="index_sec_two_texts_title">Apexion里程碑</div>
                <div className="index_sec_two_texts_line"></div>
                <div className="index_sec_two_texts_content">
                  團隊實際場刊、太空站設立，以及Apexion第一架火箭的誕生。
                </div>
              </div>
            </div>
            <div className="index__sec_two_texts_outer1">
              <div className="index_sec_two_texts">
                <div className="index_sec_two_texts_title">火箭內部構造</div>
                <div className="index_sec_two_texts_line"></div>
                <div className="index_sec_two_texts_content">
                  2022艙內構造全新改版，氣墊座椅全面升級。
                </div>
              </div>
            </div>
            <div className="index__sec_two_texts_outer1">
              <div className="index_sec_two_texts">
                <div className="index_sec_two_texts_title">行前訓練</div>
                <div className="index_sec_two_texts_line"></div>
                <div className="index_sec_two_texts_content">
                  為克服太空無重狀態，加強高強度間歇運動以及重量訓練，瑜珈則有助適量平衡力訓練。
                </div>
              </div>
            </div>
            <div className="index__sec_two_texts_outer1">
              <div className="index_sec_two_texts">
                <div className="index_sec_two_texts_title">紀念照</div>
                <div className="index_sec_two_texts_line"></div>
                <div className="index_sec_two_texts_content">
                  簽下切結書、太空艙 內部合影....都格外值 得紀念。
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section2 end */}

        {/* section3 */}
        <div class="index_section3">
          <div class="index_team">
            {data
              .filter((v, i) => {
                if (i === parseInt(index)) {
                  return v;
                }
              })
              .map((v, i) => (
                <div class="index_team-left">
                  <div class="index_active-img">
                    <div class="index_active-img-box">
                      <img
                        className="index_bg-img"
                        alt=""
                        src={`./index_img/${v.image}`}
                        style={{
                          opacity: image_toggle === true ? '0.3' : '1',
                        }}
                        onTransitionEnd={
                          v =>
                            //     if (image_toggle === true) {
                            //       console.log(v.target.style.opacity);
                            v.target.style.opacity === 0.3

                          // }
                          //   // console.log((v.target.style.opacity = 0.3))
                        }
                      />
                    </div>
                  </div>
                  <div class="index_active-text">
                    <div class="index_active-text-box">
                      <div class="index_active-text-box-left"></div>
                      <div class="index_active-text-box-right">
                        <h2
                          // className={
                          // image_toggle === true
                          //   ? 'index_bg-img'
                          //   : 'index_bg-img do-animation'

                          className="index_bg-img do-animation"
                          style={{
                            color: '#05f2f2',
                            fontSize: '20px',
                            marginLeft: 0,
                          }}
                        >
                          {v.name}
                        </h2>
                        <h2 className="index_bg-img">{v.description}</h2>
                        <h2 className="index_bg-img">{v.description2}</h2>
                        <h2 className="index_bg-img">{v.description3}</h2>
                        <h2 className="index_bg-img">{v.level}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div class="index_team-right">
              <div class="index_right-member">
                {data.map((v, i) => (
                  <div class="index_member col-3">
                    <img
                      data-value={i}
                      class="sm-img"
                      alt=""
                      src={`./index_img/${v.image}`}
                      onClick={imagehandler}
                    />
                    <p>{v.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*
      {/* section3 end */}
        {/* section4 */}
        <div className="index-section4" style={{ position: 'relative' }}>
          <div className="index-sec-container">
            <div className="index-sec-container-top">
              <div className="index_steps">
                <div
                  className={
                    sec4Animate
                      ? 'index_steps_circle_one index_steps_circle-one'
                      : 'index_steps_circle_one'
                  }
                ></div>
                <a href="#/" className="index_step_words">
                  STEP 1 <br />
                  選擇行程
                </a>
              </div>
              <i
                className={
                  sec4Animate
                    ? 'fa-solid fa-angles-right index_next_animate_icon'
                    : 'fa-solid fa-angles-right index_next_icon'
                }
              ></i>
              <div className="index_steps">
                <div
                  className={
                    sec4Animate
                      ? 'index_steps_circle index_steps_circle-two'
                      : 'index_steps_circles'
                  }
                ></div>
                <a href="#/" className="index_step_words">
                  STEP 2<br />
                  開始訂票
                </a>
              </div>
              <i
                className={
                  sec4Animate
                    ? 'fa-solid fa-angles-right index_next_animate_icon2'
                    : 'fa-solid fa-angles-right index_next_icon'
                }
              ></i>
              <div className="index_steps">
                <div
                  className={
                    sec4Animate
                      ? 'index_steps_circle index_steps_circle-three'
                      : 'index_steps_circles'
                  }
                ></div>
                <a href="#/" className="index_step_words">
                  STEP 3<br />
                  選擇交通工具
                </a>
              </div>
              <i
                href="#/"
                className={
                  sec4Animate
                    ? 'fa-solid fa-angles-right index_next_animate_icon3'
                    : 'fa-solid fa-angles-right index_next_icon'
                }
              ></i>
              <div className="index_steps">
                <div
                  className={
                    sec4Animate && circle4
                      ? 'index_steps_circle index_steps_circle-four'
                      : 'index_steps_circles'
                  }
                ></div>
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
                  // className="sec4fixed fixed_image"
                  className={
                    sec4Animate ? 'sec4fixed fixed_image' : 'sec4fixed'
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={scrollTop ? 'indexScrollTop0' : 'indexScrollTop'}
          onClick={handleGoToTop}
        >
          <img
            src="./index_img/scrolltotop.png"
            alt=""
            style={{
              width: '40%',
              height: '40%',
              // marginBottom: '10px',
              // border: '1px solid red',
              position: 'absolute',
              top: '60%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />
          Scroll Top
        </div>
      </div>
    </>
  );
};

export default IndexMain;
