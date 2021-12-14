//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import style from './style.css'
import  {useParams} from 'react-router-dom';

export default function AdminBookingDetail() {
  const [data,setData]=useState({}) 

  const {id}=useParams();

  console.log(id);
  useEffect(()=>{    
    axios.post('/api/bookings/admin/getbooking/detail',{userid:JSON.parse(localStorage.getItem('current user'))._id,bookingid:id})
    .then(res => {
       setData(res.data);
    })
    .catch(err => console.log(err));

  },[])

  console.log(data);
    return (
        <div style={{display:'flex',justifyContent:'space-evenly'
  ,marginTop:'100px'}}> 
          <div>
           <h5 className='heading'>Booking Details</h5>
           <span className='text'>Service Name: {data.service}</span>
           <span className='text'>Date: {data.date}</span>
           <span className='text'>Service Cost: € {data.totalamount}</span>
           <span className='text'>Comment: {data.comment}</span>
           
          </div>
          <div>
           <h5 className='heading'>Vehicle  Details</h5>
           <span className='text'>Vehicle Type: {data.vehicle_type}</span>
           <span className='text'>Vehicle License: {data.vehicle_license}</span>
           <span className='text'>Vehicle Engine Type: {data.vehicle_engine_type}</span>
          </div>
          <div>
           <h5 className='heading'>Customer  Details</h5>
          
           <span className='text'>Name: {data.username}</span>
           <span className='text'>E-mail: {data.useremail}</span>
           <span className='text'>Phone: {data.userno}</span>

          </div>

        </div>
    )

}