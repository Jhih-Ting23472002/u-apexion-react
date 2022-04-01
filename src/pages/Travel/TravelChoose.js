import './TravelChoose.css';
import { useEffect, useState } from 'react';
import config from './Config';
import { useHistory, useLocation, Link } from 'react-router-dom';

function TravelChoose() {
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState([]);

  const getData = async page => {
    const obj = await (
      await fetch(config.CHOOSE_LIST + `?page=${page}`)
    ).json();
    console.log(obj);
    setData(obj);
  };

  useEffect(() => {
    const usp = new URLSearchParams(location.search);
    const page = parseInt(usp.get('page'));
    console.log({ page });
    getData(page || 1);
  }, [location.search]);

  function travelPage(e) {
    console.log(e);
    console.log(e.target.id);
    console.log('/travel-' + e.target.id);
    history.push('/travel-' + e.target.id);
  }

  const renderMe = data => {
    if (data.rows && data.rows.length) {
      return data.rows.map(el => (
        <div className="item pl-4" key={'test' + el.sid}>
          <div className="d-flex choosecardmb align-items-stretch">
            <div className="col-sm-6 col-md-8">
              <div className="row align-items-center">
                <div className="col-md-8 info">
                  <h4 className="chooseh4 pb-2 border-bottom">
                    {el.travel_name}
                  </h4>
                  <p className="choosep">{el.travel_description}</p>
                  <ul className="chooseitinerary">
                    <li>類別:{el.travel_tags}</li>
                    <li>產品代碼:{el.travel_number}</li>
                    <li>去程:{el.travel_outbound}</li>
                    <li>回程:{el.travel_inbound}</li>
                  </ul>
                </div>
                <div className="col-md-4 text-md-center choosedetails">
                  <p className="day">旅遊天數:{el.travel_day}days</p>
                  <p className="price">${el.travel_price}</p>
                  <button
                    onClick={e => {
                      travelPage(e);
                    }}
                    className="itemBuyButton"
                    id={el.travel_number}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 image">
              <img
                src={'./travelimg/travelproductimg/' + el.travel_image}
                loading="lazy"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      ));
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="container choosecontainer">
        <div className="position-relative">
          <div className="text-white px-3 pt-3 my-5">
            <div className="row align-items-center filters">
              <div className="sortButton col-12 col-sm-12 col-md-3 mb-3">
                <Link to="/travel-choose">
                  <button className="sortitemBuyButton">全部行程</button>
                </Link>
              </div>
              <div className="sortButton col-12 col-sm-12 col-md-3 mb-3">
                <Link to="/travelchoose-pricef">
                  <button className="sortitemBuyButton">價格:低到高</button>
                </Link>
                <Link to="/travelchoose-pricem">
                  <button className="sortitemBuyButton">價格:高到低</button>
                </Link>
              </div>
              <div className="sortButton col-12 col-sm-12 col-md-3 mb-3">
                <Link to="/travelchoose-dayf">
                  <button className="sortitemBuyButton">天數:少至多</button>
                </Link>
                <Link to="/travelchoose-daym">
                  <button className="sortitemBuyButton">天數:多至少</button>
                </Link>
              </div>
              <div className="choosesearch col-12 col-sm-12 col-md-3 mb-3">
                <div className="webdesigntuts-workshopchoose">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      fetch(
                        config.CHOOSE_LIST + '?search=' + e.target.search.value
                      )
                        .then(r => r.json())
                        .then(travelobj => {
                          console.log(travelobj);
                          setData(travelobj);
                        });
                    }}
                  >
                    <input
                      type="search"
                      placeholder="請輸入產品名/關鍵字/產品代碼"
                      aria-label="Search"
                      name="search"
                    />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="list">{renderMe(data)}</div>
        </div>
      </div>

      <div className="morechoose">
        {data.rows && data.rows.length ? (
          <div aria-label="Page navigation example">
            <ul className="pagination">
              <li
                className={
                  data.page === 1 ? 'page-item-c disabled' : 'page-item-c'
                }
              >
                <button
                  className="page-link"
                  onClick={() => {
                    history.push(`?page=${data.page - 1}`);
                  }}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {Array(data.totalPages)
                .fill(1)
                .map((el, i) => (
                  <li
                    className={
                      data.page === i + 1
                        ? 'page-item-c active-c'
                        : 'page-item-c'
                    }
                    key={'pageLi' + i}
                  >
                    <button
                      className="page-link"
                      onClick={() => {
                        history.push(`?page=${i + 1}`);
                      }}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              <li
                className={
                  data.page === data.totalPages
                    ? 'page-item-c disabled'
                    : 'page-item-c'
                }
              >
                <button
                  className="page-link"
                  href="#/"
                  onClick={() => {
                    history.push(`?page=${data.page + 1}`);
                  }}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <hr className="generalHr" />
    </>
  );
}
export default TravelChoose;
