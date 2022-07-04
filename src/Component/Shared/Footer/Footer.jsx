import React, { useEffect, useState } from 'react';
import "./Footer.css"
import fl from "../../../img/f1.png"
import "./Footer.css"
import email from "../../../img/email icons.svg"
import fb from "../../../img/notebook.svg"
import location from "../../../img//Location-solid white-icons.svg"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {

    /*  const [footers, setfooters] = useState([]);
     useEffect(() => {
         fetch("https://admin.waterchembd.com/api/get-service-menus")
             .then(res => res.json())
             .then(data => setfooters(data))
         console.log(footers);
     }, {})

  */

    const [infos, setfos] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-info")
            .then(res => res.json())
            .then(data => setfos(data?.data))
        console.log(infos);
    }, {})

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
                                            <p className="footer-p mr-3 f-sm-12">Main Email : {infos.email} </p>
                                            <p className="footer-p f-sm-12">Inquiries : {infos.inquiries_email}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="footer-phone">
                                            <img src={fb} className="img-fluid float-left mr-4" alt="" />
                                            <p className="footer-p">Office Telephone : {infos.telephone} </p>
                                            <p className="footer-p"> Mobile :{infos.mobile}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content mt-5">
                        <div className="row justify-content-between">
                            <div className="col-lg-3 col-sm-12 text-start">
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
                                        <span className=''>{infos.address?.slice(0, 60)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 text-start">
                                <ul>
                                    <li>Useful Links</li>
                                    <li><Link className='footer-Nav' to="/about-us">About Us</Link></li>
                                    <li><Link className='footer-Nav' to="/product">Product</Link></li>
                                    <li><Link className='footer-Nav' to="/service">Services</Link></li>
                                    <li><Link className='footer-Nav' to="/contact-us">Contact Us</Link></li>
                                    <li><Link className='footer-Nav' to="/news-feed">News Feed</Link></li>
                                    <li><Link className='footer-Nav' to="/gallery">Gallery</Link></li>
                                    <li><Link className='footer-Nav' to="/event">Event</Link></li>
                                    <li><Link className='footer-Nav' to="/">Home</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-start">
                                <ul>
                                    <li>Services</li>
                                    <li><Link className='footer-Nav' to="/gallery">Environment Impact Assessment (EIA)</Link></li>
                                    <li><Link className='footer-Nav' to="/gallery">Effluent Treatment Plant (ETP)</Link></li>
                                    <li><Link className='footer-Nav' to="/gallery">Chemicals</Link></li>
                                    <li><Link className='footer-Nav' to="/gallery">Machineries</Link></li>
                                    <li><Link className='footer-Nav' to="/gallery">Machineries</Link></li>
                                    <li><Link className='footer-Nav' to="/gallery">3R Policy</Link></li>
                                </ul>

                            </div>
                            <div className="col-lg-3 col-sm-12 text-start">
                                <ul>
                                    <li>Contact Info</li>
                                    <li>Address:</li>
                                    <li>Head Office </li>
                                    <li>
                                        {infos.address}
                                    </li>

                                    <li className="mt-3">
                                        <div className="social-links-footer">
                                            <a href={infos.facebook} target="_blank"><i style={{ fontSize: "14px" }}
                                                className="fab fa-facebook-f"></i></a>
                                            <a href={infos.twitter} target="_blank"><i style={{ fontSize: "14px" }}
                                                className="fab fa-twitter"></i></a>
                                            <a href={infos.linkedin} target="_blank"><i style={{ fontSize: "14px" }}
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