import React from 'react';
import "./ProductItems.css"
import product7 from "../../../img/7.png"
import product8 from "../../../img/8.png"
import product9 from "../../../img/9.png"

const ProductItems = () => {
    return (
        <div>
            <section class="py-5">
                <div class="service-section pt-4"></div>
                <div class="container">
                    <div class="title mb-3">
                        <div class="owl-nav">
                            <button class="btn btn-success bbb_viewed_nav bbb_viewed_prev next-btn btn-sm ml-3 mt-3"><i
                                style={{fontSize: "23px"}} class="fa fa-angle-right"></i></button>
                            <button class="btn btn-success bbb_viewed_nav bbb_viewed_next next-btn btn-sm mt-3"><i
                                style={{fontSize: "23px"}} class="fa fa-angle-left"></i></button>

                        </div>
                        <h3 class="text-uppercase custom-service pt-2 text-left">FEATURED PROJECTS</h3>
                        <h2 class="font-weight-bold text-uppercase custom-service-2 mb-5  text-left">our products item</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-sm-12 mb-sm-5 margin-b">
                            <div class="card border-0">
                                <img src={product7} class="card-img-top img-fluid" alt="" />
                                <div class="img-box-2">
                                    <h5 class="text-white font-weight-bold text-center mt-3">BOILER WATER TREATMENT</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 mb-sm-5 margin-b">
                            <div class="card border-0">
                                <img src={product8} class="card-img-top img-fluid" alt="" />
                                <div class="img-box-2">
                                    <h5 class="text-white font-weight-bold text-center mt-3">BOILER WATER TREATMENT</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 mb-sm-5">
                            <div class="card border-0">
                                <img src={product9} class="card-img-top img-fluid" alt="" />
                                <div class="img-box-2">
                                    <h5 class="text-white font-weight-bold text-center mt-3">BOILER WATER TREATMENT</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </div >
    );
};

export default ProductItems;