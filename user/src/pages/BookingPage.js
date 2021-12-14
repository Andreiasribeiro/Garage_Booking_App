//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React, { useState, useEffect } from 'react';
import axios from "axios";
import StyleHomePage from './StyleHomePage.css';
import MyContent from '../components/MyContent/MyContent';
import MyFooter from '../components/MyFooter/MyFooter';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import { Modal, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar/NavBar';

function Popup(props) {

    const [data, setData] = useState({ vehicle_type: props.data.vehicle_type, vehicle_license: props.data.vehicle_license, vehicle_engine_type: props.data.vehicle_engine_type, service: props.service, comment: '', userid: JSON.parse(localStorage.getItem('current user'))._id, date: props.date })
    const change_data = (data1) => {
        setData({ ...data, [data1.target.name]: data1.target.value })
    }

    function submt_data() {

        axios.post('/api/bookings/bookservice', data)
            .then(res => {
                if (res.data == 'SNA') {
                    alert('Booking full at this date. Please select another day');
                }
                else if (res.data == 'Success') {
                    console.log('response data', res.data);
                    alert('Booking success');
                    window.location.href = '/bookingdetails'
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal show={props.show} size='lg'>
            <Modal.Header >
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body> Vehicle Type :         <input type='text' name='vehicle_type' onChange={e => change_data(e)} value={data.vehicle_type} className='form-control' />
                Vehicle Licence :      <input type='text' name='vehicle_license' onChange={e => change_data(e)} value={data.vehicle_license} className='form-control' />
                Vehicle Engine Type :  <input type='text' name='vehicle_engine_type' onChange={e => change_data(e)} value={data.vehicle_engine_type} className='form-control' />
                Service Name :  <input type='text' readOnly name='service' onChange={e => change_data(e)} value={data.service} className='form-control' />
                Write your comment/note here:<textarea name='comment' value={data.comment} onChange={e => change_data(e)} className='form-control'> </textarea>
            </Modal.Body>

            <Modal.Footer style={{ textAlign: 'center' }}>
                <button style={{ display: 'block', margin: 'auto' }} onClick={submt_data} className='btn btn-primary'>Book Now</button>
                <button style={{ display: 'block', margin: 'auto' }} onClick={e => props.setShow(!props.show)} className='btn btn-danger'>Close</button>
            </Modal.Footer>
        </Modal>
    )

}

function BookingPage({ match }) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [service, setService] = useState();
    const [dateselected, SetDateselected] = useState(new Date());
    const [data, setData] = useState({ available: false, vehicle: null });
    const [show, setShow] = useState(true);

    const serviceid = match.params.serviceid

    useEffect(async () => {
        try {
            setLoading(true);
            const data = (await axios.post("/api/services/getservicebyid",
                { serviceid: match.params.serviceid })).data;

            if (data == 'SWW') {
                window.location.reload();
            }
            setService(data);
            setLoading(false);
        } catch (error) {

            setLoading(false);
            setError(true)
        }
    }, []);

    async function bookService() {
        //object to send to the backend
        //moment to format the date
        const bookingDetails = {
            service: service['_id'],
            userid: JSON.parse(localStorage.getItem('current user'))._id,
            date: moment(dateselected).format('YYYY-MM-DD')

        }
        try {
            axios.post('/api/bookings/check/avail', bookingDetails)
                .then(res => {
                    if (res.data == 'SNA') {
                        alert('Booking full at this date. Please select another day.');
                    }
                    else {
                        console.log('response data', res.data);
                        setData({ available: true, vehicle: res.data });

                    }
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.log(error)
        }
    }

    function filterByDate(date) {
        console.log(date);
        let d = new Date(date);
        if (d.getDay() == 0) {
            alert("We are closed on Sundays. Please select another day.");
            return;
        }
        console.log(moment(date).format('DD-MM-YYYY'))
        SetDateselected(date);
    }

    console.log('selectedday=>', dateselected);

    return (

        < div>
            <NavBar></NavBar>
            {data.available ? <Popup date={dateselected} show={show} service={service.name} setShow={setShow} data={data.vehicle} /> : ''}
            <div className="m-5" style={{ padding: 20, border: '1px solid white' }}>
                {loading ? (<Loader />) : service ? (<div>

                    <div className="row justity-content-center mt-5">

                        <div className="col-md-4" style={{ color: 'white' }}>
                            {/*<h1>Booking Details</h1> */}
                            {/*<img src={service.imageurls} className="bigimg" /> */}
                        </div>

                        <div className="col-md-4" style={{ color: 'white' }}>

                            <h2>Book this service:</h2>
                            <h2 >{service.name}</h2>
                            <p style={{ color: 'white' }}>Date: <input type='date' value={dateselected} onChange={e => filterByDate(e.target.value)} style={{ width: 200, borderRadius: 10, height: 35 }} /></p>
                            <p>Cost: € {service.cost}</p>
                            <div >
                                <button className="btn btn-dark" onClick={() => { bookService(); setShow(true); }} >Proceed</button>
                               
                            </div>

                        </div>

                    </div>

                </div>) : <Error />}
            </div>
            <MyContent />
            <MyFooter />
        </div>
    );
}

export default BookingPage;