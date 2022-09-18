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
    // ======== service data ========= //
    const [drovdawnServices, setDropdawnServices] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-service-menus")
            .then(res => res.json())
            .then(data => setDropdawnServices(data?.data))
    }, {})

    // ======== location and  contact  data ========= //
    const [infos, setfos] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-info")
            .then(res => res.json())
            .then(data => setfos(data?.data))
    }, {})

    // ======== About data ========= //
    const [homeAbouts, setHomeAbouts] = useState([])
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-home-about')
            .then(res => res.json())
            .then(data => setHomeAbouts(data.data))
    }, [])

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
                                            <p className="footer-p">Mobile : {infos.mobile}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content mt-5">
                        <div className="row justify-content-between">
                            <div className="col-lg-3 col-sm-12 text-start footer-custom">
                                <h6>About Us</h6>
                                {
                                    homeAbouts?.map(homeAbout => <div key={homeAbout.id}>
                                        <p className="w-100 text-left footer-custom">{homeAbout.sub_title}</p>
                                    </div>)

                                }
                                <div className='footer-location col-sm-12 d-flex d-flex justify-content-left align-items-center mb-sm-5 '>
                                    <div>
                                        <img src={location} alt="" />
                                    </div>
                                    <div className='address'>
                                        <span className=''></span>
                                        <span className=''>{infos.address}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 text-start footer-custom">
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
                            <div className="col-lg-3 col-sm-12 text-start footer-custom">
                                <ul>
                                    <li>Services</li>

                                    {
                                        drovdawnServices?.map(dropdawn => <ul key={dropdawn.id}>
                                            <li ><Link className='d-none' to="/service">{dropdawn.menu_name} &#x203A;</Link>
                                                {
                                                    dropdawn.services.map(services =>
                                                        <li key={services.id} className='footer-Nav'  ><Link className='footer-Nav' to={`/serviceDetails/${services.id}`}>{services.title}</Link>
                                                        </li>
                                                    )
                                                }
                                            </li>
                                        </ul>
                                        )}
                                </ul>

                            </div>
                            <div className="col-lg-3 col-sm-12 text-start footer-custom">
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
                                <h6> <a className='text-white text-decoration-none' target="_blank" href="https://topitltd.com/">@2022 Top It Ltd. All rights reserved.</a> </h6>
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