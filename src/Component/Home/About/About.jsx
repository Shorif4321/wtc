import React from 'react';
import "./About.css"
import aboutImag from "../../../img/5.png"
import call from "../../../img/call icons.svg"
import location from "../../../img/location icons.svg"
const About = () => {
    return (
        <div>
            <section class="py-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="about-section">
                        <img src={aboutImag} class="card-img-top img-fluid" alt="" />
                        <div class="img-box">
                            <h2 class="text-white img-text font-weight-bold text-left mt-4 ml-5">10+ Years <br />Working
                                Experience</h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="ml-3">
                        <h5 class="text-success about-text text-uppercase mt-4">About Us</h5>
                        <h2 class="text-uppercase about-h mt-4">Best Water Services With Affordable Prices</h2>
                        <p class="about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis
                            possimus quia repudiandae sit! Beatae deleniti enim amet neque.</p>
                        <div class="about-icons ml-0">
                            <div class="row">
                                <div class="col-lg-5 col-sm-6 ms-0 mr-0 about-position">
                                    <ul style={{paddingLeft: "0px"}}  class="header-links float-left mt-3">
                                        <li><a href="#"><img src={call} class="img-fluid" alt="" />
                                                <p class="ml-3 about-icon-text">Call Us Now <span
                                                        class="i-color font-weight-bold">(208)555-0112</span></p>
                                            </a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-7 col-sm-6 about-position">
                                    <ul style={{paddingLeft: "0px"}} class="header-links float-left mt-3">
                                        <li><a href="#"><img src={location} class="img-fluid" alt="" />
                                                <p class="ml-3 about-icon-text">2416 Mapleview Drive <span
                                                        class="i-color font-weight-bold">Tampa, FL 33634</span></p>
                                            </a></li>
                                    </ul>
                                </div>
                                <div class="custom-btn mt-2">
                                    <a href="" class="btn btn-success custom-padding ml-4 mr-2 mt-5">Know Us More</a>
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