import React from 'react';
import "./LatestNews.css"
import imgl1 from "../../../img/l1.png"
import imgl2 from "../../../img/l2.png"
import imgl3 from "../../../img/l3.png"

const LatesNews = () => {
    return (
        <div>
            <section class="">
                <div class="service-section pt-4 mb-5"></div>
                <div class="container">
                    <div class="title mb-3  text-left">
                        <button class="btn btn-success bbb_viewed_nav bbb_viewed_prev next-btn btn-sm ml-3 mt-3"><i
                            style={{fontSize: "23px"}} class="fa fa-angle-right"></i></button>
                        <button class="btn btn-success bbb_viewed_nav bbb_viewed_next next-btn btn-sm mt-3"><i
                             style={{fontSize: "23px"}} class="fa fa-angle-left"></i></button>
                        <h3 class="text-uppercase custom-service pt-2">News & Article</h3>
                        <h2 class="font-weight-bold text-uppercase custom-service-2 mb-5">Latest News</h2>
                    </div>
                    <div class="row pb-5 text-left">
                        <div class="col-md-4">
                            <img src={imgl1} class="img-fluid" alt="" />
                                <p class="latest text-muted mt-3">Super User | April 30, 2022</p>
                                <h6 class="mb-2">Water Treatement Machineries</h6>
                                <p class="latest text-muted">Lorem ipsum dolor sit amet, consectetur nisl tincidunt ut elementum
                                    turpis.</p>
                                <a class="btn btn-success btn-card text-dark text-uppercase bg-none float-left p-0 mt-2"
                                    href="">Read More...<i style={{color: "#000"}} class="fa fa-angles-right"></i></a>
                        </div>
                        <div class="col-md-4">
                            <img src={imgl2} class="img-fluid" alt="" />
                                <p class="latest text-muted mt-3">Super User | April 30, 2022</p>
                                <h6 class="mb-2">Water Treatement Machineries</h6>
                                <p class="latest text-muted">Lorem ipsum dolor sit amet, consectetur nisl tincidunt ut elementum
                                    turpis.</p>
                                <a class="btn btn-success btn-card text-dark text-uppercase bg-none float-left p-0 mt-2"
                                    href="">Read More...<i style={{color: "#000"}} class="fa fa-angles-right"></i></a>
                        </div>
                        <div class="col-md-4">
                            <img src={imgl3} class="img-fluid" alt="" />
                                <p class="latest text-muted mt-3">Super User | April 30, 2022</p>
                                <h6 class="mb-2">Water Treatement Machineries</h6>
                                <p class="latest text-muted">Lorem ipsum dolor sit amet, consectetur nisl tincidunt ut elementum
                                    turpis.</p>
                                <a class="btn btn-success btn-card text-dark text-uppercase bg-none float-left p-0 mt-2"
                                    href="">Read More...<i style={{color: "#000"}} class="fa fa-angles-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LatesNews;