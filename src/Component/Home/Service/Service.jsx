import React from 'react';
import "./Service.css"
import img2 from "../../../img/2.png"
import { Link } from 'react-router-dom';
const Service = () => {
    return (
        <div>

            <section>
                <div className='home-service container d-md-flex my-5'>
                    <div className='home-service1 col-12 col-md-6'>
                        <h6>SERVICES WE OFFER</h6>
                        <h2>What Service We Offer</h2>
                    </div>
                    <div className='col-12 col-md-6 home-service2'>
                        <Link to={'service'}> <button>ALL SERVICES</button></Link>
                    </div>

                </div>
            </section>

            <div className="container row text-md-center text-left mx-auto my-5">
                <div className="col-12 col-md-6 col-lg-4  pb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top img-fluid" alt="" />

                        <div className="card-body">
                            <h4 className="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p className="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div className="custom-btn">
                                <a href="" className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 pb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top img-fluid" alt="" />

                        <div className="card-body">
                            <h4 className="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p className="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div className="custom-btn">
                                <a href="" className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4  pb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top img-fluid" alt="" />

                        <div className="card-body">
                            <h4 className="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p className="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div className="custom-btn">
                                <a href="" className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 pb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top img-fluid" alt="" />

                        <div className="card-body">
                            <h4 className="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p className="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div className="custom-btn">
                                <a href="" className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-service-btn container w-75 mt-2'>
                    <button className='button-1'>SEE MORE</button>

                </div>

            </div>
        </div >
    );
};

export default Service;