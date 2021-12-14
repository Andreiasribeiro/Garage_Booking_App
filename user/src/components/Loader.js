//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React, {useState} from 'react';
import FadeLoader from "react-spinners/FadeLoader";


function Loader() {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FFF629");


    //const override = css=''
   // `
  //display: block;
  //margin: 0 auto;
  //border-color: red;
//`;
    return (
        <div>
            <div className="sweet-loading">

                <FadeLoader color={color} loading={loading} css='' size={80} />
            </div>

        </div>

    );
}

export default Loader;
