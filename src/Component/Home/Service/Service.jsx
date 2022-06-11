import React from 'react';
import "./Service.css"
import img2 from "../../../img/2.png"
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
                        <button>
                        ALL SERVICES
                        </button>
                    </div>

                </div>
            </section>
            
            <div class="container row text-md-center text-left mx-auto my-5">
                <div class="col-md-4 col-sm-6 pb-4">
                    <div class="card">
                        <img src={img2} class="card-img-top img-fluid" alt="" />

                        <div class="card-body">
                            <h4 class="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p class="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div class="custom-btn">
                                <a href="" class="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 pb-4">
                    <div class="card">
                        <img src={img2} class="card-img-top img-fluid" alt="" />

                        <div class="card-body">
                            <h4 class="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p class="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div class="custom-btn">
                                <a href="" class="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6  pb-4">
                    <div class="card">
                        <img src={img2} class="card-img-top img-fluid" alt="" />

                        <div class="card-body">
                            <h4 class="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p class="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div class="custom-btn">
                                <a href="" class="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 pb-4">
                    <div class="card">
                        <img src={img2} class="card-img-top img-fluid" alt="" />

                        <div class="card-body">
                            <h4 class="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p class="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div class="custom-btn">
                                <a href="" class="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;