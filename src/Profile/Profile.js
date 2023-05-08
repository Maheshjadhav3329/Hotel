import React, { useEffect } from 'react'

import { currentUser } from '../util/currentUser'
import "./Profile.css"
import {userLogin} from './../util/userLogin.js' 
import { Link } from 'react-router-dom'
import { User } from '../util/user'
import login from './../images/login.png'
import back from './../images/back.jpg'



function Profile() {
 
    useEffect(()=>{
        userLogin();
      },[])

    function logOut() {
        localStorage.removeItem('User');
        window.location.href = '/signin'
    }

  


  

   
    return (
        <div >
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
                <div className='col-md-8 main-container'>
                    <div className='sub-container'>
                        
                        <div className='profile-container'>
                        <img src={login} className='login-img' /><br/>
                            <span className='pro-heading clr'>Profile</span>

                            <hr />
                            <span className='size clr'>Welcome  {User?.name} </span>
                            <br />
                            <span className='user-info clr'>Email : {User?.email} </span>
                            <br />
                            <span className='user-info clr'>Phone No : {User?.phone}</span> <br />
                            <span className='user-info clr'>Role : {User?.role}</span>
                            <hr />
                       
                    
                                <button type="button" className='btn-size' onClick={logOut}><span className='logout-txt'>Logout</span></button>

                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile