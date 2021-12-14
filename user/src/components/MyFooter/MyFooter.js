//====== Final Project - Andréia Sales Ribeiro ========
import React from 'react';
import StyleMyFooter from './StyleMyFooter.css';
import fb from './../assets/fb.svg';
import inst from './../assets/inst.svg';
import wtapp from './../assets/wtapp.svg';
import lin from './../assets/lin.svg';
import logo_ar from './../assets/logo_ar.svg';
import logomotor from './../assets/logomotor.svg';


const MyFooter = () => {
    return (

        <div>

            <div className="my-footer" id="contact">
                <div className="ajuda">
                    <div className="footer-info">
                        <h2>About Us</h2>
                        <p><a href="/">Our Company</a></p>
                        <p><a href="/">Find us</a></p>
                        <p><a href="/services">Our Services</a></p>
                        <p><a href="/">Why we?</a></p>
                        <p><a href="/services">Book a Service</a></p>
                    </div>{/*close "footer-info"*/}

                    <div className="footer-info">
                        <h2>Open Hours</h2>
                        <p> Mon: 9.00am - 6.00pm</p>
                        <p>Tue: 9.00am - 6.00pm</p>
                        <p>Wed: 9.00am - 6.00pm</p>
                        <p>Thu: 9.00am - 6.00pm</p>
                        <p>Fri: 9.00am - 6.00pm</p>
                        <p>Sat: 10.00am - 2.00pm</p>
                        <p>Sun: CLOSED</p>
                    </div>{/*close "footer-info"*/}

                    <div className="footer-info">
                        <h2>Support</h2>
                        <p><a href="https://www2.hse.ie/conditions/covid19/" target="_blank">Covid-19</a></p>
                        <p><a href="/">Help Centre</a></p>
                        <p><a href="/">FAQ</a></p>
                        <p><a href="/">contact us</a></p>
                    </div>{/*close "footer-info"*/}

                    <div className="footer-info">
                        <h2>Garage Information</h2>
                        <p>30-34 Westmoreland St,</p>
                        <p>Dublin 2, D02 HK35</p>
                        <p>(+353) 01 633 3444</p>
                    </div>{/*close "footer-info"*/}
                </div>
            </div> {/*close "my-footer"*/}

            <div className="footer-midias">

                <div className="footer-logo">
                <a href="/"><img className="logo-img" src={logomotor} alt="Logo"></img></a>
                </div>
                <div>
                    <p>All Rights reserved Andréia Ribeiro © 2021</p>
                </div>

                <div className="midias" >
                    <a href="/"><img className="icon-img" src={fb} alt="Facebook"></img></a>
                    <a href="/"><img className="icon-img" src={inst} alt="Instagram"></img></a>
                    <a href="/"><img className="icon-img" src={wtapp} alt="WhatsApp"></img></a>
                    <a href="/"><img className="icon-img" src={lin} alt="Linkedin"></img></a>
                </div>

            </div >{/*close "footer-midias"*/}

        </div>

    );
}

export default MyFooter;