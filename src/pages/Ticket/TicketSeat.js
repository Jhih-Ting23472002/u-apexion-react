import stepCircle from './img/stepCircle.png';
import seat01 from './img/seat01.png';
import seatsvg from './img/seat02.svg';
import { ReactComponent as SeatSvg } from './img/seat02.svg';
import seat02 from './img/seat02.png';
import './ticket.css';

function TicketSeat() {
  return (
    <>
      <div class="ticket-container">
        <div class="step-circle">
          <img src={stepCircle} alt="" />
          <div className="ticket-steps">
            <p>STEP</p>
            <p>3</p>
          </div>
        </div>
        <div class="ticket-seat">
          <div class="ticket-seat-wrap">
            <h2>請選擇 艙位及座位</h2>
            <p>Select your seats,please</p>
            <div className="ticket-seat-content">
              <div className="ticket-case-choose">
                <img src={seat01} alt="" />
              </div>
              <div className="ticket-seat-choose">
                <img className="seat-svg" src={seatsvg} alt="" />
              </div>
            </div>
            <div className="ticket-seat-demo-area">
              <h3>SEAT</h3>
              <div>
                <div className="ticket-users">
                  <p>USER1_______</p>
                  <p>USER2_______</p>
                  <p>USER3_______</p>
                  <p>USER4_______</p>
                </div>
                <div className="ticket-seat-number">
                  <p>FD.3</p>
                  <p>FD.4</p>
                  <p>FD.5</p>
                  <p>FD.6</p>
                </div>
              </div>
            </div>
            <a class="ticket-seat-back" href="/">
              <i class="fa-solid fa-left-long"></i>Back
            </a>
            <a class="ticket-seat-next" href="/">
              Next<i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketSeat;
