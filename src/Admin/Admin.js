import React, { useState } from 'react'
import './Admin.css'
import swal from 'sweetalert'
import axios from 'axios'


function Admin() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()





    async function loginUser() {
        const response = await axios.post('/login', {
            email: email,
            password: password,
        })
        console.log(response.data)
        if (response.data.success) {

            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "okk ",
            });
            localStorage.setItem('currentUser', JSON.stringify(response.data.data));
            window.location.href = "/adminview"
        }
        else {
            await swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
            });
            setEmail("")
            setPassword("")
            localStorage.removeItem('currentUser');
        }
    }

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }


    return (
        <div className='admin'>
            <div className='row'>
                <div className='col-md-12'>
                    <div class="container">
                      <marquee> <h2 className='login-page-text'>Login Here To continue</h2></marquee> 

                    </div>

                </div>
            </div>
            <hr />

            <div className='row m-1  login-container'>

                <div className='col-md-7'>
                    <div className='login-form-container '>
                        <div className=' size-form-container main-form-container mt-3 '>

                            <div className='form-title clr' >
                                Admin Login
                                <hr />
                            </div>
                            <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label htmlFor='email' className='clr'>Email: </label>
                                <input type='email' id='email' placeholder='Email' className='user-input'
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            
                            <div class="input-container">
                            <label for="password" className='clr'>Password:</label>
                                <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='user-input' placeholder=' Password' id="password" name="password" />
                                <i class="btn text-pass" onClick={handleShow}>{show ? "Hide" : ""}</i>
                            </div>
                            <div>
                <hr />
                <button type='button' className='login-button' onClick={loginUser}>Login</button>
                <hr />
            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>








            </div>


        </div>
    )
}

export default Admin
