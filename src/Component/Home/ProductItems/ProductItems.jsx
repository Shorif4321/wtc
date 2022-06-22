import React from 'react';
import "./ProductItems.css"
import product7 from "../../../img/7.png"
import product8 from "../../../img/8.png"
import product9 from "../../../img/9.png"

const ProductItems = () => {
    return (
        <div>
            <section className="pt-5">
                <div className="service-section pt-4"></div>
                <div className="container">
                    <div className="title mb-3 featured-project">
                        <div className="owl-nav">
                        </div>
                        <h3 className="text-uppercase custom-service pt-2 ">FEATURED PROJECTS</h3>
                        <h2 className="font-weight-bold text-uppercase custom-service-2 mb-5  ">our products item</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-4">
                            <div className="card border-0">
                                <img src={product7} className="card-img-top img-fluid" alt="" />
                                <div className="img-box-2">
                                    <h5 className="text-white font-weight-bold text-center mt-3">BOILER WATER TREATMENT</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-4">
                            <div className="card border-0">
                                <img src={product8} className="card-img-top img-fluid" alt="" />
                                <div className="img-box-2">
                                    <h5 className="text-white font-weight-bold text-center mt-3">BOILER WATER TREATMENT</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-4">
                            <div className="card border-0">
                                <img src={product9} className="card-img-top img-fluid" alt="" />
                                <div className="img-box-2">
                                    <h5 className="text-white font-weight-bold text-center mt-3">BOILER WATER TREATMENT</h5>
                                </div>
                            </div>
                        </div>

                        <div className='home-service-btn container w-75 mt-2'>
                            <button className='button-1'>SEE MORE</button>

                        </div>

                    </div>
                </div>
            </section >
        </div >
    );
};

export default ProductItems;