import stepCircle from './img/stepCircle.png';
import stepCircleMb from './img/stepCircle-mb.png';
import TicketCalender from './TicketCalender';

function TicketDate() {
  return (
    <>
      <div class="ticket-container">
        <div class="step-circle">
          <img className="step-circle-img" src={stepCircle} alt="" />
          <img className="step-circle-mb" src={stepCircleMb} alt="" />
          <div className="ticket-steps">
            <p>STEP</p>
            <p>2</p>
          </div>
        </div>
        <div className="ticket-date">
          <div className="ticket-date-wrap">
            <div className="ticket-date-title">
              <h2>請選擇 出發日期</h2>
              <p>Select first day of travel,please</p>
            </div>

            <div className="ticket-date-content">
              <div className="ticket-date-selected-area">
                <div className="ticket-date-selected ticket-date-days">
                  <div className="ticket-date-days-underline">
                    <h2>泰坦星</h2>
                    <h2>5 Days</h2>
                  </div>
                </div>
                <div className="ticket-date-selected ticket-date-from">
                  <div className="ticket-date-from-border">
                    <h4>From</h4>
                    <div className="ticket-date-from-info">
                      <p>2022.01.24</p>
                      <p>9:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="ticket-date-selected ticket-date-to">
                  <div className="ticket-date-to-border">
                    <h4>To</h4>
                    <div className="ticket-date-to-info">
                      <p>2022.01.28</p>
                      <p>2:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ticket-calendar-content">
                <TicketCalender />
              </div>
            </div>

            <a class="ticket-date-back-mb" href="/">
              <i class="fa-solid fa-left-long"></i>Back
            </a>
            <a class="ticket-date-next-mb" href="/">
              Next<i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDate;
