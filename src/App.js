import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import { useState } from 'react';
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

// Customize
// import CustomizeMainPage from './pages/Customize/CustomizeMainPage';
// import CustomizeSeat from './pages/Customize/CustomizeSeat';
// import CustomizeCraft from './pages/Customize/CustomizeCraft';
// import CustomizeSuit from './pages/Customize/CustomizeSuit';

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
import TicketTest from './pages/Ticket/TicketTest';
import TicketTrip from './pages/Ticket/TicketTrip';
import TicketSeat from './pages/Ticket/TicketSeat';
import TicketMeal from './pages/Ticket/TicketMeal';

// Travel
import TravelIndex from './pages/Travel/TravelIndex';
import TravelChoose from './pages/Travel/TravelChoose';
import TravelNotes from './pages/Travel/TravelNotes';
import TravelNotes2 from './pages/Travel/TravelNotes2';
import TravelNotes3 from './pages/Travel/TravelNotes3';

// Forum
import ForumHomePage from './pages/Forum/ForumHomePage';
import ForumSinglePostPage from './pages/Forum/ForumSinglePostPage';
import ForumPublishPage from './pages/Forum/ForumPublishPage';
import ForumUArticlePage from './pages/Forum/ForumUArticlePage';
import ForumPostCategoryPage from './pages/Forum/ForumPostCategoryPage';
import ForumPublishUpdatePage from './pages/Forum/ForumPublishUpdatePage';
import ForumMemArticlePage from './pages/Forum/ForumMemArticlePage';
import ForumHotPage from './pages/Forum/ForumHotPage';

import { CartProvider } from './pages/Cart/utils/useCart'


// Index
// import IndexFirst from './pages/Index/IndexFirst';
// import IndexMain from './pages/Index/IndexMain';

//----頁面元件----

function App() {
  const [tripSelected, setTripSelected] = useState('');
  const [tripDays, setTripDays] = useState('');
  const [tripPrice, setTripPrice] = useState('');
  console.log(tripSelected, tripDays, tripPrice);

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
  // 以上是cart的部分

  //周邊商品區
  const [ProductDetailList, setProductDetailList] = useState([]);

  return (
    <CartProvider>
      <Router>
        <>
          <Navbar />
          <Switch>
            {/* <Route exact path="/">
              <IndexFirst />
            </Route>
            <Route exact path="/u-apexion">
              <IndexMain />
            </Route> */}
            {/* <Route path="/index-video"></Route>
            <Route path="/index"></Route> */}
            <Route exact path="/forum-home">
              <ForumHomePage />
            </Route>
            <Route path="/forum-home/posts/:sid">
              <ForumSinglePostPage />
            </Route>
            <Route path="/publish">
              <ForumPublishPage />
            </Route>
            <Route path="/publish-edit/:sid">
              <ForumPublishUpdatePage />
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
            <Route path="/travel-index">
              <TravelIndex />
            </Route>
            <Route path="/travel-choose">
              <TravelChoose />
            </Route>
            <Route path="/travel-titan">
              <TravelNotes />
            </Route>
            <Route path="/travel-xandar">
              <TravelNotes2 />
            </Route>
            <Route path="/travel-mann">
              <TravelNotes3 />
            </Route>
            <Route path="/ticket-order">
              <Ticket />
            </Route>
            <Route path="/ticket-test">
              <TicketTest />
            </Route>
            <Route path="/ticket-trip-choose">
              <TicketTrip
                setTripSelected={setTripSelected}
                setTripDays={setTripDays}
                setTripPrice={setTripPrice}
              />
            </Route>
            <Route path="/ticket-date-choose">
              <TicketDate tripSelected={tripSelected} tripDays={tripDays} />
            </Route>
            <Route path="/ticket-date-choose-old">
              <TicketDateOld />
            </Route>
            <Route path="/ticket-seat-choose">
              <TicketSeat />
            </Route>
            <Route path="/ticket-meal-choose">
              <TicketMeal />
            </Route>
            <Route path="/ticket-confirm"></Route>
            {/* <Route path="/customize-mainpage">
              <CustomizeMainPage />
            </Route>
            <Route path="/customize-suit">
              <CustomizeSuit />
            </Route>
            <Route path="/customize-craft">
              <CustomizeCraft />
            </Route>
            <Route path="/customize-seat">
              <CustomizeSeat />
            </Route>
            <Route path="/customize-order"></Route> */}
            <Route path="/trans-mainpage"></Route>
            <Route path="/trans-order"></Route>
            <Route path="/products-list/product-detail/:sid">
              <ProductsDetail setProductDetailList={setProductDetailList} />
            </Route>
            <Route path="/products-list" exact>
              <ProductsList />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <ScrollToTop>
              <Route exact path="/cart-payment">
                <CartChoosePayment
                  tripSelected={tripSelected} //from 采諭
                  tripPrice={tripPrice} //from 采諭

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
                  userOption={userOption}
                  setCartUserInfo={setCartUserInfo}
                  cartUserInfo={cartUserInfo} //第二頁送到第三頁：收
                />
              </Route>
              <Route path="/cart-credit-card">
                <CartCreditCard />
              </Route>
              <Route path="/cart-complete">
                <CardComplete />
              </Route>
            </ScrollToTop>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
