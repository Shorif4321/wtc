import React, { useEffect, useState } from 'react';
import "./About.css"
import aboutImag from "../../../img/5.png"
import call from "../../../img/call icons.svg"
import location from "../../../img/location icons.svg"
import { Link } from 'react-router-dom';
const About = () => {

    const [infos, setfos] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-info")
            .then(res => res.json())
            .then(data => setfos(data?.data))
        console.log(infos);
    }, {})


    const [homeAbouts, setHomeAbouts] = useState([])
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-home-about')
            .then(res => res.json())
            .then(data => setHomeAbouts(data.data))
    }, [])

    const [drovdawnServices, setDropdawnServices] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-service-menus")
            .then(res => res.json())
            .then(data => setDropdawnServices(data?.data))
    }, {})


    return (
        <div>
            <section className="py-3">
                <div className="container">
                    {
                        homeAbouts?.map(homeAbout => <div key={homeAbout.id}>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="about-section">
                                        <img className="card-img-top img-fluid" src={`https://admin.waterchembd.com/storage/${homeAbout.image}`} alt="" />
                                        <div className="img-box5">
                                            <h2 className="text-white font-weight-bold text-left mt-4 experience">10+ Years <br />Working
                                                Experience</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="ml-3">
                                        <h5 className="text-success about-text text-uppercase mt-4 text-start">About Us</h5>
                                        <h2 className="text-uppercase mt-4 text-start ">{homeAbout.title}</h2>
                                        <p className="about-p text-start">{homeAbout.sub_title}</p>
                                        <div className="about-icons ml-0">

                                            <div className="row ">
                                                <div className="col-lg-5 col-12 ms-0 mr-0 about-position">
                                                    <ul style={{ paddingLeft: "0px" }} className="header-links float-left mt-3">
                                                        <li><a href="#"><img src={call} className="img-fluid" alt="" />
                                                            <p className="ml-3 about-icon-text text-left2 text-left">Call Us Now <br /><span
                                                                className="i-color font-weight-bold">{infos.mobile}</span></p>
                                                        </a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-lg-7 col-12 about-position">
                                                    <ul style={{ paddingLeft: "0px" }} className="header-links float-left mt-3">
                                                        <li><a href="#"><img src={location} className="img-fluid" alt="" />
                                                            <p className="ml-3 about-icon-text text-left2 text-left">Loaction <span
                                                                className="i-color font-weight-bold">{infos.address}</span></p>
                                                        </a></li>
                                                    </ul>
                                                </div>
                                                <div className="custom-btn mt-2 w-sm-75">
                                                    <Link to="/about-us" className="btn btn-success custom-padding ml-md-4 mr-2 mt-5">Know Us More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)

                    }

                </div>
            </section>

        </div>
    );
};

export default About;