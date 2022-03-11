import React from 'react';
import './TravelNotes.css';
import Carousel from 'react-bootstrap/Carousel';

function TravelNotes() {
  return (
    <>
      <div className="container travelnotescontainer">
        <div className="nav2" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              柴達星
            </li>
            <li className="breadcrumb-item">
              <a href="#/">002星</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">003星</a>
            </li>
            <li className="breadcrumb-item">
              <a href="./page3.2.html">泰坦星</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">005星</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">006星</a>
            </li>
          </ol>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>First slide label</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>Second slide label</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>Third slide label</h2>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* 1st group */}

        <div className="content">
          <h1 className="blue-text lighten-1 header">柴達星Xandar</h1>
        </div>
        <div className="blog-card">
          <div className="meta">
            <div className="photo photo_1"></div>
            <ul className="details"></ul>
          </div>
          <div className="description">
            <h2 className="descriptionh2">DAY 1</h2>
            <h3 className="descriptionh3">Opening a door to the future</h3>
            <p className="descriptionp">
              今日集合於USA太空發射站，專人協辦出境手續後，搭乘豪華客機飛往USA。抵達後，辦理入關手續，夜宿發射站。
              <br />
              <br />
              貼心提醒
              <br />
              1.第一天搭飛機，建議您穿著寬鬆的衣物及舒適的鞋子。
              <br />
              2.由於航程關係，須在飛機上過夜，請攜帶口罩、眼罩、空水瓶、保暖外套，睡個好眠，培養體力。
            </p>
          </div>
        </div>

        <div className="blog-card alt">
          <div className="meta">
            <div className="photo photo_2"></div>
            <ul className="details"></ul>
          </div>
          <div className="description">
            <h2 className="descriptionh2">DAY 2</h2>
            <h3 className="descriptionh3">
              Java is not the same as JavaScript
            </h3>
            <p className="descriptionp">
              國際太空站
              <br />
              <br />
              太空中的休息地，遨遊在太空上的建築物，有許多獨特的主題商店、酒吧及餐廳，是一處規劃完善的購物及娛樂地區，在此可以一起漫遊太空銀河。
            </p>
          </div>
        </div>

        {/* 2nd group */}

        <div className="blog-card">
          <div className="meta">
            <div className="photo photo_3"></div>
            <ul className="details"></ul>
          </div>
          <div className="description">
            <h2 className="descriptionh2">DAY 3</h2>
            <h3 className="descriptionh3">Opening a door to the future</h3>
            <p className="descriptionp">
              引人入勝的娛樂活動
              <br />
              <br />
              太空站上配備多個場館，以震撼的視聽效果為您呈現最高水準的娛樂節目。
              您會發現自己深深受到美食與爵士樂完美結合的魅力吸引。或在夜空下欣賞最愛的電影，到我們的拉斯維加斯風賭場，提供適合各種場合的多種娛樂選項，讓您好好寵愛自己。
            </p>
          </div>
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo photo_4"></div>
            <ul className="details"></ul>
          </div>
          <div className="description">
            <h2 className="descriptionh2">DAY 4</h2>
            <h3 className="descriptionh3">
              Java is not the same as JavaScript
            </h3>
            <p className="descriptionp">
              太空艙內的自由活動1
              <br />
              <br />
              一趟與宇宙銀河近距離接觸的知性與感性之旅。您會對眼前這已經歷好幾光年的銀河，升起一份對大自然的崇敬，非常值得觀賞。
            </p>
          </div>
        </div>

        {/* 3rd group */}

        <div className="blog-card">
          <div className="meta">
            <div className="photo photo_5"></div>
            <ul className="details"></ul>
          </div>
          <div className="description">
            <h2 className="descriptionh2">DAY 5</h2>
            <h3 className="descriptionh3">Opening a door to the future</h3>
            <p className="descriptionp">
              抵達柴達星h928-1區
              <br />
              <br />
              柴達星上有豐富的動植物生態與瀑布地形景觀，海拔在230~800公尺之間，加上h928-1區內被內洞溪流貫，整體氣溫潮濕而溫暖，從h928-1區大門口進入後第一條觀瀑步道的短短數百公尺內，就能發現將近60-70種蕨類。
              <br />
              <br />
              h928-1區內最重要的主角就是在位於觀瀑步道終點的內洞瀑布，上下層不同的風貌帶給遊人不同的多元享受!
              <br />
              <br />
              這一片生氣盎然的森林世界，比起原先想像的靜謐來得熱鬧豐富，難得一見的草原曠世美景令人畢生難忘。
            </p>
          </div>
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo photo_6"></div>
            <ul className="details"></ul>
          </div>
          <div className="description">
            <h2 className="descriptionh2">DAY 6</h2>
            <h3 className="descriptionh3">
              Java is not the same as JavaScript
            </h3>
            <p className="descriptionp">
              太空艙內的自由活動2
              <br />
              <br />
              一趟與宇宙銀河近距離接觸的知性與感性之旅。您會對眼前這已經歷好幾光年的銀河，升起一份對大自然的崇敬，非常值得觀賞。
            </p>
          </div>
        </div>

        {/* 4th group */}

        <div className="blog-card">
          <div className="meta">
            <div className="photo photo_7"></div>
            <ul className="details"></ul>
          </div>
          <div className="description">
            <h2 className="descriptionh2">DAY 7</h2>
            <h3 className="descriptionh3">Opening a door to the future</h3>
            <p className="descriptionp">
              返航回國際太空站
              <br />
              <br />
              太空站上配備多個場館，以震撼的視聽效果為您呈現最高水準的娛樂節目。
              您會發現自己深深受到美食與爵士樂完美結合的魅力吸引。或在夜空下欣賞最愛的電影，到我們的拉斯維加斯風賭場，提供適合各種場合的多種娛樂選項，讓您好好寵愛自己。
            </p>
          </div>
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo photo_8"></div>
            <ul className="details"></ul>
          </div>
          <div className="description">
            <h2 className="descriptionh2">DAY 8</h2>
            <h3 className="descriptionh3">
              Java is not the same as JavaScript
            </h3>
            <p className="descriptionp">
              快樂賦歸
              <br />
              今日從USA機場登機返回台灣，航越過國際換日線於次日抵達國門，夜宿機上。
            </p>
          </div>
        </div>

        <div className="main-container">
          <section className="timeline-outer">
            <div className="content">
              <div className="row">
                <div className="tinerarynotes col s12 m12 l12">
                  <h2 className="itinerarynotesh2 blue-text lighten-1 header">
                    行程備註Itinerary notes
                  </h2>
                  <ul className="timeline">
                    <li className="event" data-date="A. 團費與訂金說明">
                      <p className="timelinep">
                        Claromentis is an intranet software provider company. I
                        started working at the Brighton office as a Marketing
                        Designer while I was still attending my final year at
                        the University of Sussex. My primary responsibilities
                        included creating corporate identity for the company; I
                        re-designed their website, and have created marketing
                        materials such as brochures.
                      </p>
                      <p className="timelinep">
                        Since graduating from university, I have also undertaken
                        responsibilities for designing a product for the
                        company. The roles I have been given have provided the
                        perfect opportunity to implement the skills I have
                        gained throughout my higher education, as well as
                        experiencing the running of a successful business.
                      </p>
                    </li>
                    <li className="event" data-date="B. 住房權益小叮嚀">
                      <p className="timelinep">
                        Claromentis is an intranet software provider company. I
                        started working at the Brighton office as a Marketing
                        Designer while I was still attending my final year at
                        the University of Sussex. My primary responsibilities
                        included creating corporate identity for the company; I
                        re-designed their website, and have created marketing
                        materials such as brochures.
                      </p>
                      <p className="timelinep">
                        Since graduating from university, I have also undertaken
                        responsibilities for designing a product for the
                        company. The roles I have been given have provided the
                        perfect opportunity to implement the skills I have
                        gained throughout my higher education, as well as
                        experiencing the running of a successful business.
                      </p>
                    </li>
                    <li className="event" data-date="C. 注意事項&建議">
                      <p className="timelinep">
                        Throughout my degree I have gained expansive knowledge
                        of informatics areas including Human Computer
                        Interaction, Multimedia Design and Development, Program
                        Analysis and Design For my final year project, I created
                        a 2D Puzzler Game for iOS called 'Flat Ball' and
                        received a first. I therefore hope to release this game
                        and further develop it to add new levels and improve the
                        features.
                      </p>
                      <p className="timelinep">
                        Since graduating from university, I have also undertaken
                        responsibilities for designing a product for the
                        company. The roles I have been given have provided the
                        perfect opportunity to implement the skills I have
                        gained throughout my higher education, as well as
                        experiencing the running of a successful business.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="login-box">
        <form className="signup d-flex">
          <div className="price--1fAWe">
            <span>$499,999</span>起
          </div>
          <a href="#/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            立即報名
          </a>
        </form>
      </div>
    </>
  );
}

export default TravelNotes;
