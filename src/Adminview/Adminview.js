import React,{useState,useEffect} from 'react'
import './Adminview.css'
import './../Home/Home.css'
import axios from 'axios'
import { currentUser } from '../util/currentUser'
import { loginRequired } from '../util/loginRequired'
import Viewmessage from './../Viewmessage/Viewmessage'
function Adminview() {
    const[currentReservation, setAllReservation] = useState([])

    
    async function fetchAllItems() {
        const response = await axios.get('/newbookedroom')
        console.log(response.data.data)
        setAllReservation(response.data.data)
      }

      useEffect(() => {
          fetchAllItems()
      }, [])
    

      useEffect(()=>{
        loginRequired();
      },[])

      async function logOut() {

        localStorage.removeItem('currentUser');
        window.location.href = '/admin'
      }
    
      if (!currentUser) {
        window.location.href = '/admin'
      }
      
  return (




    <div className='admin-container'>
      <p className='heading'>Reservation Details</p>
      <table class="table" border={1}>
                        <thead>
                            <tr className='table-row'>
                            <th scope="col">Sr.no</th>

                                <th scope="col">Fname</th>
                                <th scope="col">Lname</th>
                                <th scope="col">email</th>
                               
                                <th scope="col">phone</th>
                                <th scope="col">rtype</th>
                                <th scope="col">bedding</th>
                                <th scope="col">mealplan</th>

                                <th scope="col">cin</th>
                                <th scope="col">cout</th>




                            </tr>
                        </thead>
                        
                    
                    {
                        currentReservation?.map((index, item) => {
                            return (
                                <>
                                <tbody>
                            <tr border={3}>
                                <th scope="row">{item+1}</th>
                                <td>  {index.fname}</td>
                                <td>{index.lname}</td>
                                <td>{index.email}</td>
                                <td>{index.phone}</td>

                                <td>{index.rtype}</td>
                                <td>{index.bedding}</td>
                                <td>{index.mealplan}</td>
                                <td>{index.cin}</td>
                                <td>{index.cout}</td>

                              

                           
                            </tr>
                        </tbody>
                                  
                                </>
                            )
                        })
                    }
                    </table>
                    <a href='/viewmessage'><button className=' btn-primary align-btn' >View messages</button></a><button className=' btn-primary align' onClick={logOut}>Logout</button>
    </div>
  )
}

export default Adminview
