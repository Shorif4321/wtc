 import React from 'react';
import "./HeadTop.css"
import Frame from "../../../img/Frame.png"
import img11 from "../../../img/11.png"
import call from "../../../img/call icons.svg"
import calendar from "../../../img/calendar icons.svg"
import location from "../../../img/location icons.svg"
import facebook from "../../../img/facebook.svg"
import linkdine from "../../../img/Linkedin.png"
import twitteer from "../../../img/Twitter.svg"

const HeadTop = () => {
    return (
        <div>
            <section className="header-section bg-white py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="border-br">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-8 text-left">
                                        <img src={Frame} alt="" />
                                        <div className="image-text">
                                            <p>Its Friday, 3:00pm & We are Open Till 6:00pm</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-sm-4 float-right">
                                        <div className=" float-right">

                                            <a href="#" target="_blank"><embed src={facebook} alt="" /></a>
                                            <a href="#" target="_blank"><embed className='mx-2' src={twitteer} alt="" /></a>
                                            <a href="#" target="_blank"><embed src={linkdine} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-4 header-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-sm-2 text-align-left">
                            {/* <!--            <div className="col-md-2 col-sm-6 d-sm-none">--> */}
                            <div className="img-fluid text-left">
                                <img src={img11} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-10 col-sm-10">
                            {/*  <!--            <div className="col-md-10 col-sm-6 d-sm-none">--> */}
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 ">
                                    <ul className="header-links float-left mt-3 p-0">
                                        <li><a href="#"><img src={call} className="img-fluid d-inline" alt="" />
                                            <p className="ml-4">Call Us Now <br /> <span className="i-color">(208)555-0112</span></p>
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-sm-4 ">
                                    <ul className="header-links float-left mt-3 p-0">
                                        <li><a href="#"><img src={location} className="img-fluid d-inline"
                                            style={{ marginRight: "20px" }} alt="" />
                                            <p className="ml-4">2416 Mapleview Drive<span className="i-color">Tampa, FL 33634</span>
                                            </p>
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-sm-4 text-right">
                                    <ul className="header-links float-left mt-3 p-0 ">
                                        <li><a href="#"><img src={calendar} className="img-fluid d-inline ms-5" alt="" />
                                            <p className="ml-4">Mon - Satday <span className="i-color">9.00am to 18.00pm</span></p>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeadTop;