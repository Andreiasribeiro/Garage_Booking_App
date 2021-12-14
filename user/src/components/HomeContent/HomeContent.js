//====== Garage_Booking_App - Andréia Sales Ribeiro ========

import React from 'react';
import { useHistory } from 'react-router-dom';
import StyleHomeContent from './StyleHomeContent.css';

//Component for the User home page
const HomeContent = () => {
    let history = useHistory();
  
    return (

        <div>

            <div className="top-bg-container">
                {/*bg*/}
            </div>

            <div className="login-container">

                <main>
                    <div className="content">
                        <div className="type">
                            <h1>AR Motor Garage</h1>
                            <h2>All you need for your car.</h2>
                        </div> {/*"type"*/}
                        <div className="type2">
                            <p> Car Service In Dublin.  We take your booking here and now but you pay at the depot when you collect your car.
                            </p>
                        </div> {/*"type2"*/}

                        <div className="button-container2">
                            <button className="btn-booking" onClick={()=> history.push("/services")}>Book a Service</button>
                        </div> {/*"button-container"*/}
                    </div> {/*"content"*/}

                </main>

            </div> {/*close "container"*/}


        </div>
    );
}

export default HomeContent;