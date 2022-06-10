import React from 'react';
import "./Service.css"
import img2 from "../../../img/2.png"
const Service = () => {
    return (
        <div>
            <section class="py-5">
                <div class="service-section"></div>
                <div class="container">
                    <div class="title mb-3 text-left">
                        <button class="btn btn-success service-btn float-right">All Services</button>
                        <h3 class="text-uppercase custom-service pt-2">Services We offer</h3>
                        <h2 class="font-weight-bold text-uppercase custom-service-2">What Service We Offer</h2>

                    </div>
                    <div class="row text-md-center text-left pt-3">

                        <div class="col-md-4 col-sm-6 mb-3 pt-5">
                            <div class="card">
                                <img src={img2} class="card-img-top img-fluid" alt="" />

                                    <div class="card-body">
                                        <h4 class="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                                        <p class="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Architecto, ducimus non.</p>
                                        <div class="custom-btn">
                                            <a href="" class="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                                style={{color: "#00A652", marginLeft: "5px"}} class="fa fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-3 pt-5">
                            <div class="card">
                                <img src={img2} class="card-img-top img-fluid" alt="" />

                                    <div class="card-body">
                                        <h4 class="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                                        <p class="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Architecto, ducimus non.</p>
                                        <div class="custom-btn">
                                            <a href="" class="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                                style={{color: "#00A652", marginLeft: "5px"}} class="fa fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-3 pt-5">
                            <div class="card">
                                <img src={img2} class="card-img-top img-fluid" alt="" />

                                    <div class="card-body">
                                        <h4 class="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                                        <p class="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Architecto, ducimus non.</p>
                                        <div class="custom-btn">
                                            <a href="" class="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                                style={{color: "#00A652", marginLeft: "5px"}} class="fa fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-3 pt-5">
                            <div class="card">
                                <img src={img2} class="card-img-top img-fluid" alt="" />

                                    <div class="card-body">
                                        <h4 class="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                                        <p class="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Architecto, ducimus non.</p>
                                        <div class="custom-btn">
                                            <a href="" class="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                                style={{color: "#00A652", marginLeft: "5px"}} class="fa fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section >
        </div >
    );
};

export default Service;