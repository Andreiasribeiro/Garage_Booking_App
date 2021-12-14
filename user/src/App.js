//====== Garage_Booking_App- Andréia Sales Ribeiro =======
import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import BookingDetailPage from './pages/BookingDetailPage';
import adminroutes from './pages/admin/adminroutes';

//App.js is the entry point for the entire application
function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/services' exact component={ServicesPage} />
          <Route path='/book/:serviceid/:dateselected' exact component={BookingPage} />
          <Route path='/bookingdetails' exact component={BookingDetailPage} />
          <Route path='/admin' component={adminroutes} />
        </Switch>
      </Router>
    </div>
  );
} export default App;
