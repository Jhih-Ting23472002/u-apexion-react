import './ticket.css';
import trip01 from './img/trip01.png';
import trip02 from './img/trip02.jpeg';
import trip03 from './img/trip03.jpg';
import stepCircle from './img/stepCircle.png';

function TicketTrip() {
  return (
    <>
      <div class="ticket-container">
        <div class="step-circle">
          <img src={stepCircle} alt="" />
          <div className="ticket-steps">
            <p>STEP</p>
            <p>1</p>
          </div>
        </div>
        <div class="ticket-trip">
          <div class="ticket-trip-wrap">
            <div class="ticket-trip-prev-btn">
              <i class="fas fa-angle-left"></i>
            </div>
            <div class="ticket-trip-next-btn">
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <h2>請選擇 旅遊行程</h2>
            <p>Select a travel destionation,please</p>
            <div class="ticket-trip-list-btn">
              <button class="sign-list-btn">星座旅遊</button>
              <button class="movie-list-btn">電影主題旅遊</button>
            </div>
            <div class="ticket-trip-card-area">
              <div class="ticket-trip-card">
                <div class="ticket-trip-days">5日</div>
                <div class="ticket-trip-card-head">
                  <img src={trip01} alt="" />
                </div>
                <div class="ticket-trip-card-body">
                  <div class="ticket-title">
                    <h3>泰坦星</h3>
                    <h3>$1,000</h3>
                  </div>
                  <p>
                    我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們...
                  </p>
                </div>
                <div class="ticket-trip-card-footer">
                  <button class="tickit-choose-btn">選擇行程</button>
                  <button class="trip-detail-btn">查看詳細行程</button>
                </div>
              </div>
              <div class="ticket-trip-card">
                <div class="ticket-trip-days">5日</div>
                <div class="ticket-trip-card-head">
                  <img src={trip02} alt="" />
                </div>
                <div class="ticket-trip-card-body">
                  <div class="ticket-title">
                    <h3>潘朵拉星球</h3>
                    <h3>$1,000</h3>
                  </div>
                  <p>
                    我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們...
                  </p>
                </div>
                <div class="ticket-trip-card-footer">
                  <button class="tickit-choose-btn">選擇行程</button>
                  <button class="trip-detail-btn">查看詳細行程</button>
                </div>
              </div>
              <div class="ticket-trip-card">
                <div class="ticket-trip-days">5日</div>
                <div class="ticket-trip-card-head">
                  <img src={trip03} alt="" />
                </div>
                <div class="ticket-trip-card-body">
                  <div class="ticket-title">
                    <h3>絕地救援</h3>
                    <h3>$1,000</h3>
                  </div>
                  <p>
                    我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們...
                  </p>
                </div>
                <div class="ticket-trip-card-footer">
                  <button class="tickit-choose-btn">選擇行程</button>
                  <button class="trip-detail-btn">查看詳細行程</button>
                </div>
              </div>
            </div>
            <a class="ticket-next" href="/">
              Next<i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketTrip;