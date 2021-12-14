import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
export default function AddItem() {
    const [data, setData] = useState({});

    const handlesubmit = () => {

        axios.post('/api/parts/add', { ...data })
            .then(res => {
                alert('Item saved sucessfully');
                window.location = '/admin/item-list';
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    console.log(data);
    return (
        <div style={{ display: 'block', margin: 'auto' }} className='container'>
            <h2 style={{ marginTop: 40, marginBottom: 20 }}>Car Parts and Supplies</h2>
            <h5 style={{ textAlign: 'center', marginTop: 40, marginBottom: 20 }} className='heading'>Add Item</h5>
            <div style={{ textAlign: 'center' }} >
                <input name='name' onChange={e => handleChange(e)} className='form-controller col-lg-5 col-sm-12' style={{ display: 'block', margin: '15px auto' }} placeholder='Enter item name here' />
                <input name='cost' onChange={e => handleChange(e)} className='form-controller col-lg-5 col-sm-12' style={{ display: 'block', margin: '15px auto' }} placeholder='Enter item price here' />
                <button className='btn btn-primary' onClick={handlesubmit} >Add Item </button>
            </div>
        </div>
    )
}