import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/navbar';
//頁面元件
import Products from './pages/Products/Products';
import CoustomizeMainPage from './pages/Coustomize/CoustomizeMainPage';
import CartChoosePayment from './pages/Cart/CartChoosePayment';
import { useState } from 'react';
import Ticket from './pages/Ticket/Ticket';
import TravelIndex from './pages/Travel/TravelIndex';
import TravelChoose from './pages/Travel/TravelChoose';

//頁面元件

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/index-video"></Route>
          <Route path="/index"></Route>
          <Route path="/forum-index"></Route>
          <Route path="/index-postPage"></Route>
          <Route path="/index-postPage"></Route>
          <Route path="/member-login"></Route>
          <Route path="/member-signup"></Route>
          <Route path="/member-person"></Route>
          <Route path="/member-password"></Route>
          <Route path="/member-address"></Route>
          <Route path="/member-address-new"></Route>
          <Route path="/member-love"></Route>
          <Route path="/member-history"></Route>
          <Route path="/member-history-detail"></Route>
          <Route path="/travel-index">
            <TravelIndex />
          </Route>
          <Route path="/travel-choose">
          <TravelChoose />
          </Route>
          <Route path="/travel-notes"></Route>
          <Route path="/ticket-order">
            <Ticket />
          </Route>
          <Route path="/ticket-trip-choose"></Route>
          <Route path="/ticket-date-choose"></Route>
          <Route path="/ticket-meal-choose"></Route>
          <Route path="/ticket-confirm"></Route>
          <Route path="/coustomize-mainpage">
            <CoustomizeMainPage />
          </Route>
          <Route path="/coustomize-suit"></Route>
          <Route path="/coustomize-craft"></Route>
          <Route path="/coustomize-seat"></Route>
          <Route path="/coustomize-order"></Route>
          <Route path="/trans-mainpage"></Route>
          <Route path="/trans-order"></Route>
          <Route path="/products-list"></Route>
          <Route path="/products-detail/:id"></Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route exact path="/cart-payment">
            <CartChoosePayment />
          </Route>
          <Route path="/cart-information"></Route>
          <Route path="/cart-final-check"></Route>
          <Route path="/cart-credit-card"></Route>
          <Route path="/cart-complete"></Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
