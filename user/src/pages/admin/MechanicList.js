import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';


export default function MechanicList() {
    const [data,Setdata]=useState([]);
    

    useEffect(()=>{
      axios.get('/api/mechanic/get')
      .then(res => {
         Setdata(res.data);
      })
      .catch(err => console.log(err));
    },[])
   
 
  
    const getItems=()=>{
      let list=[];
      data.map((element,indext)=>{
        list.push(
          <tr>
            <td>{element.name}</td>
            <td><Link to={'/admin/assignbooking/'+element._id}><button className='btn btn-primary'>Assign booking</button></Link></td>
        </tr>
        )
      });
    return list;
    }

    return (
        <>
         <h2 style={{marginTop:40,marginBottom:30}}>Mechanics</h2>
        <table className="table table-dark" >
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Assign Booking</th>
        </tr>
      </thead>
      <tbody>
         {getItems()}
      </tbody>
    </table>
    </>
    )
}
