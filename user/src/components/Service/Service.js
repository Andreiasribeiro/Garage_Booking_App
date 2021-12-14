//====== Garage_Booking_App - Andréia Sales Ribeiro ========
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import StyleService from './StyleService.css';
import { Link } from 'react-router-dom';


//get the service and date selected to proceed with the booking
function Service({ service, dateselected, }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // return the all services and select one service by the id service
    return (
        <div className="containerser">
            <div className="serv-container">
                <img className="smallimg" src={service.imgurl} />
            </div>
            <div className="col-md-7">
                <h2>{service.name}</h2>
                <div className="descrition-box">
                    <p>Price : € {service.cost} </p>
                </div>
                <div className="box-view">
                     {/* button linked to booking page to proceed the booking */}
                    <Link to={`/book/ ${service._id}/${dateselected}`}>
                        <button className="bt-view" >Book Now</button>
                    </Link>
                    <button className="bt-view" onClick={handleShow} >View Details</button>
                </div>
            </div>
            {/* Pop up with the service information */}
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header >
                    <Modal.Title>{service.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{service.description} </Modal.Body>
                <Modal.Body>Price : € {service.cost} </Modal.Body>
                <Modal.Footer>
                    <Button className="bt-view" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Service