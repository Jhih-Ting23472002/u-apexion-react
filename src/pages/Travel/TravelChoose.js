import React from 'react';
import './TravelChoose.css';

function TravelChoose() {
  return (
    <>
      <section className="py-5">
        <div className="container choosecontainer">
          <div className="position-relative">
            <div className="text-white px-3 pt-3 my-4 sticky-top">
              <div className="row align-items-center filters">
                <div className="col-12 col-sm-12 col-md-3 mb-3">
                  <select className="form-control w-100 choosesearch">
                    <option value="all">全部行程</option>
                    <option value="planet">星球之旅</option>
                    <option value="starsign">星座之旅</option>
                    <option value="moviescene">電影場景</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                  <button
                    className="sort itemBuyButton w-100"
                    data-sort="price"
                  >
                    價格排序
                  </button>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                  <button className="sort itemBuyButton w-100" data-sort="day">
                    天數排序
                  </button>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                  <input
                    className="choosesearch form-control"
                    placeholder="產品名稱/關鍵字/產品代碼"
                  />
                </div>
              </div>
            </div>
            <div className="list">
              <div className="item pl-4">
                <div className="d-flex align-items-stretch mb-5">
                  <div className="col-sm-6 col-md-8">
                    <div className="row align-items-center">
                      <div className="col-md-8 info">
                        <h4 className="chooseh4 pb-2 border-bottom">奧茲</h4>
                        <p className="choosep">
                          Pistachio stuffed kofta balls served with a persian
                          style tomato sauce.
                        </p>
                        <ul className="chooseitinerary">
                          <li>moviescene</li>
                          <li>產品代碼:003-UPX</li>
                          <li>綠野仙蹤</li>
                          <li>去程:2022/01/18(六)共10日</li>
                          <li>回程:2022/01/27(三)</li>
                        </ul>
                      </div>
                      <div className="col-md-4 text-md-center choosedetails">
                        <p className="day">旅遊天數:10day</p>
                        <p className="price">$499,999</p>
                        <a href="#/" target="_self">
                          <button className="itemBuyButton">Details</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 image">
                    <img
                      src="./travelimg/Oz.jpg"
                      loading="lazy"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="item pl-4">
                <div className="d-flex align-items-stretch mb-5">
                  <div className="col-sm-6 col-md-8">
                    <div className="row align-items-center">
                      <div className="col-md-8 info">
                        <h4 className="chooseh4 pb-2 border-bottom">金牛座</h4>
                        <p className="choosep">
                          A stew of diced lamb with a blend of fresh herbs,
                          kidney beans and dried lime
                        </p>
                        <ul className="chooseitinerary">
                          <li>starsign</li>
                          <li>產品代碼:001-UPX</li>
                          <li>土象星座</li>
                          <li>守護神:愛神維納斯</li>
                          <li>去程:2022/01/01(六)共5日</li>
                          <li>回程:2022/01/05(三)</li>
                        </ul>
                      </div>
                      <div className="col-md-4 text-md-center choosedetails">
                        <p className="day">旅遊天數:5day</p>
                        <p className="price">$699,999</p>
                        <a href="#/" target="_self">
                          <button className="itemBuyButton">Details</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 image">
                    <img
                      src="./travelimg/s1.png"
                      loading="lazy"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="item pl-4">
                <div className="d-flex align-items-stretch mb-5">
                  <div className="col-sm-6 col-md-8">
                    <div className="row align-items-center">
                      <div className="col-md-8 info">
                        <h4 className="chooseh4 pb-2 border-bottom">巨蟹座</h4>
                        <p className="choosep">
                          A stew of diced lamb with a blend of fresh herbs,
                          kidney beans and dried lime
                        </p>
                        <ul className="chooseitinerary">
                          <li>starsign</li>
                          <li>產品代碼:006-UPX</li>
                          <li>水象星座</li>
                          <li>守護神:月神黛安娜</li>
                          <li>去程:2022/03/01(六)共5日</li>
                          <li>回程:2022/03/05(三)</li>
                        </ul>
                      </div>
                      <div className="col-md-4 text-md-center choosedetails">
                        <p className="day">旅遊天數:5day</p>
                        <p className="price">$199,999</p>
                        <a href="#/" target="_self">
                          <button className="itemBuyButton">Details</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 image">
                    <img
                      src="./travelimg/s9.png"
                      loading="lazy"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="item pl-4">
                <div className="d-flex align-items-stretch mb-5">
                  <div className="col-sm-6 col-md-8">
                    <div className="row align-items-center">
                      <div className="col-md-8 info">
                        <h4 className="chooseh4 pb-2 border-bottom">天秤座</h4>
                        <p className="choosep">
                          A stew of diced lamb with a blend of fresh herbs,
                          kidney beans and dried lime
                        </p>
                        <ul className="chooseitinerary">
                          <li>starsign</li>
                          <li>產品代碼:007-UPX</li>
                          <li>風象星座</li>
                          <li>守護神:愛神維納斯</li>
                          <li>去程:2022/03/06(六)共5日</li>
                          <li>回程:2022/03/10(三)</li>
                        </ul>
                      </div>
                      <div className="col-md-4 text-md-center choosedetails">
                        <p className="day">旅遊天數:5day</p>
                        <p className="price">$599,999</p>
                        <a href="#/" target="_self">
                          <button className="itemBuyButton">Details</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 image">
                    <img
                      src="./travelimg/s6.png"
                      loading="lazy"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="item pl-4">
                <div className="d-flex align-items-stretch mb-5">
                  <div className="col-sm-6 col-md-8">
                    <div className="row align-items-center">
                      <div className="col-md-8 info">
                        <h4 className="chooseh4 pb-2 border-bottom">射手座</h4>
                        <p className="choosep">
                          A skewer of thick slices of spring lamb fillet with a
                          skewer of grilled minced lamb meat
                        </p>
                        <ul className="chooseitinerary">
                          <li>starsign</li>
                          <li>產品代碼:002-UPX</li>
                          <li>火象星座</li>
                          <li>守護神:眾神之王邱比特</li>
                          <li>去程:2022/01/06(六)共12日</li>
                          <li>回程:2022/01/17(三)</li>
                        </ul>
                      </div>
                      <div className="col-md-4 text-md-center choosedetails">
                        <p className="day">旅遊天數:12day</p>
                        <p className="price">$399,999</p>
                        <a href="#/" target="_self">
                          <button className="itemBuyButton">Details</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 image">
                    <img
                      src="./travelimg/s7.png"
                      loading="lazy"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="item pl-4">
                <div className="d-flex align-items-stretch mb-5">
                  <div className="col-sm-6 col-md-8">
                    <div className="row align-items-center">
                      <div className="col-md-8 info">
                        <h4 className="chooseh4 pb-2 border-bottom">泰坦星</h4>
                        <p className="choosep">
                          A stew with blend of split peas, mushroom, tomato
                          sauce, dried lime and aubergine
                        </p>
                        <ul className="chooseitinerary">
                          <li>planet</li>
                          <li>moviescene</li>
                          <li>產品代碼:005-UPX</li>
                          <li>復仇者聯盟(薩諾斯故鄉)</li>
                          <li>去程:2022/01/28(六)共6日</li>
                          <li>回程:2022/02/02(三)</li>
                        </ul>
                      </div>
                      <div className="col-md-4 text-md-center choosedetails">
                        <p className="day">旅遊天數:6day</p>
                        <p className="price">$299,999</p>
                        <a href="./page3.2.html" target="_self">
                          <button className="itemBuyButton">Details</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 image">
                    <img
                      src="./travelimg/titan.png"
                      loading="lazy"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="item pl-4">
                <div className="d-flex align-items-stretch mb-5">
                  <div className="col-sm-6 col-md-8">
                    <div className="row align-items-center">
                      <div className="col-md-8 info">
                        <h4 className="chooseh4 pb-2 border-bottom">柴達星</h4>
                        <p className="choosep">
                          A stew with blend of split peas, mushroom, tomato
                          sauce, dried lime and aubergine
                        </p>
                        <ul className="chooseitinerary">
                          <li>planet</li>
                          <li>moviescene</li>
                          <li>產品代碼:004-UPX</li>
                          <li>復仇者聯盟(超新星故鄉)</li>
                          <li>去程:2022/02/02(六)共15日</li>
                          <li>回程:2022/02/16(三)</li>
                        </ul>
                      </div>
                      <div className="col-md-4 text-md-center choosedetails">
                        <p className="day">旅遊天數:15day</p>
                        <p className="price">$199,999</p>
                        <a href="./page3.html" target="_self">
                          <button className="itemBuyButton">Details</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 image">
                    <img
                      src="./travelimg/xandar.jpg"
                      loading="lazy"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="morechoose">
        <a href="#/" target="_self">
          <button className="itemBuyButton">更多行程</button>
        </a>
      </div>
      <hr className="generalHr" />
    </>
  );
}

export default TravelChoose;
