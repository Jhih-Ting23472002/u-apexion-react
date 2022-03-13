import React from 'react';
import './Products.scss';

function Products() {
  return (
    <article>
      <div className="pr">
        <div className="pr-home-mv-img">
          <div className="pr-home-mv-p">
            <h2 className="pr-home-h2">2022</h2>
            <p className="pr-home-p1">autumn and winter series</p>
            <p className="pr-home-p2">Take you to space!</p>
          </div>
          <img src="./product_img/CaraDelevin.jpg" alt="" />
        </div>
        {/*----------------------------------------時裝照------------------------------------------*/}
        <div className="pr-home-fashion-img">
          <div className="slider_container">
            <div>
              <img src="./product_img/_CHA0849.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_LLL6131.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_CHA1089.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_ARC0013.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_CHA0433.jpg" alt="" />
            </div>
          </div>
          <div className="pr-home-fashion-div">
            <svg
              className="pr-home-fashion-svg"
              width="642"
              height="156"
              viewBox="0 0 642 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.93835 0H0V155.993H641.406V142.181H6.93835V0Z"
                fill="white"
              />
            </svg>
            <div className="pr-home-fashion-txt">
              <h2 className="pr-home-fashion-h2">Clothing Collection</h2>
              <p className="pr-home-fashion-p">From U-APEXION</p>
            </div>
          </div>
          <div className="slider_container2">
            <div>
              <img src="./product_img/_CHA0912.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_LLL6122.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_CHA2055.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_ARC0233.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_CHA0448.jpg" alt="" />
            </div>
          </div>
          <div className="slider_container3">
            <div>
              <img src="./product_img/1488892689522.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_CHA0364.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_CHA2343.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_LLL6211.jpg" alt="" />
            </div>
            <div>
              <img src="./product_img/_CHA0903.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* 手機sp */}
        <div className="pr-pic-ctn">
          <div className="pr-sp-fashion-div">
            <svg
              width="296"
              height="68"
              viewBox="0 0 296 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.20181 0H0V67.8458H296V61.8386H3.20181V0Z"
                fill="white"
              />
            </svg>

            <div className="pr-sp-fashion-txt">
              <h2 className="pr-sp-fashion-h2">Clothing Collection</h2>
              <p className="pr-sp-fashion-p">From U-APEXION</p>
            </div>
          </div>
          <div className="pic-ctn">
            <img src="./product_img/_CHA0912.jpg" alt="" className="pic" />
            <img src="./product_img/_LLL6122.jpg" alt="" className="pic" />
            <img src="./product_img/_CHA0364.jpg" alt="" className="pic" />
            <img src="./product_img/_CHA0849.jpg" alt="" className="pic" />
            <img src="./product_img/_CHA0903.jpg" alt="" className="pic" />
          </div>
        </div>

        {/*-----------------------------------------------新品------------------------------------------------*/}
        <div className="pr-h9vh"></div>
        <div className="pr-home-new">
          <div className="pr-home-new-img-photo">
            <img src="./product_img/M021J_BK019_1.jpg" alt="" />
          </div>
          <div className="pr-home-new-list">
            <h3>NEW</h3>
            <div className="pr-card-new">
              <div className="pr-card-list">
                <a href="#/" className="pr-card-list-img">
                  <img src="./product_img/M021J_BK019.jpg" alt="" />
                </a>
                <div className="pr-card-list-txt">
                  <div>
                    <h3>太空飛行員外套</h3>
                    <p>黑色科技棉防撕裂物料</p>
                  </div>
                  <div className="pr-fas fa-star-div">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="price">
                    <div className="pr-currencySymbol">
                      $ <p>2,599</p>
                    </div>
                    <input
                      type="button"
                      value="+"
                      name=""
                      className="pr-card-list-button"
                    />
                  </div>
                </div>
              </div>
              <div className="pr-card-list">
                <a href="#/" className="pr-card-list-img">
                  <img src="./product_img/M021J_BK019.jpg" alt="" />
                </a>
                <div className="pr-card-list-txt">
                  <div>
                    <h3>太空飛行員外套</h3>
                    <p>黑色科技棉防撕裂物料</p>
                  </div>
                  <div className="pr-fas fa-star-div">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="price">
                    <div className="pr-currencySymbol">
                      $ <p>2,599</p>
                    </div>
                    <input
                      type="button"
                      value="+"
                      name=""
                      className="pr-card-list-button"
                    />
                  </div>
                </div>
              </div>
              <div className="pr-card-list">
                <a href="#/" className="pr-card-list-img">
                  <img src="./product_img/M021J_BK019.jpg" alt="" />
                </a>
                <div className="pr-card-list-txt">
                  <div>
                    <h3>太空飛行員外套</h3>
                    <p>黑色科技棉防撕裂物料</p>
                  </div>
                  <div className="pr-fas fa-star-div">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="price">
                    <div className="pr-currencySymbol">
                      $ <p>2,599</p>
                    </div>
                    <input
                      type="button"
                      value="+"
                      name=""
                      className="pr-card-list-button"
                    />
                  </div>
                </div>
              </div>
              <div className="pr-card-list">
                <a href="#/" className="pr-card-list-img">
                  <img src="./product_img/M021J_BK019.jpg" alt="" />
                </a>
                <div className="pr-card-list-txt">
                  <div>
                    <h3>太空飛行員外套</h3>
                    <p>黑色科技棉防撕裂物料</p>
                  </div>
                  <div className="pr-fas fa-star-div">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="price">
                    <div className="pr-currencySymbol">
                      $ <p>2,599</p>
                    </div>
                    <input
                      type="button"
                      value="+"
                      name=""
                      className="pr-card-list-button"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-h9vh"></div>
        {/*-----------------------------------------------焦點推薦------------------------------------------------*/}
        <div className="pr-recommendation">
          <h2>時尚推薦</h2>
          <div className="pr-recommendation-a">
            <a href="#/">男士精品</a>
            <a href="#/">女士精品</a>
            <a href="#/">鞋款</a>
            <a href="#/">配件與腕錶</a>
          </div>
          <div className="pr-container">
            <div className="pr-card">
              <a href="#/" className="pr-img">
                <img src="./product_img/M021J_BK019.jpg" alt="" />
              </a>
              <div className="pr-content">
                <h4>太空飛行員外套</h4>
                <p className="pr-p">$</p>
                <p>1650</p>
                <p className="pr-p-p">黑色科技棉防撕裂物料</p>
                <input
                  type="button"
                  value="+"
                  name=""
                  className="pr-card-button"
                />
              </div>
            </div>
            <div className="pr-card">
              <a href="#/" className="pr-img">
                <img src="./product_img/M021J_BK019.jpg" alt="" />
              </a>
              <div className="pr-content">
                <h4>太空飛行員外套</h4>
                <p className="pr-p">$</p>
                <p>1650</p>
                <p className="pr-p-p">黑色科技棉防撕裂物料</p>
                <input
                  type="button"
                  value="+"
                  name=""
                  className="pr-card-button"
                />
              </div>
            </div>
            <div className="pr-card">
              <a href="#/" className="pr-img">
                <img src="./product_img/M021J_BK019.jpg" alt="" />
              </a>
              <div className="pr-content">
                <h4>太空飛行員外套</h4>
                <p className="pr-p">$</p>
                <p>1650</p>
                <p className="pr-p-p">黑色科技棉防撕裂物料</p>
                <input
                  type="button"
                  value="+"
                  name=""
                  className="pr-card-button"
                />
              </div>
            </div>
            <div className="pr-card">
              <a href="#/" className="pr-img">
                <img src="./product_img/M021J_BK019.jpg" alt="" />
              </a>
              <div className="pr-content">
                <h4>太空飛行員外套</h4>
                <p className="pr-p">$</p>
                <p>1650</p>
                <p className="pr-p-p">黑色科技棉防撕裂物料</p>
                <input
                  type="button"
                  value="+"
                  name=""
                  className="pr-card-button"
                />
              </div>
            </div>
          </div>
          <div className="pr-card-a-div">
            <a href="#/">
              View All<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="pr-h9vh"></div>
        {/*-----------------------------------------------文章推薦------------------------------------------------*/}
        <div className="pr-article">
          <div className="pr-article-img">
            <img src="./product_img/Group 48095598.png" alt="" />
          </div>
          <div className="pr-article-p">
            <span>Experiences</span>
            <h2>50年紀念-PG3 籃球鞋</h2>
            <p>NASA x Nike</p>
            <div className="pr-article-p-div">
              <p>
                Nike 鞋款設計師 Tony Hardman 以 PG 3 帶領 Paul George
                系列經典鞋款持續進化。本鞋款採用更為柔軟靈敏的緩震系統、彈性襯墊腳踝鞋領，以及可造就卓越多方向抓地力的外底鞋紋，設計靈感來自月球表面的隕石坑。
              </p>
            </div>
          </div>
        </div>
        <div className="pr-h9vh"></div>
      </div>
    </article>
  );
}
export default Products;
