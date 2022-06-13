import React from 'react';
import "./About.css"
import aboutImag from "../../../img/5.png"
import call from "../../../img/call icons.svg"
import location from "../../../img/location icons.svg"
const About = () => {
    return (
        <div>
            <section className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="about-section">
                                <img src={aboutImag} className="card-img-top img-fluid" alt="" />
                                <div className="img-box5">
                                    <h2 className="text-white font-weight-bold text-left mt-4 experience">10+ Years <br />Working
                                        Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="ml-3">
                                <h5 className="text-success about-text text-uppercase mt-4 text-left">About Us</h5>
                                <h2 className="text-uppercase mt-4 text-left ">Best Water Services With Affordable Prices</h2>
                                <p className="about-p text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis
                                    possimus quia repudiandae sit! Beatae deleniti enim amet neque.</p>
                                <div className="about-icons ml-0">
                                    <div className="row ">
                                        <div className="col-lg-5 col-12 ms-0 mr-0 about-position">
                                            <ul style={{ paddingLeft: "0px" }} className="header-links float-left mt-3">
                                                <li><a href="#"><img src={call} className="img-fluid" alt="" />
                                                    <p className="ml-3 about-icon-text text-left2 text-left">Call Us Now <br /><span
                                                        className="i-color font-weight-bold"> (208)555-0112</span></p>
                                                </a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-7 col-12 about-position">
                                            <ul style={{ paddingLeft: "0px" }} className="header-links float-left mt-3">
                                                <li><a href="#"><img src={location} className="img-fluid" alt="" />
                                                    <p className="ml-3 about-icon-text text-left2 text-left">2416 Mapleview Drive <span
                                                        className="i-color font-weight-bold">Tampa, FL 33634</span></p>
                                                </a></li>
                                            </ul>
                                        </div>
                                        <div className="custom-btn mt-2 w-sm-75">
                                            <a href="" className="btn btn-success custom-padding ml-md-4 mr-2 mt-5">Know Us More</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;