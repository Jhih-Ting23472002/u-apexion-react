import './ticket.css';

function TicketMeal() {
  return (
    <>
      (
      <div class="ticket-container">
        <div class="step-circle">
          <img src="/img/step-circle.png" alt="" />
        </div>
        <div class="ticket-menu">
          <div class="ticket-menu-wrap">
            <h2>請選擇 首日機上餐點</h2>
            <p>Select your meal the first day on the rocket,please</p>
            <div class="menu-main">
              <div class="menu-list">
                <div class="menu">
                  <div class="menu-img">
                    <img src="img/menu01.jpg" alt="" />
                  </div>
                  <div class="menu-detail">
                    <h3>太空拉麵</h3>
                    <p>
                      歐里庇得斯曾經說過，有遠大抱負的人不可忽略眼前的工作。這不禁令我重新仔細的思考。
                    </p>
                  </div>
                </div>
                <div class="menu">
                  <div class="menu-img">
                    <img src="img/menu02.jpg" alt="" />
                  </div>
                  <div class="menu-detail">
                    <h3>太空炒飯</h3>
                    <p>
                      歐里庇得斯曾經說過，有遠大抱負的人不可忽略眼前的工作。這不禁令我重新仔細的思考。
                    </p>
                  </div>
                </div>
                <div class="menu">
                  <div class="menu-img">
                    <img src="img/menu03.jpg" alt="" />
                  </div>
                  <div class="menu-detail">
                    <h3>太空咖哩</h3>
                    <p>
                      歐里庇得斯曾經說過，有遠大抱負的人不可忽略眼前的工作。這不禁令我重新仔細的思考。
                    </p>
                  </div>
                </div>
                <div class="menu">
                  <div class="menu-img">
                    <img src="img/menu04.jpg" alt="" />
                  </div>
                  <div class="menu-detail">
                    <h3>太空炒麵</h3>
                    <p>
                      歐里庇得斯曾經說過，有遠大抱負的人不可忽略眼前的工作。這不禁令我重新仔細的思考。
                    </p>
                  </div>
                </div>
              </div>
              <div class="menu-demo-area">
                <img src="img/menu01.jpg" alt="" />
              </div>
            </div>
            <div class="menu-select-area">
              <div>
                <label for="">USER1</label>
                <select name="" id="">
                  <option value="">太空拉麵</option>
                  <option value="">太空炒飯</option>
                  <option value="">太空咖哩</option>
                  <option value="">太空炒麵</option>
                </select>
              </div>
              <div>
                <label for="">USER2</label>
                <select name="" id="">
                  <option value="">太空拉麵</option>
                  <option value="">太空炒飯</option>
                  <option value="">太空咖哩</option>
                  <option value="">太空炒麵</option>
                </select>
              </div>
              <div>
                <label for="">USER3</label>
                <select name="" id="">
                  <option value="">太空拉麵</option>
                  <option value="">太空炒飯</option>
                  <option value="">太空咖哩</option>
                  <option value="">太空炒麵</option>
                </select>
              </div>
              <div>
                <label for="">USER4</label>
                <select name="" id="">
                  <option value="">太空拉麵</option>
                  <option value="">太空炒飯</option>
                  <option value="">太空咖哩</option>
                  <option value="">太空炒麵</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}

export default TicketMeal;
