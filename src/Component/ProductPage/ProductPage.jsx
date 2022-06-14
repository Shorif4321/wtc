import React from 'react';
import "./ProductPage.css"
import img2 from "../../img/2.png"
import leftarrow from "../../img/left.png"
import rightarrow from "../../img/right.png"
const ProductPage = () => {
    return (
        <div>
            <div className='product-hero p-5'>
                <div className='col-md-5 col-12  m-auto py-md-3'>
                    <h1>Our Machineries products</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor tempus mauris ligula eget. Vehicula lorem sit integer volutpat nunc eu, consequat nisi. Phasellus tincidunt fames auctor vestibulum.</p>
                </div>
            </div>
            {/* OUR MACHINERIES PRODUCTS start */}
            <section className="">
                <div className="service-section"></div>
                <div className="container">
                    {/* <div className="title mb-3 text-left">
                        <button className="btn btn-success service-btn float-right">All Services</button>
                        <h3 className="text-uppercase custom-service pt-2">Services We offer</h3>
                        <h2 className="font-weight-bold text-uppercase custom-service-2">What Service We Offer</h2>

                    </div> */}
                    <div className="row text-md-center text-left pt-3">
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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

                        <div className='arrowButton'>
                            <button className='rightButton'><img src={leftarrow} alt="" /></button>
                            <button className='rightButton'> <img src={rightarrow} alt="" /></button>

                        </div>
                    </div>
                </div>
            </section >
            {/* OUR MACHINERIES PRODUCTS end */}

            {/* our Chemicals products start */}
            <div className='product-hero p-md-5 p-sm-3'>
                <div className='col-md-5 col-12 m-auto py-3'>
                    <h1>our Chemicals products</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor tempus mauris ligula eget. Vehicula lorem sit integer volutpat nunc eu.</p>
                </div>
            </div>

            <section className="">
                <div className="service-section"></div>
                <div className="container">
                    {/* <div className="title mb-3 text-left">
                        <button className="btn btn-success service-btn float-right">All Services</button>
                        <h3 className="text-uppercase custom-service pt-2">Services We offer</h3>
                        <h2 className="font-weight-bold text-uppercase custom-service-2">What Service We Offer</h2>

                    </div> */}
                    <div className="row text-md-center text-left pt-3">

                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-4 col-sm-12 mb-3 py-2">
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
                        <div className='arrowButton'>
                            <button className='rightButton'><img src={leftarrow} alt="" /></button>
                            <button className='rightButton'> <img src={rightarrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </section >
            {/* our Chemicals products end */}

             {/* BioChip start */}
             <div className='product-hero p-md-5 p-sm-3'>
                <div className='col-md-6 col-lg-6 col-12 m-auto py-3'>
                    <h1>BioChip 30TM</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor tempus mauris ligula eget. Vehicula lorem sit integer volutpat nunc eu.</p>
                </div>
            </div>

            <section className="">
                <div className="service-section"></div>
                <div className="container">
                    {/* <div className="title mb-3 text-left">
                        <button className="btn btn-success service-btn float-right">All Services</button>
                        <h3 className="text-uppercase custom-service pt-2">Services We offer</h3>
                        <h2 className="font-weight-bold text-uppercase custom-service-2">What Service We Offer</h2>

                    </div> */}
                    <div className="row text-md-center text-left pt-3 pb-5">

                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3 py-2">
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
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3 py-2">
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
                        <div className='arrowButton'>
                            <button className='rightButton'><img src={leftarrow} alt="" /></button>
                            <button className='rightButton'> <img src={rightarrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
};

export default ProductPage;