//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React from 'react';
//from Bootstrap Alert


function Error ({message}) {


    return (
        <div>
            <div className='alert alert-danger' role="alert">
                {message}
            </div>
        </div>
    );
}

export default Error;