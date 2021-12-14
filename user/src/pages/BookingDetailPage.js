//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React,{useEffect, useState} from 'react';
import StyleHomePage from './StyleHomePage.css';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
import { element } from 'prop-types';


function BookingDetailPage() {

const [data, setData] = useState ([]);


    useEffect(()=>{
        axios.post('/api/bookings/get-booking',{user: JSON.parse(localStorage.getItem('current user'))._id})
                .then(res => {
                     setData(res.data);
                })
                .catch(err => console.log(err));

    },[])
   
    const get=()=>{
        let test=[];
        data.map((element)=>{
            console.log(element);
            test.push( <tr>
                <th scope="row">{element.date}</th>
                <td>{element.service}</td>
                <td>{element.status}</td>
                <td>{element.vehicle_type}</td>
                <td>{element.vehicle_engine_type}</td>
                <td>{element.vehicle_license}</td>
                <td>{element.comment}</td>
              </tr>)
        });
        return test;
    }



    return (

        < div>
        <NavBar></NavBar>
        <h2 style={{marginTop:40,marginBottom:30}}>Your Bookings</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Service</th>
                        <th scope="col">Status</th>
                         <th scope="col">Vehicle Type</th>
                        <th scope="col">Vehicle Engine Type</th>
                        <th scope="col">Vehicle License</th>
                        <th scope="col">Comment</th>
                    </tr>
                </thead>
                <tbody>
                  {get()}
                </tbody>
            </table>
            
        </div>
    );
}

export default BookingDetailPage;