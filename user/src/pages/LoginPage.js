//====== Final Project - Andréia Sales Ribeiro ========
import React from 'react';
import MyContent from '../components/MyContent/MyContent';
import MyFooter from '../components/MyFooter/MyFooter';
import LoginContent from '../components/LoginContent/LoginContent';
import NavBar from '../components/NavBar/NavBar';

const LoginPage = () => {


    return (
        <>
            <NavBar></NavBar>
            <LoginContent />
            <MyContent />
            <MyFooter />
        </>

    );
};


export default LoginPage;