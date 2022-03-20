import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import { useState } from 'react';

//----頁面元件----

//找不到頁面
import NotFoundPage from './pages/NotFoundPage';

// Member
import MemberLogin from './pages/Member/MemberLogin';
import MemberSignUp from './pages/Member/MemberSignUp';
import MemberForgotPwd from './pages/Member/MemberForgotPwd';
import MemberPerson from './pages/Member/MemberPerson';
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
import CustomizeMainPage from './pages/Customize/CustomizeMainPage';
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
import TicketTest from './pages/Ticket/TicketTest';
import TicketTrip from './pages/Ticket/TicketTrip';
import TicketSeat from './pages/Ticket/TicketSeat';
import TicketMeal from './pages/Ticket/TicketMeal';

// Travel
import TravelIndex from './pages/Travel/TravelIndex';
import TravelChoose from './pages/Travel/TravelChoose';
import TravelNotes from './pages/Travel/TravelNotes';

// Forum
import ForumHomePage from './pages/Forum/ForumHomePage';
import ForumSinglePostPage from './pages/Forum/ForumSinglePostPage';
import ForumPublishPage from './pages/Forum/ForumPublishPage';
import ForumUArticlePage from './pages/Forum/ForumUArticlePage';
import ForumPostCategoryPage from './pages/Forum/ForumPostCategoryPage';
import ForumPublishUpdatePage from './pages/Forum/ForumPublishUpdatePage';

// Index
import IndexFirst from './pages/Index/IndexFirst';
// import IndexMain from './pages/Index/IndexMain';

//----頁面元件----

function App() {
  const [tripSelected, setTripSelected] = useState('');
  const [tripDays, setTripDays] = useState('');
  const [tripPrice, setTripPrice] = useState('');

  console.log(tripSelected, tripDays);
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <IndexFirst />
          </Route>
          {/* <Route exact path="/u-apexion">
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
          <Route path="/index-postPage"></Route>
          <Route path="/index-postPage"></Route>
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
          <Route path="/travel-notes">
            <TravelNotes />
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
          <Route path="/customize-mainpage">
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
          <Route path="/customize-order"></Route>
          <Route path="/trans-mainpage"></Route>
          <Route path="/trans-order"></Route>
          <Route path="/product-list/product-detail/:sid">
            <ProductsDetail />
          </Route>
          <Route path="/products-list" exact>
            <ProductsList />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route exact path="/cart-payment">
            <CartChoosePayment />
          </Route>
          <Route path="/cart-information">
            <CartInformation />
          </Route>
          <Route path="/cart-final-check">
            <CartFinalCheck />
          </Route>
          <Route path="/cart-credit-card">
            <CartCreditCard />
          </Route>
          <Route path="/cart-complete">
            <CardComplete />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
