//====== Garage_Booking_App- Andréia Sales Ribeiro =======
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home';
import NavBar from './AdminNavBar/NavBar';
import AdminBookingDetail from './bookingdetails';
import AdminBookingList from './bookinglist';
import AdminServiceList from './servicelist';
import EditService from './Editservice';
import AddService from './Addservice';
import ItemList from './ItemList';
import AddItem from './AddItem';
import EditItem from './EditItem';
import MechanicList from './MechanicList';
import Assignbooking from './Assignbooking';
import Invoice from './Invoice';

//App.js is the entry point for the entire application
function adminroutes() {
  let user = JSON.parse(localStorage.getItem('current user'));
  if (user != null) {
    if (!user.isAdmin) {
      return <Redirect to='/login' />
    }
  }
  else {
    return <Redirect to='/login' />
  }
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/admin/home' exact component={Home} />
          <Route path='/admin/all-booking' exact component={AdminBookingList} />
          <Route path='/admin/booking-details/:id' exact component={AdminBookingDetail} />
          <Route path='/admin/all-services' exact component={AdminServiceList} />
          <Route path='/admin/edit-service/:id' exact component={EditService} />
          <Route path='/admin/add-service' exact component={AddService} />
          <Route path='/admin/add-item' exact component={AddItem} />
          <Route path='/admin/edit-item/:id' exact component={EditItem} />
          <Route path='/admin/item-list' exact component={ItemList} />
          <Route path='/admin/mechanic-list' exact component={MechanicList} />
          <Route path='/admin/assignbooking/:id' exact component={Assignbooking} />
          <Route path='/admin/invoice/:id' exact component={Invoice} />
        </Switch>
      </Router>

    </div>
  );
} export default adminroutes;
