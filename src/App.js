import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import React, { useState } from 'react';
import ScrollToTop from './pages/Cart/components/ScrollToTop';

//----頁面元件----

//找不到頁面
import NotFoundPage from './pages/NotFoundPage';

// Member
import MemberLogin from './pages/Member/MemberLogin';
import MemberSignUp from './pages/Member/MemberSignUp';
import MemberForgotPwd from './pages/Member/MemberForgotPwd';
import MemberPerson from './pages/Member/MemberPerson';
import MemberPersonEdit from './pages/Member/MemberPersonEdit';
import MemberPwdEdit from './pages/Member/MemberPwdEdit';
import MemberAddress from './pages/Member/MemberAddress';
import MemberAddressNew from './pages/Member/MemberAddressNew';
import MemberOrderHistory from './pages/Member/MemberOrderHistory';
import MemberOrderDetails from './pages/Member/MemberOrderDetails';
import MemberCollect from './pages/Member/MemberCollect';

// Products
import Products from './pages/Products/Products';
import ProductsList from './pages/Products/ProductsList';
import ProductsDetail from './pages/Products/ProductsDetail';
import CartQuantity from './pages/Products/CartQuantity';
import UserNameF from './components/UserNameF';
import SignOut from './components/SignOut';

// Customize
// import CustomizeMainPage from './pages/Customize/CustomizeMainPage';
import CustomizeSeat from './pages/Customize/CustomizeSeat';
import CustomizeCraft from './pages/Customize/CustomizeCraft';
import CustomizeSuit from './pages/Customize/CustomizeSuit';

// Cart
import CartChoosePayment from './pages/Cart/CartChoosePayment';
import CartInformation from './pages/Cart/CartInformation';
import CartFinalCheck from './pages/Cart/CartFinalCheck';
import CartCreditCard from './pages/Cart/CartCreditCard';
import CardComplete from './pages/Cart/CardComplete';

// Ticket
import Ticket from './pages/Ticket/Ticket';
import TicketDate from './pages/Ticket/TicketDate';
import TicketDateOld from './pages/Ticket/TicketDateOld';
import TicketTrip from './pages/Ticket/TicketTrip';
import TicketSeat from './pages/Ticket/TicketSeat';
import TicketMeal from './pages/Ticket/TicketMeal';
import SeatDrag from './pages/Ticket/SeatDrag';

// Travel
import TravelIndex from './pages/Travel/TravelIndex';
import TravelChoose from './pages/Travel/TravelChoose';
import TravelNotes from './pages/Travel/TravelNotes';
import TravelNotes2 from './pages/Travel/TravelNotes2';
import TravelNotes3 from './pages/Travel/TravelNotes3';
import TravelChoosePriceM from './pages/Travel/TravelChoosePriceM';
import TravelChoosePriceF from './pages/Travel/TravelChoosePriceF';
import TravelChooseDayM from './pages/Travel/TravelChooseDayM';
import TravelChooseDayF from './pages/Travel/TravelChooseDayF';
import TravelIndexSearch from './pages/Travel/TravelIndexSearch';

// Forum
import ForumHomePage from './pages/Forum/ForumHomePage';
import ForumSinglePostPage from './pages/Forum/ForumSinglePostPage';
import ForumPublishPage from './pages/Forum/ForumPublishPage';
import ForumUArticlePage from './pages/Forum/ForumUArticlePage';
import ForumPostCategoryPage from './pages/Forum/ForumPostCategoryPage';
import ForumPublishUpdatePage from './pages/Forum/ForumPublishUpdatePage';
import ForumMemArticlePage from './pages/Forum/ForumMemArticlePage';
import ForumHotPage from './pages/Forum/ForumHotPage';
import ForumPersonalPage from './pages/Forum/ForumPersonalPage';
import ForumPersonalSavePage from './pages/Forum/ForumPersonalSavePage';

import { CartProvider } from './pages/Cart/utils/useCart';

//endmemberName
import VedioEnd from './pages/VedioEnd';

