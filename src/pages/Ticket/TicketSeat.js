import stepCircle from './img/stepCircle.png';
import stepCircleMb from './img/stepCircle-mb.png';
import seat01 from './img/seat01.png';
import seatsvg from './img/seat02.svg';
import { ReactComponent as SeatSvg } from './img/seat02.svg';
import seat02 from './img/seat02.png';
import seat03 from './img/seat03.png';
import './ticket.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SeatSvgFile from './SeatSvgFile';
import SeatDrag from './SeatDrag';

function TicketSeat(props) {
  const { tripDate } = props;
  const [isSeatA, setIsSeatA] = useState(false);
  const [isSeatB, setIsSeatB] = useState(false);
  const [isSeatC, setIsSeatC] = useState(false);
  const [seatData, setSeatData] = useState([]);
  const [seatCabin, setseatCabin] = useState('A');

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://localhost:3001/ticket-seat/api/seat-list`,
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({ tripDate: tripDate, seatCabin: seatCabin }),
        }
      );
      const seatListDatas = await response.json();
      setSeatData(seatListDatas);
    })();
    console.log(seatData);
  }, [isSeatA, isSeatB, isSeatC]);

  function colorHandler(e) {
    console.log('abc');
    console.log(e.target.dataset.value);

    switch (e.target.dataset.value) {
      case 'A':
        setIsSeatA(true);
        setIsSeatB(false);
        setIsSeatC(false);
        console.log('A');
        setseatCabin('A');
        break;
      case 'B':
        setIsSeatA(false);
        setIsSeatB(true);
        setIsSeatC(false);
        console.log('B');
        setseatCabin('B');
        break;
      case 'C':
        setIsSeatA(false);
        setIsSeatB(false);
        setIsSeatC(true);
        console.log('C');
        setseatCabin('C');
        break;
      default:
        setIsSeatA(false);
        setIsSeatB(false);
        setIsSeatC(false);
        break;
    }
  }

  return (
    <>
      <div class="ticket-container">
        <div class="step-circle">
          <img className="step-circle-img" src={stepCircle} alt="" />
          <img className="step-circle-mb" src={stepCircleMb} alt="" />
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
                <img src={seat03} alt="" />
                <div className="ticket-case">
                  <p
                    className={isSeatA && 'case-selected'}
                    onClick={e => colorHandler(e)}
                    data-value="A"
                  >
                    ・　A艙
                  </p>
                  <p
                    className={isSeatB && 'case-selected'}
                    onClick={e => colorHandler(e)}
                    data-value="B"
                  >
                    ・　B艙
                  </p>
                  <p
                    className={isSeatC && 'case-selected'}
                    onClick={e => colorHandler(e)}
                    data-value="C"
                  >
                    ・　C艙
                  </p>
                </div>
              </div>
              <div className="ticket-seat-choose">
                <div className="seat-svg">
                  <SeatSvgFile seatData={seatData} seatCabin={seatCabin} />
                </div>
                {/* <img className="seat-svg" src={seatsvg} alt="" /> */}
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
                  <SeatDrag />
                </div>
              </div>
            </div>
            <Link to="ticket-date-choose" class="ticket-seat-back">
              <i class="fa-solid fa-left-long"></i>Back
            </Link>
            <Link to="ticket-meal-choose" class="ticket-seat-next">
              Next<i class="fa-solid fa-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketSeat;
