import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './../Home/Home.css'
import './Reservation.css'
import Select from 'react-select';
import axios from 'axios'
import swal from 'sweetalert'

function Reservation() {

    const [title, setTitle] = useState()
    const [count, setCount] = useState("5")
    const [trooms, settrooms] = useState()
    const [beds, setBeds] = useState();
    const [nRoom, setNRoom] = useState();
    const [mealss, setMealss] = useState();
    const [email, setEmail] = useState();
    const [lname, setLname] = useState();
    const [fname, setFname] = useState();
    const [cin, setCin] = useState();
    const [cout, setCout] = useState();
    const [nationality, setNationality] = useState();
    const [passcountry, setPasscountry] = useState();
    const [phone, setPhone] = useState();
    const [status, setStatus] = useState('NUll');






    async function reserve() {
        if (!title || !fname || !lname || !email || !nationality || !passcountry || !phone || !cin || !cout) {
            await swal({
                title: "Error",
                text: "All fields are required",
                icon: "error",
                button: "Try again!",
            });
        }


        const response = await axios.post('/reservationinfo', {
            title: title.label,
            fname: fname,
            lname: lname,
            email: email,
            nationality: nationality.label,
            passcountry: passcountry,
            phone: phone,
            rtype: trooms.label,
            bedding: beds.label,
            roomno: nRoom.label,
            mealplan: mealss.label,
            cin: cin,
            cout: cout
        })

        // const amount = troom.value
        // const pamount = "you have to pay "+amount+"At Counter"
        // alert(pamount)

        const status = response.data.success;
        if (response.data.success) {
            if (trooms.label == "Deluxe Room") {
                alert("You have to pay Rs.7,000 at counter")
            }
            else if (trooms.label == "Luxury Room") {
                alert("You have to pay Rs.5,200 at counter")
            }
            else if (trooms.label == "Guest House") {
                alert("You have to pay Rs.4,800 at counter")
            }
            else if (trooms.label == "Single Room") {
                alert("You have to pay Rs.3,000 at counter")
            }
            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "Okk",
            });


        }
        else {
            await swal({
              title: "Error",
              text: response.data.message,
              icon: "error",
              button: "Try Again!",
            });
            setBeds('')
            setFname('')
            setCin('')
            setCout('')
            setEmail('')
            setLname('')
            setMealss('')
            setNRoom('')
            setNationality('')
            setPasscountry('')
            setPhone('')
            setStatus('')
            setTitle('')
          }
          window.location.reload();

    }


    const titles = [
        { label: "Dr.", value: 355 },
        { label: "Mr.", value: 54 },
        { label: "Mrs", value: 43 },
        { label: "Prof", value: 61 },
        { label: "Miss", value: 61 }


    ];


    const troom = [
        { label: "Deluxe Room", value: 355 },
        { label: "Luxury Room", value: 54 },
        { label: "GUEST HOUSE", value: 43 },
        { label: "Single Room", value: 61 }
    ];
    const Ramount = [
        { label: "7000", value: 355 }
    ];

    const bed = [
        { label: "Single", value: 355 },
        { label: "Double", value: 54 },
        { label: "Triple", value: 43 },
        { label: "Quad", value: 61 },
        { label: "None", value: 61 }

    ];

    const nationalite = [
        { label: "Indian", value: 355 },
        { label: "NRI", value: 54 }

    ];


    const meals = [
        { label: "Room only", value: 355 },
        { label: "Breakfast", value: 54 },
        { label: "Half Board", value: 43 },
        { label: "Full Board", value: 61 },
        { label: "None", value: 61 }

    ];
    const nroom = [
        { label: "1", value: 355 },
    ];




    return (
        <div className='style'>
            <div id="wrapper">
                <nav class="navbar-default navbar-side" role="navigation">
                    <div class="sidebar-collapse">
                        <ul class="nav" id="main-menu">

                            <li>
                                <a href="/"><i class="fa fa-home"></i> Homepage</a>
                            </li>

                        </ul>

                    </div>

                </nav>

                <div id="page-wrapper" >
                    <div id="page-inner">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="page-header">
                                    RESERVATION 
                                </h1>
                            </div>
                        </div>


                        <div class="row">

                            <div class="col-md-5 col-sm-5">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        PERSONAL INFORMATION
                                    </div>
                                    <div class="panel-body">

                                        <div class="form-group">
                                            <label>Title*</label>
                                            <Select options={titles} id='class' placeholder='Select title' className='text-color-2' onChange={setTitle} required />
                                        </div>
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input name="fname" class="form-control" placeholder='First name' required value={fname} onChange={(e) => setFname(e.target.value)} />

                                        </div>
                                        <div class="form-group">
                                            <label>Last Name</label>
                                            <input name="lname" class="form-control" placeholder='First name' required value={lname} onChange={(e) => setLname(e.target.value)} />

                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input name="email" type="email" class="form-control" placeholder='First name' value={email} onChange={(e) => setEmail(e.target.value)} required />

                                        </div>
                                        <div class="form-group">
                                            <label>Nationality*</label><br />
                                            <Select options={nationalite} id='class' placeholder='Select title' className='text-color-2' onChange={setNationality} required />



                                        </div>

                                        <div class="form-group">
                                            <label>Passport Country*</label>
                                            <input name="passcountry" class="form-control" value={passcountry} onChange={(e) => setPasscountry(e.target.value)} required />

                                        </div>
                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input name="phone" type="text" class="form-control" placeholder="+91-000-000-0000" required value={phone} onChange={(e) => setPhone(e.target.value)} />

                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="row align-btn">
                                <div class="col-md-6 col-sm-6- ">
                                    <div class="panel panel-primary">
                                        <div class="panel-heading">
                                            RESERVATION INFORMATION
                                        </div>
                                        <div class="panel-body">
                                            <div class="form-group">
                                                <label>Type Of Room *</label>
                                                <Select options={troom} id='class' placeholder='Select Room Type' className='' onChange={settrooms} />

                                            </div>
                                            <div class="form-group">
                                                <label>Bedding Type</label>
                                                <Select options={bed} id='class' placeholder='Select Bedding Type' className='' onChange={setBeds} />

                                            </div>
                                            <div class="form-group">
                                                <label>No.of Rooms *</label>
                                                <Select options={nroom} id='class' placeholder='No. of rooms' className='' onChange={setNRoom} />

                                            </div>


                                            <div class="form-group">
                                                <label>Meal Plan</label>
                                                <Select options={meals} id='class' placeholder='Select Meal Plan' className='' onChange={setMealss} />

                                            </div>
                                            <div class="form-group">
                                                <label>Check-In</label>
                                                <DatePicker selected={cin} onChange={(date) => setCin(date)} />                                          
                                                <div class="form-group">
                                                    <label>Check-Out</label>
                                                    <DatePicker selected={cout} onChange={(date) => setCout(date)} />
                                                </div>
                                            </div>
                                            <h3 id='price'></h3>
                                            <div class="col-md-12 col-sm-12 alignment  ">

                                                <button className="btn btn-primary" onClick={reserve}>Submit</button>


                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className='instruction-container'>
                                <h4>                            <marquee className='txt-clr'
                                >Instructions!</marquee></h4>
                                <h4><span className='fnt-size'>1) Check-in :-</span></h4><span className='instruction'>Please present your ID card, Passport or Temporary Residence Card upon Check-in. By Law visitors must present personal documents for hotel records. These documents will be returned upon departure.</span><br /><br />
                                <h4><span className='fnt-size'>2) Hazardous Goods :-</span></h4><span className='instruction'>Gambling, contraband, prostitution, weapons, explosives, flammable objects, poisons, drugs, animals are strictly prohibited on hotel premises.</span><br /><br />
                                <h4><span className='fnt-size'>3) Damage to Property :-</span></h4><span className='instruction'>The guest will be held responsible for any loss or damage to the hotel property caused by themselves, their guests or any person for whom they are responsible.</span>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Reservation
