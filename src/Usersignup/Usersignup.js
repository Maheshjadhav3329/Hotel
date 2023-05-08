import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { currentUser } from './../util/currentUser.js'
import "./Usersignup.css"
import { Link } from 'react-router-dom';
import login from './../images/login.png'
import back from './../images/back.jpg'





function Usersignup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')

    async function signupUser() {
        const response = await axios.post('/signupuser', {
            name: name,
            email: email,
            phone: phone,
            password: password,
            role: role
        })
        console.log(response.data)
        if (response.data.success) {
            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "Continue !",
            });
            window.location.href = '/signin'
        }
        else {
            swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
            });
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
        }
    }

    return (
        <div>
                                        <nav class="navbar-default navbar-side bgcolor" role="navigation">
                    <div class="sidebar-collapse bgcolor">
                        <ul class="nav bgcolor" id="main-menu">

                            <li>
                                <a href="/"><i class="fa fa-home"></i> Homepage</a>
                            </li>

                        </ul>

                    </div>

                </nav>

            <div className='row'  style={{ backgroundImage:`url(${back})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:1000,width:1470
    }}>
                <div className=''>
                    <div className='info-container'>
                        <marquee> <span className='info-container-text'>⚠️Signup Here For Reservation...</span></marquee>

                    </div>
                    <div className='main-container-signup-img m-1'>
                        <div className='container'>
                        </div>

                    </div>




                </div>

                <div className='col-md'>
                    <div className='form-container'>
                        <img src={login} className='login-img' />
                        <div className='form-title clr'>

                            Signup
                        </div>
                        <form>
                            <div>
                                <label htmlFor='name ' className='clr'>Full Name: </label>
                                <input type='text' id='name' placeholder='Enter Name' className='user-input'
                                    value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label htmlFor='email' className='clr'>Email: </label>
                                <input type='email' id='email' placeholder='Enter Email' className='user-input'
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label htmlFor='phone' className='clr'>Phone: </label>
                                <input type='text' id='phone' placeholder='Enter Phone' className='user-input'
                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor='password' className='clr'>Password: </label>
                                <input type='password' id='password' placeholder='Enter Password' className='user-input'
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div>
                                <button type='button' className='signup-button' onClick={signupUser}>Signup</button>
                            </div>
                            <br/>
                        </form>
                        <span className='signup-form-link'>
                            <Link to='/signin' className='link-signup' >Already Have an Account?Login</Link>
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Usersignup