import './ticket.css';
import stepCircle from './img/stepCircle.png';
import menu01 from './img/menu01.jpg';
import menu02 from './img/menu02.jpg';
import menu03 from './img/menu03.jpg';
import menu04 from './img/menu04.jpg';

function TicketMeal() {
  return (
    <>
      (
      <div class="ticket-container">
        <div class="step-circle">
          <img src={stepCircle} alt="" />
          <div className="ticket-steps">
            <p>STEP</p>
            <p>4</p>
          </div>
        </div>
        <div class="ticket-menu">
          <div class="ticket-menu-wrap">
            <h2>請選擇 首日機上餐點</h2>
            <p>Select your meal the first day on the rocket,please</p>
            <div class="menu-main">
              <div class="menu-list">
                <div class="menu">
                  <div class="menu-img">
                    <img src={menu01} alt="" />
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
                    <img src={menu02} alt="" />
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
                    <img src={menu03} alt="" />
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
                    <img src={menu04} alt="" />
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
                <img src={menu01} alt="" />
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
