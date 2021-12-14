//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TiFilter } from 'react-icons/ti';

export default function AdminBookingList() {
  const [data, setData] = useState([{}])
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    axios.post('/api/bookings/admin/getbooking', { userid: JSON.parse(localStorage.getItem('current user'))._id })
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));

  }, [])


  function Filter(date) {

    console.log(date);
    let temp = data.filter(element => element.date == date);

    setTemp(temp);
  }

  function updateStatus(id, value) {
    axios.post('/api/bookings/status/update', { id: id, status: value })
      .then(res => {
        alert('status updated');
        if (value == 'Fixed/Completed') {

          window.location.href = '/admin/invoice/' + id;
        }
      })
      .catch(err => console.log(err));
  }

  function getRow() {
    let list = [];
    var a;
    if (temp == null) {
      a = data;
    }
    else {
      a = temp;
    }

    a.forEach((element, index) => {
      list.push(<tr>
        <th scope="row">{element.date}</th>
        <td>{element.username}</td>
        <td>{element.useremail}</td>
        <td>{element.service}</td>
        <td>{element.vehicle_type}</td>
        <td>
          <select onChange={e => updateStatus(element._id, e.target.value)} style={{ width: 'max-content', display: 'block', margin: 'auto' }} className='form-control'>
            <option hidden>{element.status}</option>
            <option>Booked</option>
            <option>In Service</option>
            <option>Fixed/Completed</option>
            <option>Collected</option>
            <option>Unrepairable/Scrapped</option>
          </select>
        </td>
        <td>{element.comment}</td>
        <Link to={'/admin/booking-details/' + element._id}><button style={{ marginTop: 5 }} className='btn  btn-primary'>View Details</button> </Link>
      </tr>)
    });
    return list;
  }

  console.log(data);
  return (
    <>
      <h2 style={{ marginTop: 40, marginBottom: 20 }}>Bookings</h2>
      <table className="table table-dark" >
        <thead>
          <tr>

            <th > Filter by:
              <div style={{ marginTop: 5, marginBottom: 5, marginLeft:5 }}className='row'>
                <input type='date' onChange={e => Filter(e.target.value)} />
                <button onClick={e => setTemp(null)} className='btn btn-primary'>All</button>
              </div>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Costumer</th>
            <th scope="col">Email</th>
            <th scope="col">Service Name</th>
            <th scope="col">Vehicle Type</th>
            <th scope="col">Status </th>
            <th scope="col">Comment</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

          {getRow()}
        </tbody>
      </table>
    </>
  )

}