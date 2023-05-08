import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import './Signin.css'
import User from './../util/user.js';
import { Link } from 'react-router-dom'
import back from './../images/back.jpg'


function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function loginUser() {
    const response = await axios.post('/loginuser', {
      email: email,
      password: password,
    })
    console.log(response.data)
    if (response.data.success) {
      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "okk!",
      });
      localStorage.setItem('User', JSON.stringify(response.data.data));
      window.location.href = "/profile"
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
      localStorage.removeItem('User');
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
    
      <div className='row' style={{ backgroundImage:`url(${back})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:1000,width:1470
    }}>
        <div className='col-md-6'>
          <div class="container">
            <marquee><span className='info-container-text'>Login Here To continue</span></marquee>
          </div>

        </div>

        <div className='col-md-9'>
          <div className='login-form-container'>
            <div className='form-container main-form-container mt-3 '>
              <form>
                <div className='form-title clr' >
                  Login
                  <hr />
                </div>
                <div>
                  <label htmlFor='email' className='clr'>Email: </label>
                  <input type='email' id='email' placeholder='Enter Email' className='user-input'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                  <label htmlFor='password' className='clr'>Password: </label>
                  <input type='password' id='password' placeholder='Enter Password' className='user-input'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                  <hr />
                  <button type='button' className='login-button' onClick={loginUser}>Login</button>
                  <hr />
                  <span className='signup-form-link'>
                    <Link to='/userSignup' className='link-signup' >Don't have account signup</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
  
    </div>
  )
}

export default Signup