//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React from 'react';
import MyContent from '../components/MyContent/MyContent';
import MyFooter from '../components/MyFooter/MyFooter';
import ServicesContent from '../components/ServicesContent/ServicesContent';
import NavBar from '../components/NavBar/NavBar';

const ServicesPage = () => {

    return (
        <>
            <NavBar></NavBar>
            <ServicesContent />
            <MyContent />
            <MyFooter />
        </>

    );
}

export default ServicesPage;