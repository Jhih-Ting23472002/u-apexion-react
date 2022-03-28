import stepCircle from './img/stepCircle.png';
import stepCircleMb from './img/stepCircle-mb.png';
import TicketCalender from './TicketCalender';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const now = new Date();
function TicketDate(props) {
  const [tripDays, setTripDays] = useState(props.tripDays);
  const [dateDeperature, setDateDeperature] = useState('----------');
  const { setTripDate } = props;

  // const [dateDeperature, setDateDeperature] = useState(
  //   new Date(2022, now.getMonth(), now.getDate()).toISOString().slice(0, 10)
  // );

  const [dateBack, setDateBack] = useState('----------');

  // const [dateBack, setDateBack] = useState(
  //   new Date(
  //     2022,
  //     now.getMonth(),
  //     // new Date().getDate()
  //     now.getDate() + props.tripDays ?? '0'
  //   )
  //     .toISOString()
  //     .slice(0, 10)
  // );

  console.log(dateBack);
  console.log(now.getDate());

  // const dateOfDeperature = date.split('-')[2];
  // const monthOfDeperature = date.split('-')[1];
  // const dateOfReturn = parseInt(dateOfDeperature) + parseInt(props.tripDays);
  // const returnDate = new Date(2022, monthOfDeperature - 1, dateOfReturn)
  //   .toISOString()
  //   .slice(0, 10);

  // console.log(dateOfDeperature);
  // console.log(dateOfReturn);
  // console.log(returnDate);

  console.log(dateDeperature);
  // console.log(monthOfDeperature);

  // console.log(props.tripSelected);
  // console.log(props.tripDays);
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
                    <h2>{props.tripSelected}</h2>
                    <h2>{props.tripDays} Days</h2>
                  </div>
                </div>
                <div className="ticket-date-selected ticket-date-from">
                  <div className="ticket-date-from-border">
                    <h4>From</h4>
                    <div className="ticket-date-from-info">
                      <p>{dateDeperature}</p>
                      <p>9:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="ticket-date-selected ticket-date-to">
                  <div className="ticket-date-to-border">
                    <h4>To</h4>
                    <div className="ticket-date-to-info">
                      {dateBack}
                      <p>2:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ticket-calendar-content">
                <TicketCalender
                  setDateDeperature={setDateDeperature}
                  setDateBack={setDateBack}
                  tripDays={tripDays}
                  setTripDate={setTripDate}
                />
              </div>
            </div>

            <Link to="/ticket-trip-choose" class="ticket-date-back-mb">
              <i class="fa-solid fa-left-long"></i>Back
            </Link>
            <Link to="/ticket-seat-choose" class="ticket-date-next-mb">
              Next<i class="fa-solid fa-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDate;
