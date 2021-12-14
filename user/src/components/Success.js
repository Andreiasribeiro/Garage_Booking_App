//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React from 'react';
//from Bootstrap Alert

function Success({message}) {

    

    return (
        <div>
            <div className='alert alert-success' role="alert">
                {message}
            </div>
        </div>
    );
}

export default Success;