//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React from 'react';
import StyleHomePage from './StyleHomePage.css'; //not remove it
import MyContent from '../components/MyContent/MyContent';
import MyFooter from '../components/MyFooter/MyFooter';
import HomeContent from '../components/HomeContent/HomeContent';
import NavBar from '../components/NavBar/NavBar';
import {Redirect} from 'react-router-dom';

export default function MainPage() {
    let user = JSON.parse(localStorage.getItem('current user'));
    if (user != null) {
      if (user.isAdmin) {
        return <Redirect to='/admin/home' />
      }
    }
    return (
        <>
            <NavBar></NavBar>
            <HomeContent />
            <MyContent />
            <MyFooter />
        </>

    );
};