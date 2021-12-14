//====== Final Project - Andréia Sales Ribeiro ========
import React from 'react';
import MyContent from '../components/MyContent/MyContent';
import MyFooter from '../components/MyFooter/MyFooter';
import RegisterContent from '../components/RegisterContent/RegisterContent';
import NavBar from '../components/NavBar/NavBar';

const RegisterPage = () => {
    return (

        <>
            <NavBar></NavBar>
            <RegisterContent />
            <MyContent />
            <MyFooter />
        </>

    );
};

export default RegisterPage;