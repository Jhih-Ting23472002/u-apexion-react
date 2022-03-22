import React,{ useState } from 'react';
import './CartInformation.css';
import { Link } from 'react-router-dom';

const CartInformation = (props) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  // const [afterName, setAfterName] = useState('');
  // const [afterMobile, setAfterMobile] = useState('');
  // const [afterEmail, setAfterEmail] = useState('');
  // const [disagree, setDisagree] = useState(false);

  function getInfo (type = '', value){
    const info = {...props.cartUserInfo}
    info[type] = value
    props.setCartUserInfo(info)    
  }


  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart-container container">
          <div className="cart row d-flex justify-content-center process-text">
            <div className="cart step-text">付款方式</div>
            <div className="cart step-text">訂購人資訊</div>
            <div className="cart step-text">最後確認</div>
          </div>
          <div className="cart row d-flex justify-content-around process-line">
            <div className="cart cart-step-line"></div>
            <div className="cart-steps step-one cart-ml-7 d-flex align-items-center justify-content-center">
              1
            </div>
            <div className="cart-steps step-two-on cart-ml-7 d-flex align-items-center justify-content-center">
              2
            </div>
            <div className="cart-steps step-three cart-ml-7 d-flex align-items-center justify-content-center">
              3
            </div>
            <div className="cart-steps step-four cart-ml-7 d-flex align-items-center justify-content-center">
              4
            </div>
          </div>
          <div className="cart-chosen-way">
            <div className="cart-delivery-area">運送區域：{props.userOption.deliveryArea}</div>
            <div className="cart-payment-way">付款方式：{props.userOption.paymentMethod}</div>
            <div className="cart-delivery-way">配送方式：{props.userOption.deliveryWay}</div>
          </div>

          <form className="cart-consumer-information-part">
            <div className="cart-information-line">
              <div className="consumer-recipient-information">訂購人資訊</div>
            </div>
            <div className="consumer-information-area">
              <div className="consumer-information-name-mobile-email">
                <label className="consumer-recipient-label-margin">姓名</label>
                <input
                  className="consumer-recipient-input"
                  defaultValue={name}
                  onChange={(e)=>{setName(
                    e.target.value
                  )}}
                  placeholder="請填寫真實姓名"
                ></input>
              </div>
              <div className="consumer-information-name-mobile-email">
                <label className="consumer-recipient-label-margin">手機</label>
                <input
                  className="consumer-recipient-input"
                  defaultValue={mobile}
                  onChange={(e)=>{setMobile(
                    e.target.value
                  )}}
                  placeholder="您的手機號碼"
                ></input>
                <div className="mobile-or-telephone">手機市話可擇一填寫</div>
              </div>
              <div className="consumer-information-name-mobile-email">
                <label className="consumer-recipient-label-margin">市話</label>
                <input
                  className="consumer-recipient-input"
                  placeholder="您的市話號碼"
                ></input>
                <div className="mobile-or-telephone">手機市話可擇一填寫</div>
              </div>
              <div className="consumer-information-name-mobile-email">
                <label className="consumer-recipient-label-margin">email</label>
                <input
                  className="consumer-recipient-input"
                  defaultValue={email}
                  onChange={(e)=>{setEmail(
                    e.target.value
                  )}}
                  placeholder="您的email"
                ></input>
              </div>
            </div>
          </form>

          <form className="cart-recipient-information-part">
            <div className="cart-information-line">
              <div className="consumer-recipient-information">收件人資訊</div>
            </div>
            <div className="recipient-information-area">
              <div className="recipient-information-name-mobile-email-address">
                {/* <label className="cart-checkbox-label">
                  同訂購人資料
                  <input type="checkbox" 
                    checked={disagree}
                    onChange={(e) => {
                      setDisagree(e.target.checked)
                      if(!disagree){
                        setAfterName(name)
                        setAfterMobile(mobile)
                        setAfterEmail(email)
                      }else{
                        setAfterName('')
                        setAfterMobile('')
                        setAfterEmail('')
                      }


                    }}
                    className="cart-checkbox" />
                  <span className="cart-checkmark"></span>
                </label> */}
              </div>


              {/* 收件人資訊欄 */}{/* 收件人資訊欄 */}{/* 收件人資訊欄 */}


              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">
                  收件人
                </label>
                <input
                  className="consumer-recipient-input"
                  placeholder="請填寫真實姓名"
                  onChange={(e) => {
                      getInfo('name', e.target.value)
                    }}
                ></input>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">
                  聯絡電話
                </label>

                <input
                  className="consumer-recipient-input"
                  placeholder="您的手機號碼"
                  onChange={(e) => {
                      getInfo('mobile', e.target.value)
                    }}
                ></input>
                
                <div className="mobile-or-telephone">
                  宅配人員將以此資料聯繫
                </div>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">email</label>
                
                <input
                  className="consumer-recipient-input"
                  placeholder="您的email"                  
                  onChange={(e) => {
                      getInfo('email', e.target.value)
                    }}
                ></input>

                <div className="mobile-or-telephone">
                  交易通知將會發送到此email
                </div>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">
                  收件地址
                </label>
                <div className="select-consumer-recipient-input">
                  <div className="select-consumer-recipient-input-top mb-3">
                    <select className="select-city mb-3" onChange={(e) => {
                      getInfo('addressCity', e.target.value)
                    }}>
                      <option>請選擇縣市</option>
                      <option>台北市</option>
                    </select>
                    <select className="select-district" onChange={(e) => {
                      getInfo('addressDist', e.target.value)
                    }}>
                      <option>請選擇鄉鎮市區</option>
                      <option>大安區</option>
                      <option>文山區</option>
                    </select>
                  </div>
                  <div className="select-consumer-recipient-input-bottom">
                    <input
                      className="recipient-input-address"
                      placeholder="您的地址"
                      onChange={(e) => {
                      getInfo('address', e.target.value)
                    }}
                    ></input>
                  </div>
                </div>
                <div className="mobile-or-telephone">需專人簽收</div>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">
                  配送時間
                </label>
                <input
                  className="consumer-recipient-input"
                  value="不限時"
                  disabled
                ></input>
                <div className="mobile-or-telephone">
                  因為疫情的關係，現在只有不限時。造成您的不便敬請見諒。
                </div>
              </div>
            </div>
          </form>
          <div className="previous-next-btn">
            <div className="col-3"></div>
            <Link
              className="btn next-btn position cart-link"
              to={'/cart-payment'}
            >
              <i className="arrow left"></i>上一步
            </Link>
            <div className="col-2"></div>
            <Link
              className="btn next-btn position cart-link"
              to={'/cart-final-check'}
            >
              下ㄧ步<i className="arrow right"></i>
            </Link>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartInformation;
