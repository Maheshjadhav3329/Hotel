import React, { useState, useEffect } from 'react'
import { loginRequired } from '../util/loginRequired';
import './Viewmessage.css'
import axios from 'axios';

function Viewmessage() {

    const [currentmessage, setAllmessage] = useState([])

    useEffect(() => {
        loginRequired();
    }, [])

    async function fetchAllMessages() {
        const response = await axios.get('/viewmessage')
        setAllmessage(response.data.data)
    }
    useEffect(() => {
        fetchAllMessages();
    }, [])
    return (
        <div  className='viewmessage-container'>
            <div>
                <div className='col-md-12'>
                    <div className='text-center '>All Message Details</div>
                </div>
            </div>
            <hr className='mb-4' />
            <div className='row'>
                <div className='col-md-12'>
                    <table class="table table-dark table-hover" border='1'>
                        <thead>
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        {
                            currentmessage?.map((index, item) => {
                                return (
                                    <>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{item + 1}</th>
                                                <th scope="row">{index.fname}</th>
                                                <th scope="row">{index.phone}</th>
                                                <th scope="row">{index.email}</th>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Viewmessage
