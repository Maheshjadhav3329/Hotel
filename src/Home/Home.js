
import React, { useState } from 'react'
import './../Home/Home.css'
import img1 from './../images/1.jpg'
import about from './../images/about.jpg'
import a1 from './../images/a1.jpg'
import g1 from './../images/g1.jpg'
import g2 from './../images/g2.jpg'
import g4 from './../images/g4.jpg'
import g5 from './../images/g5.jpg'
import g3 from './../images/g3.jpg'
import g6 from './../images/g6.jpg'
import g7 from './../images/g7.jpg'
import g8 from './../images/g8.jpg'
import g9 from './../images/g9.jpg'
import g10 from './../images/g10.jpg'
import r1 from './../images/r1.jpg'
import r2 from './../images/r2.jpg'
import r3 from './../images/r3.jpg'
import r4 from './../images/r4.jpg'
import teamb1 from './../images/teamb1.jpg'
import teamb2 from './../images/teamb2.jpg'
import teamb3 from './../images/teamb3.jpg'
import services from './../images/services.jpg'
import login from './../images/login.png'
import wifi from './../images/wifi.png'
import coffee from './../images/coffee.png'
import bed from './../images/bed.png'
import balcony from './../images/balcony.png'
import back from './../images/back.jpg'
import contact from './../images/contact.jpg'
import instagram from './../images/instagram.png'
import twitter from './../images/twitter.png'
import gmail from './../images/gmail.png'
import github from './../images/github.png'
import linkedin from './../images/linkedin.png'
import axios from 'axios'
import swal from 'sweetalert'
function Home() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()


    async function send() {
        const response = await axios.post('/contact', {
            fname: name,
            phone: phone,
            email: email
        })

        const status = response.data.success;
        if (response.data.success) {

            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "okk!",
            });

        }
        else{
            await swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
              });
        }
        setEmail('')
        setPhone('')
        setName(' ')
    }

    return (
        <div>
            <div class="banner-top">
                <div class="social-bnr-agileits">
                    <ul class="social-icons3">
                        <li><a href="https://www.instagram.com/"  ><img src={instagram} className='instaimg' /> </a></li>
                        <li><a href="https://twitter.com/" ><img src={twitter} className='instaimg' /> </a></li>
                        <li><a href="https://mail.google.com/" ><img src={gmail} className='instaimg' /></a></li>
                    </ul>
                </div>
                <div class="contact-bnr-w3-agile">
                    <ul>
                        <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">INFO@SUNSHINE.COM</a></li>
                        <li><i class="fa fa-phone" aria-hidden="true"></i>+91 8208847268</li>
                        <li class="s-bar">
                            <div class="search">
                                <input class="search_box" type="checkbox" id="search_box" />
                                <label class="icon-search" for="search_box"><span class="glyphicon glyphicon-search" aria-hidden="true"  ></span></label>
                                <div class="search_form">
                                    <form action="#" method="post">
                                        <input type="search" name="Search" placeholder=" " required=" " />
                                        <input type="submit" value="Search" />
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="w3_navigation">
                <div class="container">
                    <nav class="navbar navbar-default">
                        <div class="navbar-header navbar-left">
                            
                            <h2><a class="navbar-brand">SUN <span>SHINE</span></a></h2>
                        </div>
                        <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                            <nav class="menu menu--iris">
                                <ul class="nav navbar-nav menu__list">
                                    <li class="menu__item menu__item--current"><a href="" class="menu__link">Home</a></li>
                                    <li class="menu__item"><a href="#about" class="menu__link scroll">About</a></li>
                                    <li class="menu__item"><a href="#team" class="menu__link scroll">Team</a></li>
                                    <li class="menu__item"><a href="#gallery" class="menu__link scroll">Gallery</a></li>
                                    <li class="menu__item"><a href="#rooms" class="menu__link scroll">Rooms</a></li>
                                    <li class="menu__item"><a href="#contact" class="menu__link scroll">Contact Us</a></li>
                                    <li class="menu__item"><a href="/userSignup" class="menu__link scroll">Sign up  </a></li>
                                    <li class="menu__item"><a href="/profile" class="menu__link scroll"> Profile </a></li>
                                </ul>
                            </nav>
                        </div>
                    </nav>

                </div>
            </div>
            <div id="home" class="w3ls-banner">
                <div class="slider">
                    <div class="callbacks_container">
                        <ul class="rslides callbacks callbacks1" id="slider4">

                            <li>
                                <div class="w3layouts-banner-top w3layouts-banner-top2">
                                    <div class="container">
                                        <div class="agileits-banner-info">
                                            <h4>SUN SHINE</h4>
                                            <h3>Stay with friends & families</h3>
                                            <p>Come & enjoy precious moment with us</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="thim-click-to-bottom">
                    <a href="#about" class="scroll">
                        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4>SUN  <span>SHINE</span></h4>
                                <img src={img1} alt=" " class="img-responsive" />
                                <h5>We know what you love</h5>
                                <p>Providing guests unique and enchanting views from their rooms with its exceptional amenities, makes Star Hotel one of bests in its kind.Try our food menu, awesome services and friendly staff while you are here.</p>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div id="availability-agileits">
                    <div class="col-md-12 book-form-left-w3layouts">
                        <a href="/reservation"><h2>ROOM RESERVATION</h2></a>
                    </div>
                    <div class="banner-bottom">
                        <div class="container">
                            <br /><br /><br /><br />
                            <div class="agileits_banner_bottom">
                                <h3><span>Experience a good stay, enjoy fantastic offers</span> Find our friendly welcoming reception</h3>
                            </div>

                            <div class="w3ls_banner_bottom_grids">
                                <ul class="cbp-ig-grid">
                                    <li>
                                        <div class="w3_grid_effect">
                                            <img src={bed} class="cbp-ig-icon img-size" />
                                            <h4 class="cbp-ig-title">MASTER BEDROOMS</h4>
                                            <span class="cbp-ig-category">SUN SHINE</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="w3_grid_effect">
                                            <img src={balcony} class="cbp-ig-icon img-size" />
                                            <h4 class="cbp-ig-title">SEA VIEW BALCONY</h4>
                                            <span class="cbp-ig-category">SUN SHINE</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="w3_grid_effect">
                                            <img src={coffee} class="cbp-ig-icon img-size" />
                                            <h4 class="cbp-ig-title">LARGE CAFE</h4>
                                            <span class="cbp-ig-category">SUN SHINE</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w3_grid_effect">
                                            <img src={wifi} class="cbp-ig-icon img-size" />
                                            <h4 className="cbp-ig-title">WIFI COVERAGE</h4>
                                            <span className="cbp-ig-category">SUN SHINE</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="about-wthree" id="about">
                    <div class="container">
                        <div class="ab-w3l-spa">
                            <h3 class="title-w3-agileits title-black-wthree">About Our SUN SHINE</h3>
                            <p class="about-para-w3ls">Providing guests unique and enchanting views from their rooms with its exceptional amenities, makes Star Hotel one of bests in its kind.</p>
                            <img src={about} style={{ height: 450, width: 1200 }} class="img-responsive" alt="Hair Salon" />
                            <div class="w3l-slider-img">
                                <img src={a1} class="img-responsive" alt="Hair Salon" />
                            </div>
                            <div class="w3ls-info-about">
                                <h4>You'll love all the amenities we offer!</h4>
                                <p>We knows, What you want. </p>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                <div class="advantages">
                    <div class="container">
                        <div class="advantages-main">
                            <h3 class="title-w3-agileits">Our Services</h3>
                            <div class="advantage-bottom">
                                <div class="col-md-6 advantage-grid left-w3ls wow bounceInLeft" data-wow-delay="0.3s">
                                    <div class="advantage-block" >
                                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                                        <h4>Stay First, Pay After! </h4>
                                        <p>want luxurious vacation? Get accommodation today. Book your Romms now.</p>
                                        <p><i class="fa fa-check" aria-hidden="true"></i>Decorated room, proper air conditioned</p>
                                        <p><i class="fa fa-check" aria-hidden="true"></i>Private balcony</p>

                                    </div>
                                </div>
                                <div class="col-md-6 advantage-grid right-w3ls wow zoomIn" data-wow-delay="0.3s">
                                    <div class="advantage-block">
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <h4>24 Hour Restaurant</h4>
                                        <p>Try our food menu, awesome services and friendly staff while you are here.</p>
                                        <p><i class="fa fa-check" aria-hidden="true"></i>24 hours room service</p>
                                        <p><i class="fa fa-check" aria-hidden="true"></i>24-hour Concierge service</p>
                                    </div>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="plans-section" id="rooms">
                    <div class="container">
                        <h3 class="title-w3-agileits title-black-wthree">Rooms And Rates</h3>
                        <div class="priceing-table-main">
                            <div class="col-md-3 price-grid room-card">
                                <div class="price-block agile room-card border">
                                    <div class="price-gd-top">
                                        <img src={r1} alt=" " class="img-responsive room-card" />
                                        <h4>Deluxe Room</h4>
                                    </div>
                                    <div class="price-gd-bottom">
                                        <div class="price-list">
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>

                                            </ul>
                                        </div>
                                        <div class="price-selet">
                                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.7000/day</h3><br />
                                            <p><a href="/reservation" >Book Now</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 price-grid room-card">
                                <div class="price-block agile room-card border">
                                    <div class="price-gd-top">
                                        <img src={g2} alt=" " class="img-responsive r-img room-card" />
                                        <h4>Luxury Room</h4>
                                    </div>
                                    <div class="price-gd-bottom">
                                        <div class="price-list">
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <div class="price-selet">
                                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.5200/day</h3><br />
                                            <p><a href="/reservation" >Book Now</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 price-grid room-card">
                                <div class="price-block agile room-card border">
                                    <div class="price-gd-top">
                                        <img src={r3} alt=" " class="img-responsive room-card" />
                                        <h4>Guest House</h4>
                                    </div>
                                    <div class="price-gd-bottom">
                                        <div class="price-list">
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <div class="price-selet">
                                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.4800/day</h3><br />
                                            <p><a href="/reservation" >Book Now</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 price-grid room-card">
                                <div class="price-block agile room-card border">
                                    <div class="price-gd-top ">
                                        <img src={r4} alt=" " class="img-responsive room-card" />
                                        <h4>Single Room</h4>
                                    </div>
                                    <div class="price-gd-bottom">
                                        <div class="price-list">
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <div class="price-selet">
                                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.3000/day</h3><br />
                                            <p><a href="/reservation" >Book Now</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div>
                    <section class="portfolio-w3ls" id="gallery">
                        <h3 class="title-w3-agileits title-black-wthree">Our Gallery</h3>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g1.jpg" class="swipebox"><img src={g1} class="img-responsive" alt="/" />
                                <div class="textbox">
                                    <h4>SUN SHINE</h4>
                                    <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g2.jpg" class="swipebox"><img src={g2} class="img-responsive" alt="/" />
                                <div class="textbox">
                                    <h4>SUN SHINE</h4>
                                    <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g3.jpg" class="swipebox"><img src={g3} class="img-responsive" alt="/" /></a>
                            <div class="textbox">
                                <h4>SUN SHINE</h4>
                                <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                            </div>

                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g4.jpg" class="swipebox"><img src={g4} class="img-responsive" alt="/" />	</a>
                            <div class="textbox">
                                <h4>SUN SHINE</h4>
                                <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                            </div>

                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g5.jpg" class="swipebox"><img src={g5} class="img-responsive" alt="/" />
                                <div class="textbox">
                                    <h4>SUN SHINE</h4>
                                    <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g6.jpg" class="swipebox"><img src={g6} class="img-responsive" alt="/" />
                                <div class="textbox">
                                    <h4>SUN SHINE</h4>
                                    <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g6.jpg" class="swipebox"><img src={g7} class="img-responsive" alt="/" />
                                <div class="textbox">
                                    <h4>SUN SHINE</h4>
                                    <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g6.jpg" class="swipebox"><img src={g8} class="img-responsive" alt="/" />    </a>
                            <div class="textbox">
                                <h4>SUN SHINE</h4>
                                <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                            </div>

                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g9.jpg" class="swipebox"><img src={g9} class="img-responsive" alt="/" />
                                <div class="textbox">
                                    <h4>SUN SHINE</h4>
                                    <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g10.jpg" class="swipebox"><img src={g10} class="img-responsive" alt="/" /></a>
                            <div class="textbox">
                                <h4>SUN SHINE</h4>
                                <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                            </div>

                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g4.jpg" class="swipebox"><img src={g4} class="img-responsive" alt="/" /></a>
                            <div class="textbox">
                                <h4>SUN SHINE</h4>
                                <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                            </div>

                        </div>
                        <div class="col-md-3 gallery-grid gallery1">
                            <a href="images/g2.jpg" class="swipebox"><img src={g2} class="img-responsive" alt="/" /></a>
                            <div class="textbox">
                                <h4>SUN SHINE</h4>
                                <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                            </div>

                        </div>
                        <div class="clearfix"> </div>
                    </section>
                </div>
                <div class="team" id="team">
                    <div class="container">
                        <h3 class="title-w3-agileits title-black-wthree">Meet Our Team</h3>
                        <div id="horizontalTab">
                            <div class="card-container">
                                <div class="card1">
                                    <img src={teamb1} class="image" /><br /><br />
                                    <b class="name">Rutik Jadhav</b><br /><br />
                                    <p class="info">Hello👋 My name is Rutik Jadhav. I am currently Studying BSC computer science (final) in RSMDP,
                                        Deolali pravara</p>
                                    <div class="social-contact">
                                        <ul>
                                            <li><a href="https://github.com/RutikJadhav1252" target="blank"><img class="social-media-img "
                                                src={github} /></a></li>
                                            <li><a href="https://instagram.com/rutik_0951" target="blank"><img class="social-media-img "
                                                src={instagram} /></a></li>
                                            <li><a href="mailto:jadhavrutik1252@gmail.com" target="blank"><img class="social-media-img "
                                                src={gmail} /></a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="card1">
                                    <img src={teamb2} class="image" /><br /><br />
                                    <b class="name">Mahesh Jadhav</b><br /><br />
                                    <p class="info">Hello👋 My name is Mahesh Jadhav. I am currently Studying BSC computer science (final) in RSMDP,
                                        Deolali pravara</p>
                                    <div class="social-contact">
                                        <ul>
                                            <li><a href="https://github.com/Maheshjadhav3329" target="blank"><img class="social-media-img "
                                                src={github} /></a></li>
                                            <li><a href="https://instagram.com/mahesh_j_1230" target="blank"><img class="social-media-img "
                                                src={instagram} /></a></li>
                                            <li><a href="mailto:jadhavmahesh4898@gmail.com" target="blank"><img class="social-media-img "
                                                src={gmail} /></a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="card1">
                                    <img src={teamb3} class="image" /><br /><br />
                                    <b class="name">Rutik Bhalsingh</b><br /><br />
                                    <p class="info">Hello👋 My name is Rutik Bhalsingh. I am currently Studying BSC computer science (final) in RSMDP,
                                        Deolali pravara</p>
                                    <div class="social-contact">
                                        <ul>
                                            <li><a href="https://github.com/" target="blank"><img class="social-media-img "
                                                src={github} /></a></li>
                                            <li><a href="https://instagram.com/rutik_bhalsing_96k" target="blank"><img class="social-media-img "
                                                src={instagram} /></a></li>
                                            <li><a href="mailto:jadhavmahesh4898@gmail.com" target="blank"><img class="social-media-img "
                                                src={gmail} /></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <br /><br /><br /><br />

                            
                        </div>
                    </div>
                </div>





                <section class="contact-w3ls" id="contact">
                    <div class="container">
                        <div class="col-lg-6 col-md-6 col-sm-6 contact-w3-agile2" data-aos="flip-left">
                            <div class="contact-agileits">
                                <h4>Contact Us</h4>
                                <p class="contact-agile2"> </p>
                                <div class="control-group form-group">

                                    <label class="contact-p1">Full Name:</label>
                                    <input type="text" class="form-control" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    <p class="help-block"></p>

                                </div>
                                <div class="control-group form-group">

                                    <label class="contact-p1">Phone Number:</label>
                                    <input type="tel" class="form-control" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                    <p class="help-block"></p>

                                </div>
                                <div class="control-group form-group">

                                    <label class="contact-p1">Email Address:</label>
                                    <input type="email" class="form-control" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <p class="help-block"></p>

                                </div>


                                <input type="submit" name="sub" value="Send Now" class="btn btn-primary" onClick={send} />


                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 contact-w3-agile1" data-aos="flip-right">
                            <h4>Connect With Us</h4>
                            <p class="contact-agile1"><strong>Phone :</strong>+91 8208847268</p>
                            <p class="contact-agile1"><strong>Email :</strong> <a href="mailto:name@example.com">INFO@SUNSHINE.COM</a></p>
                            <p class="contact-agile1"><strong>Address :</strong> New Mumbai , India</p>

                            <div class="social-bnr-agileits footer-icons-agileinfo">
                                <ul class="social-icons3">
                                    <li><a href="#" class="fa fa-facebook icon-border facebook"> </a></li>
                                    <li><a href="#" class="fa fa-twitter icon-border twitter"> </a></li>
                                    <li><a href="#" class="fa fa-google-plus icon-border googleplus"> </a></li>

                                </ul>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292823276!2d72.71637303705167!3d19.082502004682137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683297436491!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>
                        <div class="clearfix"></div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Home
