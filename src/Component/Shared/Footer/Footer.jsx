import React from 'react';
import "./Footer.css"
import fl from "../../../img/f1.png"
import "./Footer.css"
import email from "../../../img/email icons.svg"
import fb from "../../../img/notebook.svg"
import location from "../../../img//Location-solid white-icons.svg"
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div>
            <section className="pt-5 footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3  mt-4 col-sm-12 text-sm-left text-md-left mb-sm-3">
                            <HashLink to="/home/#home">
                                <img className='footerLogo' src={fl} style={{ width: "150px", height: "75px" }} alt="" />
                            </HashLink>
                        </div>

                        <div className="col-md-9 col-sm-12">
                            <div className="footer-part p-4 ml-12">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="br-right">
                                            <img src={email} className="img-fluid float-left mr-4" alt="" />
                                            <p className="footer-p mr-3 f-sm-12">Main Email : info@example.com </p>
                                            <p className="footer-p f-sm-12">Inquiries : Info@example2.com</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="footer-phone">
                                            <img src={fb} className="img-fluid float-left mr-4" alt="" />
                                            <p className="footer-p">Office Telephone : 0029129102320 </p>
                                            <p className="footer-p"> Mobile : 000 2324 39493</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content mt-5">
                        <div className="row justify-content-between">
                            <div className="col-lg-3 col-sm-12 text-left">
                                <h6>About Us</h6>
                                <p className='w-100 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at ac odio pellentesque nulla
                                    quis nunc consequat in.</p>
                                {/* <div className="col-lg-7 col-sm-12 about-position">
                                    <ul style={{paddingLeft: "0px"}} className="header-links float-left mt-3 m-sm-auto">
                                        <li><a href="#"><img src={location} className="img-fluid float-left mt-3" alt="" />
                                            <p className="ml-5 mb-4">2416 Mapleview Drive <span className="float-left">Tampa, FL
                                                33634</span></p>
                                        </a></li>
                                    </ul>
                                </div> */}
                                <div className='footer-location col-sm-12 d-flex d-flex justify-content-left align-items-center mb-sm-5 '>
                                    <div>
                                        <img src={location} alt="" />
                                    </div>
                                    <div className='address'>
                                        <span className=''>2416 Mapleview Drive</span> <br />
                                        <span className=''>Tampa, FL 33634</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 text-left">
                                <ul>
                                    <li>Useful Links</li>
                                    <li><HashLink className='footer-Nav' to="/about-us/#about">About Us</HashLink></li>
                                    <li><HashLink className='footer-Nav' to="/product/#product">Product</HashLink></li>
                                    <li><HashLink className='footer-Nav' to="/services/#service">Services</HashLink></li>
                                    <li><HashLink className='footer-Nav' to="/contact-us/#contact">Contact Us</HashLink></li>
                                    <li><HashLink className='footer-Nav' to="/news-feed/#news-feed">News Feed</HashLink></li>
                                    <li><HashLink className='footer-Nav' to="/gallery/#gallery">Gallery</HashLink></li>
                                    <li><HashLink className='footer-Nav' to="/event/#event">Event</HashLink></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-left">
                                <ul>
                                    <li>Services</li>
                                    <li> Environment Impact Assessment (EIA)</li>
                                    <li>Effluent Treatment Plant (ETP) </li>
                                    <li>Chemicals</li>
                                    <li>Machineries</li>
                                    <li>3R Policy</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-left">
                                <ul>
                                    <li>Contact Info</li>
                                    <li>Address:</li>
                                    <li>Head Office </li>
                                    <li>Plot No# 613(3rd Floor), Road No# 09,</li>
                                    <li>Mirpur DOHS, Dhaka, Bangladesh </li>
                                    <li>Factory:</li>
                                    <li>329/330, DIT Industrial Area, Tongi,</li>
                                    <li>Gazipur</li>
                                    <li className="mt-3">
                                        <div className="social-links-footer">
                                            <a href="#" target="_blank"><i style={{ fontSize: "14px" }}
                                                className="fab fa-facebook-f"></i></a>
                                            <a href="#" target="_blank"><i style={{ fontSize: "14px" }}
                                                className="fab fa-twitter"></i></a>
                                            <a href="#" target="_blank"><i style={{ fontSize: "14px" }}
                                                className="fab fa-instagram"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="footer-bg footer-border">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="footer-end d-md-flex justify-content-between">
                                <h6>@2022 Top It Ltd. All rights reserved.</h6>
                                <h6>Partner & Contribute</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Footer;