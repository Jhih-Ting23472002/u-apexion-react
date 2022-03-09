import './TravelIndex.css';

function TravelIndex() {
  return (
    <>
      <header>
        <div class="wrap">
          <ul class="navbar">
            <li>
              <img class="logo" src="./logo.png" alt="" />
            </li>
            <li>
              <a href="#home" class="navA">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutUs" class="navA">
                About us
              </a>
            </li>
            <li>
              <a href="#ourProducts" class="navA">
                Shop
              </a>
            </li>
            <li>
              <a href="#locations" class="navA">
                Locations
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section>
        <div class="main-img" id="home">
          {/* The img itself is a background image */}
          <div class="overlay">
            <h1>The Future is Here</h1>
            <h2>With U-APEXION you can teleport anywhere, any time.</h2>
          </div>

          <div class="search">
            <section class="webdesigntuts-workshop">
              <form action="" method="">
                <input type="search" placeholder="What are you looking for?" />
                <button>Search</button>
              </form>
            </section>
          </div>
        </div>
      </section>

      <section class="trivia" id="trivia">
        <h3 id="trivia">訓練活動花絮</h3>
        <hr class="generalHr" />

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./space2.jpg" class="d-block w-75" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h5>團隊生活照</h5>
                <p>123456789123456789</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="./space2.jpg" class="d-block w-75" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="./space2.jpg" class="d-block w-75" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <p>travel</p>
      </section>

      <section id="tour">
        <div id="tour-img">
          <div class="tourOverlay">
            <h2>U-APEXION站內論壇</h2>
            <a href="#/" target="_blank">
              <button class="tourButton">let's go</button>
            </a>
          </div>
        </div>
      </section>

      <section id="shopSection">
        <div class="shopHeader">
          <h3>主打星座熱門行程</h3>
          <hr class="generalHr" />
        </div>
        <div id="shop">
          <div class="shopPackage" id="onePack">
            <img src="./s1.png" alt="" />
            <div class="informationPackage">
              <h3>Taurus(一月啟程)</h3>
              <hr class="generalHrpart1" />
              <h2>$19,999,999.99</h2>
              <p>
                This Package is for the not so common travelers and vacation to
                Mercury or Mars. Your first 2 nights at any hotel is free up to
                5 people. Teleporting will cost your $30 per person
              </p>
              <a href="#/" target="_self">
                <button class="itemBuyButton">Details</button>
              </a>
            </div>
          </div>
          <div class="shopPackage" id="twoPack">
            {/* Unintentional pun */}
            <img src="./s2.png" alt="" />
            <div class="informationPackage">
              <h3>Scorpio(三月啟程)</h3>
              <hr class="generalHrpart1" />
              <h2>$29,999,999.99</h2>
              <p>
                This Package is for the business travelers. This includes
                Lesuire Package but you can go to where in our solor system. You
                also get free instant shipping for up to 100 packagas
              </p>
              <a href="#/" target="_blank">
                <button class="itemBuyButton">Details</button>
              </a>
            </div>
          </div>
          <div class="shopPackage" id="threePack">
            <img src="./s10.png" alt="" />
            <div class="informationPackage">
              <h3>Gemini(五月啟程)</h3>
              <hr class="generalHrpart1" />
              <h2>$39,999,999.99</h2>
              <p>
                This Package is for the elite Travelers. This includes all the
                packages but you can go anywhere in our Milky Way Galaxy.
                Teleporting will you $300 per person outside our solar system.{' '}
              </p>
              <a href="#/" target="_blank">
                <button class="itemBuyButton">Details</button>
              </a>
            </div>
          </div>
        </div>

        <div class="shopHeader">
          <h3>主打星球熱門行程</h3>
          <hr class="generalHr" />
        </div>

        <div id="shop">
          <div class="shopItem" id="smallItem">
            <img src="./titan.png" alt="" />
            <div class="informationShopItem">
              <h3>Titan(二月啟程)</h3>
              <div class="row">
                <h2>$49,999,999.99</h2>
                <a href="#/" target="_blank">
                  <button class="itemBuyButton">Details</button>
                </a>
              </div>
              <hr class="generalHrpart2" />
              <p></p>
            </div>
          </div>
          <div class="shopItem" id="smallItem">
            <img src="./xandar.jpg" alt="" />
            <div class="informationShopItem">
              <h3>Xandar(四月啟程)</h3>
              <div class="row">
                <h2>$59,999,999.99</h2>
                <a href="./page3.html" target="_self">
                  <button class="itemBuyButton">Details</button>
                </a>
              </div>
              <hr class="generalHrpart2" />
              <p>
                在柴達星上有一片彷彿熱帶雨林般的魔幻森林，熱帶氣候造就了園區獨特的植物相，各式各樣的榕屬植物，巨大鳳蝶飛舞白榕之間，少有的桃花心木、柚木等熱帶樹種的人工林，享受熱帶森林浴生態之旅，都可在知本體驗。
              </p>
            </div>
          </div>
          <div class="shopItem" id="smallItem">
            <img src="./mann.png" alt="" />
            <div class="informationShopItem">
              <h3>Mann(六月啟程)</h3>
              <div class="row">
                <h2>$69,999,999.99</h2>
                <a href="#/" target="_blank">
                  <button class="itemBuyButton">Details</button>
                </a>
              </div>
              <hr class="generalHrpart2" />
              <p></p>
            </div>
          </div>
        </div>
      </section>

      <section id="projectSection">
        <h2 id="locations">Our Locations</h2>
        <hr class="generalHr" />
        <div class="projects">
          <div class="projectItem">
            <img src="./Taiwan.jpg" alt="" />
            <a class="projectItemDesc" target="_blank" href="#/">
              <p>Taiwan (971花蓮縣新城鄉七星街79巷5號) </p>
            </a>
          </div>
          <div class="projectItem">
            <img src="./USA.jpg" alt="" />
            <a class="projectItemDesc" target="_blank" href="#/">
              <p>USA (1601 U-PX Parkway Houston,TX,USA 77058)</p>
            </a>
          </div>
        </div>
      </section>

      <hr class="generalHr" />
    </>
  );
}

export default TravelIndex;
