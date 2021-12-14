import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function EditService(){
    const [data,setData]=useState({});
    const {id}=useParams();

     useEffect(()=>{
        axios.post('/api/services/getservicebyid',{serviceid:id})
        .then(res => {
          setData(res.data);
        })
        .catch(err => console.log(err)) 
     },[])

    const handlesubmit=()=>{
       
            axios.post('/api/services/service/update',{...data,serviceid:id,userid:JSON.parse(localStorage.getItem('current user'))._id})
            .then(res => {
              alert('Service updated sucessfully');
              window.location='/admin/all-services';
            })
            .catch(err => console.log(err)) 
    }

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    console.log(data);
    return(
        <div style={{display:'block',margin:'auto'}} className='container'>
            <h5 style={{textAlign:'center'}} className='heading'>Edit Service</h5>
            <div style={{textAlign:'center'}} >
                <input value={data.name} name='name' onChange={e=>handleChange(e)} className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service name here'/>
                <input value={data.description} name='description' onChange={e=>handleChange(e)}  className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service description here'/>
                <input value={data.cost} name='cost' onChange={e=>handleChange(e)}  className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service cost here'/>
                <input value={data.imgurl} name='imgurl' onChange={e=>handleChange(e)}  className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service image url here'/>
                <button className='btn btn-primary' onClick={handlesubmit} >Update Service </button>
            </div>
           {data.imgurl?<img src={data.imgurl} style={{height:200,width:250,marginTop:100,marginBottom:100}}/>:""} 
        </div>
    )
}


