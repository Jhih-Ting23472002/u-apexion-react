import './ticket.css';
import TicketInput from './TicketInput';
import slider01 from './img/slider01.jpg';
import slider02 from './img/slider02.jpg';
import slider03 from './img/slider03.jpg';
import slider04 from './img/slider04.jpg';
import slider05 from './img/slider05.jpg';
import slider06 from './img/slider06.jpg';
import slider07 from './img/slider07.jpeg';
import slider08 from './img/slider08.jpg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TicketOrderModal from './TicketOrderModal';

function Ticket() {
  const [modalShow, setModalShow] = useState(false);
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(1);
  return (
    <>
      <div className="ticketWrap">
        <div className="inputArea">
          <h2>Hello，User</h2>
          <div className="inputWrap">
            <label>人數</label>
            <div className="inputGroup">
              <input
                className="people-count"
                type="text"
                placeholder="請輸入人數，上限4人"
                onChange={e => {
                  setNumber(e.target.value);
                }}
              />
              <span
                onClick={() =>
                  number <= 4 ? setCount(number) : setModalShow(true)
                }
              >
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
          </div>
          <TicketInput count={count} />
          <button className="tickitConfirmBtn">確認送出</button>
        </div>
        <div className="sliderArea">
          <div className="sliderWrap">
            <div>
              <img src={slider01} alt="" />
            </div>
            <div>
              <img src={slider02} alt="" />
            </div>
            <div>
              <img src={slider03} alt="" />
            </div>
            <div>
              <img src={slider04} alt="" />
            </div>
            <div>
              <img src={slider05} alt="" />
            </div>
            <div>
              <img src={slider06} alt="" />
            </div>
            <div>
              <img src={slider07} alt="" />
            </div>
            <div>
              <img src={slider08} alt="" />
            </div>
            <div>
              <img src={slider01} alt="" />
            </div>
            <div>
              <img src={slider02} alt="" />
            </div>
            <div>
              <img src={slider03} alt="" />
            </div>
            <div>
              <img src={slider04} alt="" />
            </div>
          </div>
        </div>
      </div>

      <TicketOrderModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Ticket;
