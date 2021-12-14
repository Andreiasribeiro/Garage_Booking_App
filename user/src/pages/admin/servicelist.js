//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function AdminServiceList() {
  const [data,setData]=useState([{}]) 

  useEffect(()=>{    
    axios.get('/api/services/getallservices')
    .then(res => {
       setData(res.data);
    })
    .catch(err => console.log(err));

  },[])


  function calldeleteapi(serviceid){
    axios.post('/api/services/service/delete',{serviceid:serviceid,userid:JSON.parse(localStorage.getItem('current user'))._id})
    .then(res => {
      alert('Service deleted');
      window.location.reload();
    })
    .catch(err => console.log(err));
  }

  function getRow(){
    let list=[];

    data.forEach((element,index) => {
      list.push(  <tr>
        <td scope="row">{element.name}</td>
        <td scope="row">{element.description}</td>
        <td>{element.cost}</td>
       
        <td><Link to ={'/admin/edit-service/'+element._id}><button style={{marginTop:5}} className='btn  btn-primary'>Edit</button> </Link> </td>
        <td><button style={{marginTop:5}} onClick={e=>calldeleteapi(element._id)} className='btn  btn-danger'>Delete</button> </td>
 
  </tr>)
    });
  return list;
  }

  console.log(data);
    return (
        <>
            <h2 style={{marginTop:40,marginBottom:10}}>Services</h2>
            <div style={{textAlign:'right'}} className="col-12">
            <Link to='/admin/add-service'>  <button style={{marginLeft:'auto',marginTop:10,marginBottom:10}} className="btn btn-primary">Add service</button> </Link>
            </div>
            <table className="table table-dark" >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Cost</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
          
            </tr>
          </thead>
          <tbody>
        
    {getRow()}
          </tbody>
        </table>
        </>
    )

}