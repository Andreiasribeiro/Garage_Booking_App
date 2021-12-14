import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';

export default function ItemList() {
    const [data,Setdata]=useState([]);
   
    useEffect(()=>{
      axios.get('/api/parts/get')
      .then(res => {
         Setdata(res.data);
      })
      .catch(err => console.log(err));
    },[])
   
    function Delete(id){
      axios.post('/api/parts/delete',{id:id})
      .then(res => {
         alert('Item deleted successfully');
         window.location.reload()
      })
      .catch(err => console.log(err));
    }
  
    const getItems=()=>{
      let list=[];
      data.map((element,indext)=>{
        list.push(
          <tr>
            <td>{element.name}</td>
            <td>€{element.cost}</td>
            <td><Link to={'/admin/edit-item/'+element._id}><button className='btn btn-primary'>Edit</button></Link></td>
            <td><button onClick={(e)=>Delete(element._id)} className='btn btn-danger'>Delete</button></td>
          </tr>
        )
      });
    return list;
    }

    return (
        <>
         <h2 style={{marginTop:40,marginBottom:20}}>Car Parts and Supplies</h2>
         <div style={{textAlign:'right'}} className="col-12">
            <Link to='/admin/add-item'>  <button style={{marginLeft:'auto',marginTop:10,marginBottom:10}} className="btn btn-primary">Add parts</button> </Link>
            </div>
        <table className="table table-dark" >
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Cost</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
         {getItems()}
      </tbody>
    </table>
    </>
    )
}
