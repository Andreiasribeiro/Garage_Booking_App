import React,{useState} from 'react';
import './style.css';
import axios  from 'axios';
export default function AddService() {
    const [data,setData]=useState({});
  
    const handlesubmit=()=>{
       
            axios.post('/api/services/service/save',{...data,userid:JSON.parse(localStorage.getItem('current user'))._id})
            .then(res => {
              alert('Service saved sucessfully');
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
            <h5 style={{textAlign:'center'}} className='heading'>Add Service</h5>
            <div style={{textAlign:'center'}} >
                <input name='name' onChange={e=>handleChange(e)} className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service name here'/>
                <input name='description' onChange={e=>handleChange(e)}  className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service description here'/>
                <input name='cost' onChange={e=>handleChange(e)}  className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service cost here'/>
                <input  name='imageurl' onChange={e=>handleChange(e)}  className='form-controller col-lg-5 col-sm-12' style={{display:'block',margin:'15px auto'}} placeholder='enter service image url here'/>
                <button className='btn btn-primary' onClick={handlesubmit} >Add Service </button>
            </div>
           {data.imageurl?<img src={data.imageurl} style={{height:200,width:250,marginTop:100,marginBottom:100}}/>:""} 
        </div>
    )
}