// Index
import IndexFirst from './pages/Index/IndexFirst';
import IndexMain from './pages/Index/IndexMain';

//----頁面元件----

function App() {
  //行程資訊傳遞
  const [travelSelected, setTravelSelected] = useState('潘朵拉星Pandora');
  console.log('行程選擇', travelSelected);

  //訂票資訊傳遞
  const [tripSelected, setTripSelected] = useState('潘朵拉星Pandora');
  const [tripDays, setTripDays] = useState(8);
  const [tripPrice, setTripPrice] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [seatNumberDemo, setSeatNumberDemo] = useState([]);
  const [mealSelected, setMealSelected] = useState({});
  const [change, setChange] = useState(0);
  const [memberName, setMemberName] = useState([]);

  console.log('成員', memberName);
  // console.log('行程', tripSelected);
  // console.log('出發日期', tripDate);
  // console.log('選擇座位', seatNumberDemo);
  // console.log('餐點', mealSelected);
  // console.log(
  //   tripSelected,
  //   tripDays,
  //   tripPrice,
  //   tripDate.dateSelected,
  //   tripDate.returnDate
  // );

  // 以下是cart的部分
  // 第一頁傳『userOption』資料到第二頁、第三頁
  const [userOption, setUserOption] = useState({
    deliveryArea: '',
    paymentMethod: '',
    deliveryWay: '',
  });

  const [cartUserInfo, setCartUserInfo] = useState({
    name: '',
    mobile: '',
    email: '',
    addressCity: '',
    addressDist: '',
    address: '',
  });
  const [suitAmount, setSuitAmount] = useState(0);
  const [shipAmount, setShipAmount] = useState(0);
  const [seatAmount, setSeatAmount] = useState(0);
  const [mealArr, setMealArr] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0); // 衣服褲子總金額
  const [totalProductItem, setTotalProductItem] = useState(0); // 衣服褲子總數量
  const [cartTripTotal, setCartTripTotal] = useState(0); // 票券總金額
  const [cartTicketAmount, setCartTicketAmount] = useState(0); // 票券數量
  const [cartCustomTotalPrice, setCartCustomTotalPrice] = useState(0); // 客製化總金額
  const [cartOrderListNumber, setCartOrderListNumber] = useState(0); // 訂單編號初始值
  // 以上是cart的部分

  //周邊商品區
  const [productDetailList, setProductDetailList] = useState([]);
  //console.log('productDetailList', productDetailList); // 測試，by雍
  const [cartTotal, setCartTotal] = useState(0);
  const [userNavbar, setUserNavbar] = useState('登入');
  const [signOut, setSignOut] = useState('註冊');

  //客製化商品
  const [suit, setSuit] = useState([]); // 太空服
  const [customize, setCustomize] = useState([]); // 椅子
  const [craft, setCraft] = useState([]); // 火箭
  //console.log('suit', suit);
  //console.log('customize', customize);
  console.log('craft', craft);

  // forum
  const [newpost, setNewPost] = useState(false);

  return (
    <CartProvider>
      <Router>
        <>
          <ScrollToTop>
            <UserNameF.Provider value={{ userNavbar, setUserNavbar }}>
              <CartQuantity.Provider value={{ cartTotal, setCartTotal }}>
                <SignOut.Provider value={{ signOut, setSignOut }}>
                  <Navbar setProductDetailList={setProductDetailList} />
                  <Switch>
                    <Route exact path="/">
                      <IndexFirst />
                    </Route>
                    <Route exact path="/u-apexion">
                      <IndexMain />
                    </Route>
                    <Route exact path="/forum-home">
                      <ForumHomePage
                        newpost={newpost}
                        setNewPost={setNewPost}
                      />
                    </Route>
                    <Route path="/forum-home/posts/:sid">
                      <ForumSinglePostPage />
                    </Route>
                    <Route path="/publish">
                      <ForumPublishPage
                        newpost={newpost}
                        setNewPost={setNewPost}
                      />
                    </Route>
                    <Route path="/publish-edit/:sid">
                      <ForumPublishUpdatePage
                        newpost={newpost}
                        setNewPost={setNewPost}
                      />
                    </Route>
                    <Route path="/forum-apexion-articles">
                      <ForumUArticlePage />
                    </Route>
                    <Route path="/posts-category/:art_category_sid">
                      <ForumPostCategoryPage />
                    </Route>
                    <Route path="/forum-member-posts">
                      <ForumMemArticlePage />
                    </Route>
                    <Route path="/forum-hot-posts">
                      <ForumHotPage />
                    </Route>
                    <Route path="/forum-personal">
                      <ForumPersonalPage />
                    </Route>
                    <Route path="/forum-personal-saved">
                      <ForumPersonalSavePage />
                    </Route>
                    <Route path="/member-login">
                      <MemberLogin />
                    </Route>
                    <Route path="/member-sign-up">
                      <MemberSignUp />
                    </Route>
                    <Route path="/member-forgot-pwd">
                      <MemberForgotPwd />
                    </Route>
                    <Route path="/member-person">
                      <MemberPerson />
                    </Route>
                    <Route path="/member-person-edit">
                      <MemberPersonEdit />
                    </Route>
                    <Route path="/member-password-edit">
                      <MemberPwdEdit />
                    </Route>
                    <Route path="/member-address">
                      <MemberAddress />
                    </Route>
                    <Route path="/member-address-new">
                      <MemberAddressNew />
                    </Route>
                    <Route path="/member-order-history">
                      <MemberOrderHistory />
                    </Route>
                    <Route path="/member-order-detail">
                      <MemberOrderDetails />
                    </Route>
                    <Route path="/member-collect">
                      <MemberCollect />
                    </Route>
                    {/* 行程頁面 */}
                    <Route path="/travel-index">
                      <TravelIndex />
                    </Route>
                    <Route path="/travel-choose">
                      <TravelChoose />
                    </Route>
                    <Route path="/travel-UAP-001">
                      <TravelNotes
                        setTravelSelected={setTravelSelected}
                        setTripSelected={setTripSelected}
                        setTripDays={setTripDays}
                      />
                    </Route>
                    <Route path="/travel-UAP-002">
                      <TravelNotes2
                        setTravelSelected={setTravelSelected}
                        setTripSelected={setTripSelected}
                        setTripDays={setTripDays}
                      />
                    </Route>
                    <Route path="/travel-UAP-004">
                      <TravelNotes3
                        setTravelSelected={setTravelSelected}
                        setTripSelected={setTripSelected}
                        setTripDays={setTripDays}
                      />
                    </Route>
                    <Route path="/travelchoose-pricem">
                      <TravelChoosePriceM />
                    </Route>
                    <Route path="/travelchoose-pricef">
                      <TravelChoosePriceF />
                    </Route>
                    <Route path="/travelchoose-daym">
                      <TravelChooseDayM />
                    </Route>
                    <Route path="/travelchoose-dayf">
                      <TravelChooseDayF />
                    </Route>
                    <Route path="/travelchoose-UAS-004">
                      <TravelIndexSearch />
                    </Route>

                    {/* 訂票頁面 */}
                    <Route path="/ticket-order">
                      <Ticket setMemberName={setMemberName} />
                    </Route>
                    <Route path="/ticket-trip-choose">
                      <TicketTrip
                        setTripSelected={setTripSelected}
                        setTripDays={setTripDays}
                        setTripPrice={setTripPrice}
                        travelSelected={travelSelected}
                      />
                    </Route>
                    <Route path="/ticket-date-choose">
                      <TicketDate
                        tripSelected={tripSelected}
                        tripDays={tripDays}
                        setTripDate={setTripDate}
                      />
                    </Route>
                    <Route path="/ticket-date-choose-old">
                      <TicketDateOld />
                    </Route>
                    <Route path="/ticket-seat-choose">
                      <TicketSeat
                        tripDate={tripDate}
                        seatNumberDemo={seatNumberDemo}
                        setSeatNumberDemo={setSeatNumberDemo}
                        memberName={memberName}
                      />
                    </Route>
                    <Route path="/ticket-meal-choose">
                      <TicketMeal
                        mealSelected={mealSelected}
                        setMealSelected={setMealSelected}
                        setChange={setChange}
                        change={change}
                        tripSelected={tripSelected}
                        tripDate={tripDate}
                        seatNumberDemo={seatNumberDemo}
                        tripDays={tripDays}
                        tripPrice={tripPrice}
                        memberName={memberName}
                      />
                    </Route>
                    <Route path="/ticket-confirm"></Route>
                    <Route path="/ticket-test">
                      <SeatDrag />
                    </Route>
                    {/* <Route path="/customize-mainpage">
                      <CustomizeMainPage />
                    </Route> */}
                    <Route path="/customize-suit">
                      <CustomizeSuit setSuit={setSuit} />
                    </Route>
                    <Route path="/customize-craft">
                      <CustomizeCraft setCraft={setCraft} />
                    </Route>
                    <Route path="/customize-seat">
                      <CustomizeSeat
                        setCustomize={setCustomize}
                        craft={craft}
                        suit={suit}
                      />
                    </Route>
                    <Route path="/customize-order"></Route>
                    <Route path="/trans-mainpage"></Route>
                    <Route path="/trans-order"></Route>

                    <Route path="/product-detail/:sid">
                      <ProductsDetail
                        setProductDetailList={setProductDetailList}
                      />
                    </Route>
                    <Route path="/products-list/:category?" exact>
                      <ProductsList />
                    </Route>
                    <Route path="/products" exact>
                      <Products setProductDetailList={setProductDetailList} />
                    </Route>
                    <Route exact path="/cart-payment">
                      <CartChoosePayment
                        cartTotalPrice={cartTotalPrice} //衣服褲子總金額
                        setCartTotalPrice={setCartTotalPrice} //衣服褲子總金額
                        //---------------------------------
                        mealArr={mealArr}
                        setMealArr={setMealArr}
                        tripSelected={tripSelected} //from 采諭
                        setTripSelected={setTripSelected} //from 采諭
                        tripPrice={tripPrice} //from 采諭
                        setTripPrice={setTripPrice} //from 采諭
                        tripDate={tripDate} //from 采諭
                        setTripDate={setTripDate} //from 采諭
                        mealSelected={mealSelected} //from 采諭
                        setMealSelected={setMealSelected} //from 采諭
                        memberName={memberName}
                        //---------------------------------
                        productDetailList={productDetailList} //from 智婷        // 刪除資料 state, setState 都要給
                        setProductDetailList={setProductDetailList} //from 智婷  // 刪除資料 state, setState 都要給
                        //---------------------------------
                        suit={suit} // from Michael
                        setSuit={setSuit} // from Michael
                        customize={customize} // from Michael
                        setCustomize={setCustomize} // from Michael
                        craft={craft} // from Michael
                        setCraft={setCraft} // from Michael
                        setSuitAmount={setSuitAmount}
                        suitAmount={suitAmount}
                        setShipAmount={setShipAmount}
                        shipAmount={shipAmount}
                        setSeatAmount={setSeatAmount}
                        seatAmount={seatAmount}
                        //---------------------------------
                        totalProductItem={totalProductItem} // 總衣服數量
                        setTotalProductItem={setTotalProductItem}
                        cartTripTotal={cartTripTotal} // 票券總金額
                        setCartTripTotal={setCartTripTotal} // 票券總金額
                        cartTicketAmount={cartTicketAmount}
                        setCartTicketAmount={setCartTicketAmount}
                        cartCustomTotalPrice={cartCustomTotalPrice} // 客製化總金額
                        setCartCustomTotalPrice={setCartCustomTotalPrice} // 客製化總金額
                        //---------------------------------
                        setUserOption={setUserOption}
                        userOption={userOption}
                      />
                    </Route>
                    <Route path="/cart-information">
                      <CartInformation
                        setUserOption={setUserOption}
                        userOption={userOption}
                        setCartUserInfo={setCartUserInfo} //第二頁送到第三頁：送
                        cartUserInfo={cartUserInfo}
                      />
                    </Route>
                    <Route path="/cart-final-check">
                      <CartFinalCheck
                        mealArr={mealArr}
                        tripSelected={tripSelected} //from 采諭
                        tripPrice={tripPrice} //from 采諭
                        tripDate={tripDate} //from 采諭
                        setTripDate={setTripDate} //from 采諭
                        mealSelected={mealSelected} //from 采諭
                        setMealSelected={setMealSelected} //from 采諭
                        memberName={memberName}
                        //-------------------------------------------------
                        productDetailList={productDetailList} // from 智婷
                        //-------------------------------------------------
                        suit={suit} // from Michael
                        customize={customize} // from Michael
                        craft={craft} // from Michael
                        suitAmount={suitAmount}
                        shipAmount={shipAmount}
                        seatAmount={seatAmount}
                        //-------------------------------------------------
                        userOption={userOption}
                        setCartUserInfo={setCartUserInfo}
                        cartUserInfo={cartUserInfo} //第二頁送到第三頁：收
                        cartTotalPrice={cartTotalPrice} // 衣服褲子總金額
                        totalProductItem={totalProductItem} //購物車總衣服數量
                        cartTripTotal={cartTripTotal} // 票券總金額
                        cartTicketAmount={cartTicketAmount} // 票券數量
                        cartCustomTotalPrice={cartCustomTotalPrice} // 客製化總金額
                      />
                    </Route>
                    <Route path="/cart-credit-card">
                      <CartCreditCard
                        tripSelected={tripSelected} //from 采諭  票券名稱
                        tripPrice={tripPrice} //from 采諭  票券金額
                        productDetailList={productDetailList} //from 智婷  產品名稱、數量、金額
                        //-------------------------------------------------
                        suit={suit} // from Michael
                        customize={customize} // from Michael
                        craft={craft} // from Michael
                        //-------------------------------------------------
                        cartTotalPrice={cartTotalPrice} // 衣服褲子總金額
                        cartTripTotal={cartTripTotal} // 票券總金額
                        cartCustomTotalPrice={cartCustomTotalPrice} // 客製化總金額
                        cartOrderListNumber={cartOrderListNumber} // 訂單編號初始值
                        setCartOrderListNumber={setCartOrderListNumber} // 訂單編號後來的值
                        memberName={memberName}
                      />
                    </Route>
                    <Route path="/cart-complete">
                      <CardComplete
                        productDetailList={productDetailList} //from 智婷
                        //-------------------------------------------------
                        suit={suit} // from Michael
                        customize={customize} // from Michael
                        craft={craft} // from Michael
                        //-------------------------------------------------
                        totalProductItem={totalProductItem} //總衣服數量
                        cartTicketAmount={cartTicketAmount} // 票券數量
                        tripSelected={tripSelected}
                        tripPrice={tripPrice}
                        cartTotalPrice={cartTotalPrice} // 衣服褲子總金額
                        cartTripTotal={cartTripTotal} // 票券總金額
                        cartCustomTotalPrice={cartCustomTotalPrice} // 客製化總金額
                        suitAmount={suitAmount}
                        shipAmount={shipAmount}
                        seatAmount={seatAmount}
                        memberName={memberName}
                        cartOrderListNumber={cartOrderListNumber} // 訂單編號後來的值傳進去
                      />
                    </Route>
{/* 
                    <Route path="/vedio-end" exact>
                      <VedioEnd />
                    </Route> */}
                    <Route path="*">
                      <NotFoundPage />
                    </Route>
                  </Switch>
                  <Footer />
                </SignOut.Provider>
              </CartQuantity.Provider>
            </UserNameF.Provider>
          </ScrollToTop>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
