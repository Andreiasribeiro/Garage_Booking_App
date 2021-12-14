//====== Garage_Booking_App- Andréia Sales Ribeiro =======
import React, { useState } from 'react';
import axios from "axios";
import StyleLoginContent from './StyleLoginContent.css';
import Loader from '../Loader';
import Error from '../Error';



const LoginContent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function login() {
        const user = {
            email,
            password,
//If login is success store the user in local storage and navigate to home page
        }
        try {


            setLoading(true);
            const result = (await axios.post('./api/users/login', user)).data
            setLoading(false);
            let userdata=JSON.stringify(result);
            localStorage.setItem('current user', userdata);
            console.log(result['isAdmin'])
            if(result['isAdmin']){

                window.location.href='/admin/home'

            }
           else{
            window.location.href = '/';
           }

            setEmail('')
            setPassword('')


        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }

    }
    //Show a icon while the page is loading. In case of error display a message 'Invalid Credentials'
    return (

        <div>
            

            <div className="top-bg-container2">
                {/*bg*/}
            </div>

            <div className="login-container2">

                <main>
                    <div className="content2">
                  
                        <div className="title-form">
                        {loading && (<Loader />)}
                        {error && (<Error message='Invalid Credentials' />)} 
                            <h1> Login to your account  </h1>
                        </div> {/*close "title-form"*/}

                        <div className="input-form">
                     
                            <div className="input-wrapper">

                                <div><input type="text"
                                    placeholder="Email"
                                    value={email} onChange={(e) => { setEmail(e.target.value) }} /></div>
                            </div>

                            <div className="input-wrapper">

                                <div><input type="password" 
                                    placeholder="Password"
                                    password={true}
                                    value={password} onChange={(e) => { setPassword(e.target.value) }} /></div>

                            </div>

                        </div> {/*close"input-form"*/}
                        
                            <div className="login-btn">
                                <button className="btn-loging" onClick={login}>SIGN IN</button>
                                <div><a href="/register">Create an account</a></div>
                              
                            </div>
                           
                          
                             

                                                
                    </div> {/*close "content"*/}

                </main>

            </div> {/*close "container"*/}


        </div>


    );
}

export default LoginContent;