//====== Garage_Booking_App- Andréia Sales Ribeiro =======
import React, { useState, useEffect } from 'react';
import axios from "axios";
import StyleRegisterContent from './StyleRegisterContent.css';
import Loader from '../Loader';
import Error from '../Error';
import Success from '../Success';


const RegisterContent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [vehicle_type, setVehicle_type] = useState('')
    const [vehicle_license, setVehicle_license] = useState('')
    const [vehicle_engine_type, setVehicle_engine_type] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    async function register() {
        if (password == cpassword) {
            const user = {
                name,
                email,
                phone,
                password,
                cpassword,
                vehicle_type,
                vehicle_license,
                vehicle_engine_type
            };

            try {
                setLoading(true);
               
                const result = await axios.post('./api/users/register', user).data
                setLoading(false);
                setSuccess(true)

                setName('')
                setEmail('')
                setPhone('')
                setPassword('')
                setCpassword('')
                window.location.href = '/login'

            } catch (error) {
                console.log(error)
                setLoading(false);
                setError(true);
            }
        } else {
            alert('password not matched')
        }
    }


    return (

        <div>


            <div className="top-bg-container3">
                {/*bg*/}
            </div>

            <div className="login-container3">

                <main>
                    <div className="content3">
                        <div className="title-form2">

                            {loading && (<Loader />)}
                            {error && (<Error />)}
                            {success && (<Success message='Registration Success'/>) }
                           

                            <h1>Register </h1>
                        </div> {/*close "title-form"*/}

                        <div style={{display:'flex'}} className="input-form2">
                            <div>
                                <div className="input-wrapper">
                                    <div>
                                        <input type="text"  placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="input-wrapper">

                                <div><input type="text" placeholder="Email"
                                    value={email} onChange={(e) => { setEmail(e.target.value) }} /></div>
                            </div>
                                <div className="input-wrapper">

                                <div><input type="tel"  placeholder="Phone number"
                                    value={phone} onChange={(e) => { setPhone(e.target.value) }} /></div>
                            </div>
                                <div className="input-wrapper">

                                <div><input type="password" id="password" placeholder="Password"
                                    value={password} onChange={(e) => { setPassword(e.target.value) }} /></div>
                            </div>
                                <div className="input-wrapper">
                                <div><input type="password" placeholder="Confirm password"
                                    value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} /></div>
                            </div>
                            </div>
                            <div>
                                <div className="input-wrapper">
                                <div><input type="txt"  placeholder="Vehicle type"
                                    value={vehicle_type} onChange={(e) => { setVehicle_type(e.target.value) }} />
                                </div>
                            </div>
                                <div className="input-wrapper">
                                <div><input type="txt"  placeholder="Vehicle license"
                                    value={vehicle_license} onChange={(e) => { setVehicle_license(e.target.value) }} />
                                </div>
                            </div>
                                <div className="input-wrapper">
                                <div><input type="txt"  placeholder="Vehicle engine type"
                                    value={vehicle_engine_type} onChange={(e) => { setVehicle_engine_type(e.target.value) }} />
                                </div>
                            </div>
                            </div>
                        </div> {/*close"input-form"*/}

                        <div className="register-btn">
                            <button className="btn-register" onClick={register}>Register</button>
                            <div><a href="/login">Already have an account?</a></div>
                        </div>

                    </div> {/*close "content"*/}

                </main>

            </div> {/*close "container"*/}


        </div>


    );
}

export default RegisterContent;