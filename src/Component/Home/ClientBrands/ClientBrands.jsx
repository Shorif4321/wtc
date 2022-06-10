import React from 'react';
import "./ClientBrands.css"
import i1 from "../../../img/i1.svg"
import i2 from "../../../img/i2.svg"
import i3 from "../../../img/i3.svg"
import i4 from "../../../img/i4.svg"
import i5 from "../../../img/i5.svg"
import i6 from "../../../img/i6.svg"

const ClientBrands = () => {
    return (
        <div>
            <section class="py-4">
                <div class="service-section pt-4"></div>
                <div class="container">
                    <div class="title mb-5">
                        <h2 class="text-uppercase custom-service-2 mb-3 text-center">Trusted by over 10k clients & brands</h2>
                        <h3 class="text-center custom-service text-muted">Lorem ipsum dolor sit amet, solor ut adipiscing elit.
                        </h3>
                    </div>

                    <div class="row">
                        <div class="owl-carousel owl-theme mt-2">
                            <div class="item mb-4">
                                <div class="card border-0 mr-5 mt-2">
                                    <img src={i1} class="img-fluid" alt="" />
                                </div>
                            </div>
                            <div class="item mb-4">
                                <div class="card border-0 mr-5 mt-2">
                                <img src={i2} class="img-fluid" alt="" />
                                </div>
                            </div>
                            <div class="item mb-4">
                                <div class="card border-0 mr-5 mt-2">
                                <img src={i3} class="img-fluid" alt="" />
                                </div>
                            </div>
                            <div class="item mb-4">
                                <div class="card border-0 mr-5 mt-2">
                                <img src={i4} class="img-fluid" alt="" />
                                </div>
                            </div>
                            <div class="item mb-4">
                                <div class="card border-0 mr-5 mt-2">
                                <img src={i5} class="img-fluid" alt="" />
                                </div>
                            </div>
                            <div class="item mb-4">
                                <div class="card border-0 mr-5 mt-2">
                                <img src={i6} class="img-fluid" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ClientBrands;