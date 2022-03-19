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
              <a href="#/">米勒星</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">曼恩星</a>
            </li>
            <li className="breadcrumb-item">
              <a href="./page3.2.html">泰坦星</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">拉曼提斯</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">火星</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">奧茲</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">蓋亞花園</a>
            </li>
          </ol>
        </div>

        <Carousel>
          <Carousel.Item>
            <img
              className="travelcarousel d-block w-100"
              src="./travelimg/notescarouselimg/cabin1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className="carouselh4">First slide label</h2>
              <p className="carouselp">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="travelcarousel d-block w-100"
              src="./travelimg/notescarouselimg/cabin2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2 className="carouselh4">Second slide label</h2>
              <p className="carouselp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="travelcarousel d-block w-100"
              src="./travelimg/notescarouselimg/facil1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="carouselh4">Third slide label</h2>
              <p className="carouselp">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="travelcarousel d-block w-100"
              src="./travelimg/notescarouselimg/facil2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="carouselh4">Third slide label</h2>
              <p className="carouselp">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="travelcarousel d-block w-100 "
              src="./travelimg/notescarouselimg/dining4.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="carouselh4">Third slide label</h2>
              <p className="carouselp">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="travelcarousel d-block w-100"
              src="./travelimg/notescarouselimg/dining2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="carouselh4">Third slide label</h2>
              <p className="carouselp">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="travelcarousel d-block w-100"
              src="./travelimg/notescarouselimg/food1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className="carouselh4">First slide label</h2>
              <p className="carouselp">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="travelcarousel d-block w-100"
              src="./travelimg/notescarouselimg/food3.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2 className="carouselh4">Second slide label</h2>
              <p className="carouselp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    <li className="event" data-date="A. 繳費與退款說明">
                      <p className="timelinep">
                        1.當您繳付金額即表示旅遊契約產生效力，本公司將依各協力商之要求，為您預付此趟旅程的旅館、遊輪或機票等費用。若您因故取消，本公司將依「太空旅遊定型化契約書」之相關條款或估算已實付的費用，向您收取超支費用。多數外籍航空公司一經開立機票，旅客需付全額票款，且不接受調整名單。
                        <br />
                        2.如遇有不可抗拒情況，本公司保有變更航空公司，飛行航班及交通工具旅行方式之權利。
                        <br />
                        3.因受限於國際太空航行位預訂時付款條件、取消、變更及退款等規定極為嚴格，就觀光局所規定之國外團體旅遊定型化契約中，第十三條有關《出發前旅客任意解除契約》之條規款定，「雙方同意就本定型化契約第十三條（出發前旅客任意解除契約及其責任）之內容，另簽立「太空航行合約書」取代之，並視為本定型化契約之一部；兩者解釋上有衝突之部分，均以「太空航行合約書」為準。」
                        <br />
                        4.太空行程之訂位變更、取消及罰則：
                        <br />
                        出發前90天以上取消者，全額退款（已產生之費用除外，如證照辦理費用）；
                        <br />
                        出發前56-29天取消者，取消費為全額團費之50%；
                        <br />
                        出發前28-15天取消者，取消費為全額團費之75%；
                        <br />
                        出發前14天（含14天內）取消者，取消費為全額團費之100%。
                        <br />
                        5.根據【太空航行合約書條款】，旅遊公司基於環境之不可抗拒因素或基於旅客安全考量，可於未事先通知的情況下，對行程中登船、抵/離港時間及停泊港口，做出必要的變更。若有上述的情況發生，本公司不負任何退款和賠償責任。
                        <br />
                        6.根據遊輪公司的規定：『禁止在行程中懷孕滿24周的婦女及未滿6個月之嬰兒登船』。
                        <br />
                        7.太空旅遊行程中，每次太空梭的開航時間都是準時的，且太空梭是不等人的，故旅客如果在返航時間未能準時到達，之後旅客所衍生的所有費用（交通費、住宿費...等）請旅客自行負擔。
                      </p>

                      {/* <p className="timelinep">
                        {v.notes1}
                      </p>
                      <p className="timelinep">
                      {v.notes1_1}
                      </p> */}
                    </li>
                    <li className="event" data-date="B. 住房與飲食說明">
                      <p className="timelinep">
                        1.根據旅遊公司的規定：訂太空艙需要使用護照上的正確名字，一經訂位完成後，每間艙房只可以更改一位旅客名字限一次。如出發前90天內欲更改，需要取消並重新訂位，如此便有取消費產生。請各位貴賓在報名繳訂金的時候，請一併繳交正確的護照影本。
                        <br />
                        2.在遊輪上，艙房內禁止使用所有非太空旅遊公司提供的電器用品，故如需要冷/熱開水，請自備容器，可前往太空站上的自助餐廳取用。
                        <br />
                        3.太空站住宿為兩人一室太空艙。
                        <br />
                        4.陸地房間清潔費：建議每房每天歐元10元或英磅10元，請置於枕頭上（以床計算）。
                        <br />
                        5.在遊輪旅遊時，適時給予服務人員些許小費，是一種國際禮儀，亦是一種實質性鼓勵與讚許。
                        <br />
                        6.如貴賓們有機位及太空站上住房之需求可洽詢您的服務人員。
                        <br />
                        7.素食：因各地風俗民情不同，國外的素食習慣大多是可以食用蔥、薑、蒜、蛋、奶等，除華僑開設的中華料理餐廳外，多數僅能以蔬菜、豆腐等食材料理為主；若為餐廳內用餐或一般餐廳使用自助餐，亦多數以蔬菜、漬物、水果等佐以白飯或麵食類。故建議素食貴賓能多多見諒並自行準備素食罐頭或泡麵等，以備不時之需。如機上餐食有特殊飲食請於出發前14天告知您的業務專員，本公司將盡力協助貴賓達成需求，但機上特殊餐食須以航空公司確認之結果為準。
                        <br />
                        8.太空站上的早餐，可以到主餐廳或是自助餐廳享用豐盛的早點，或是選用艙房服務，在房間內享受。
                        <br />
                        9.太空站上精緻的午、晚餐，無論是主菜或是開胃菜、甜點，皆可隨心所欲。每天的菜色都有不同的變化。
                      </p>
                      {/* <p className="timelinep">
                        {v.notes2}
                      </p>
                      <p className="timelinep">
                      {v.notes2_1}
                      </p> */}
                    </li>
                    <li className="event" data-date="C. 注意事項&建議">
                      <p className="covid-19">
                        ※新冠病毒（COVID-19）防疫規範＜2022年11月更新＞：
                        <br />
                        ．旅客必須完整接種WHO緊急使用授權或美國食藥署
                        （FDA）核准的COVID-19疫苗才能入境（且最後一劑需接種完14天以上方可登船）。獲得承認的疫苗包括AZ、莫德納、輝瑞BNT、嬌生、中國國藥以及科興。
                        <br />
                        ．提供登船前2天內的陰性新冠病毒（COVID-19）檢測報告（PCR
                        或 antigen）。
                        <br />
                        ．如果無法保持社交距離，或當公共衛生當局的強制要求，於船上、私人島嶼上以及岸上觀光期間，都將需配戴口罩。當在碼頭、登船和離船期間時，則必須配戴口罩。
                      </p>
                      <br />
                      <br />
                      <p className="timelinep">
                        1.請於出發半年前繳交所有行程費用。
                        <br />
                        2.含太空梭燃油費。
                        <br />
                        3.旅遊責任險(航行期間)：200萬美金責任險/20萬美金意外醫療(實支實付)。若旅客想獲得更多保險的保障，可自行投保旅行平安保險或旅遊綜合保險。
                        <br />
                        4.不含機票及機場稅金及燃油附加費用,機場與居住地間之接駁,陸上交通等費用。
                        <br />
                        5.不含特殊禦寒裝備之租金費用。
                        <br />
                        6.不含個人新辦護照工本費用與簽證申請費。
                        <br />
                        7.不含行程表上未標明之各項開支、自選建議行程交通及應付費用。
                        <br />
                        8.不含私人消費：如礦泉水、飲料汽水酒類、洗衣、電話、電報及私人交通費。
                      </p>

                      {/* <p className="timelinep">
                        {v.notes3}
                      </p>
                      <p className="timelinep">
                      {v.notes3_1}
                      </p> */}
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
            <span>$499,999</span>起{/* <span>${v.travel_price}</span>起 */}
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
      <hr className="generalHr" />
    </>
  );
}

export default TravelNotes;
