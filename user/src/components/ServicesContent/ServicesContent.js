//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Service from '../Service/Service';
import Loader from '../Loader';
import Error from '../Error';
import moment from 'moment';



const ServicesContent = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [dateselected, SetDateselected] = useState(new Date());


    //API to get all services from the database
    useEffect(async () => {
        try {
            setLoading(true);
            const data = (await axios.get('/api/services/getallservices')).data;
            setServices(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            console.log(error)
            setLoading(false);
        }
    }, []);

    //moment to format the date 
    function filterByDate(date) {
        console.log(moment(date).format('DD-MM-YYYY'))
        SetDateselected(moment(date).format('DD-MM-YYYY'))

    }

    return (<div>

        <div >
            <main>
                <div >
                    {/* To show all services from the database */}
                    <h1 style={{ marginTop: 70 }}>We have {services.length} services</h1>
                    {/*Loader and Error component*/}
                    {/*map all services from the database*/}
                    <div className="row justify-content-center mt-5">
                        {loading ? (<Loader />) : services.length > 1 ? (services.map(service => {
                            {/*To get the selected date and save it locally and load the service component*/ }
                            return <div className="col-md-9 mt-3">
                                <Service service={service} dateselected={dateselected} />
                            </div>;
                        })) : (<Error />)}
                    </div>
                </div>
            </main>
        </div>
    </div>);
}

export default ServicesContent;