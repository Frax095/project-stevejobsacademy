import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from './components/navbar';
import Footer from './components/footer';
import Company from './components/company';
import Detail from './components/detail';
import OrderCompleted from './components/order-completed';
import Orders from './components/orders';
import ReviewsList from './components/reviews-list';

function App() {

  return (
    <>
      <Router>
        <NavBar/>
          <Route>
            <Route exact path="/" component={Company} />
            <Route exact path="/:detail" component={Detail} />
            <Route exact path="/order/completed" component={OrderCompleted} />
            <Route exact path="/order/last" component={Orders} />
            <Route exact path="/reviews/clients" component={ReviewsList} />
          </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
