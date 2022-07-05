import React, { useEffect, useState } from 'react';
import "./HeadTop.css"
import Frame from "../../../img/Frame.png"
import img11 from "../../../img/11.png"
import call from "../../../img/call icons.svg"
import calendar from "../../../img/calendar icons.svg"
import location from "../../../img/location icons.svg"
import facebook from "../../../img/facebook.svg"
import linkdine from "../../../img/Linkedin.png"
import twitteer from "../../../img/Twitter.svg"
import { Link } from 'react-router-dom';

const HeadTop = () => {
    const [infos, setfos] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-info")
            .then(res => res.json())
            .then(data => setfos(data?.data))
    }, {})


    var date = new Date();
    var disPlayDate = date.toLocaleDateString(date, { weekday: 'long' });
    var hour = date.getHours(); // => 9
    var minutes = date.getMinutes();
    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hour + ':' + minutes + ' ' + ampm;

    return (
        <div>
            <section className="header-section bg-white py-3 container">
                <div className="border-br">
                    <div className="d-flex">
                        <div className="col-6 text-start">
                            <img src={Frame} alt="" />
                            <div className="image-text">
                                <p>Its {disPlayDate}, {strTime} &  We are Open Till 6:00pm</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="text-end">
                                <a href={infos.facebook} target="_blank"><img src={facebook} alt="" /></a>
                                <a href={infos.twitter} target="_blank" className='mx-2'><img src={twitteer} alt="" /></a>
                                <a href={infos.linkdine} target="_blank"><img src={linkdine} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-4 header-section">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-3 text-start">
                            <div className="img-fluid text-left">
                                <Link to="/">  <img src={img11} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row justify-content-between">
                                <div className="col-lg-3 d-flex align-items-center ">
                                    <img className="img-fluid" src={call} alt="" />
                                    <p className="ms-4 text-start">Call Us Now <br /> <span className="i-color">{infos.mobile}</span></p>
                                </div>

                                <div className="col-lg-4  d-flex align-items-center ">
                                    <img src={location} className="img-fluid " alt="" />
                                    <p className="ms-4 text-start">  <span className="i-color"> {infos.address}</span></p>
                                </div>

                                <div className="col-lg-3  d-flex align-items-center ">
                                    <img src={calendar} className="img-fluid " alt="" />
                                    <p className="ms-4 text-start">Mon - Thursday <br /> <span className="i-color">9.00am to 18.00pm</span></p>
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