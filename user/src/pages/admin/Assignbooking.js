import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function EditService(){
    const [data,setData]=useState({});
    const [work,setWork]=useState({});
    const [booking,setBooking]=useState({weight:0});
    const {id}=useParams();


    

    const handlesubmit=()=>{
       // send the booking date, mechanic id and booking id
            axios.post('/api/mechanic/assign/mechanic',{date:booking.booking.date,booking_id:booking.booking._id,mechanic_id:id})
            .then(res => {
             console.log(res.data);
             alert(res.data);
             window.location.reload();
             
            })
            .catch(err => console.log(err)) 
    }

    const handleChange=(e)=>{
        axios.post('/api/mechanic/get-work',{id:id,date:e.target.value})
        .then(res => {
        setWork(res.data);
        }).catch(err=>console.log(err))
    }

    const getOption=()=>{
       let list =[];
       if(!work.booking){
           return;
       }
       work.booking.map((element,index)=>{
           list.push(<option value={index} >SERVICE: {element.service}____CUSTOMER: {element.username} </option>)
       })
       return list;
    }


    const setWeigth=(index)=>{
       let selectedBooking=work.booking[index];
       if(selectedBooking.service==='Major Repair'){
           setBooking({booking:selectedBooking,weight:2});
       }
       else{
        setBooking({booking:selectedBooking,weight:1})
       }
    }

    console.log(work,'w');
    console.log(booking,'booking');
   // console.log(work.booking[booking]);

    return(
        <div style={{display:'block',margin:'auto'}} className='container'>
            <h5 style={{textAlign:'center', marginTop: 50, marginBottom: 30}} className='heading'>Assign booking</h5>
            <div style={{textAlign:'center'}} >
                <input type='date' value={data.name} name='name' onChange={e=>handleChange(e)} className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service name here'/>
                <select onChange={e=>setWeigth(e.target.value)} style={{display:'block',margin:'50px auto'}}  className='form-control col-5'>
                  <option hidden>Select booking</option>
                   {getOption()}
                </select>

                <h5 style={{color:'#fff'}}>{work.work>=0?'Total work now ='+(booking.weight+work.work):''}</h5>
               

               <button onClick={handlesubmit} className='btn btn-primary'>Assign</button>
            </div>
        </div>
    )
}


