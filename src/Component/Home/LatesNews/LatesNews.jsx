import React from 'react';
import "./LatestNews.css"
import imgl1 from "../../../img/l1.png"
import imgl2 from "../../../img/l2.png"
import imgl3 from "../../../img/l3.png"

const LatesNews = () => {
    return (
        <div>
            <section className="mb-0">
                <div className="service-section pt-4 mb-5"></div>
                <div className="container">
                    <div className="title  latest-head">
                        {/* <button className="btn btn-success bbb_viewed_nav bbb_viewed_prev next-btn btn-sm ml-3 mt-3"><i
                            style={{fontSize: "23px"}} className="fa fa-angle-right"></i></button>
                        <button className="btn btn-success bbb_viewed_nav bbb_viewed_next next-btn btn-sm mt-3"><i
                             style={{fontSize: "22px"}} className="fa fa-angle-left"></i></button> */}
                        <h3 className="text-uppercase custom-service pt-2">News & Article</h3>
                        <h2 className="font-weight-bold text-uppercase mb-5">Latest News</h2>
                    </div>
                    <div className="row pb-5 text-left">
                        <div className="col-12 col-md-6 col-lg-4 pb-5">
                            <img src={imgl1} className="img-fluid w-100 object-fit-cover" alt="" />
                                <p className="latest text-muted mt-3">Super User | April 30, 2022</p>
                                <h6 className="mb-2">Water Treatement Machineries</h6>
                                <p className="latest text-muted ">Lorem ipsum dolor sit amet, consectetur nisl tincidunt ut elementum
                                    turpis.</p>
                                <a className="btn btn-success btn-card text-dark text-uppercase bg-none float-left p-0 mt-2"
                                    href="">Read More...<i style={{color: "#000"}} className="fa fa-angles-right"></i></a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 pb-5">
                            <img src={imgl2} className="img-fluid  w-100 object-fit-cover" alt="" />
                                <p className="latest text-muted mt-3">Super User | April 30, 2022</p>
                                <h6 className="mb-2">Water Treatement Machineries</h6>
                                <p className="latest text-muted">Lorem ipsum dolor sit amet, consectetur nisl tincidunt ut elementum
                                    turpis.</p>
                                <a className="btn btn-success btn-card text-dark text-uppercase bg-none float-left p-0 mt-2"
                                    href="">Read More...<i style={{color: "#000"}} className="fa fa-angles-right"></i></a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={imgl3} className="img-fluid  w-100 object-fit-cover" alt="" />
                                <p className="latest text-muted mt-3">Super User | April 30, 2022</p>
                                <h6 className="mb-2">Water Treatement Machineries</h6>
                                <p className="latest text-muted">Lorem ipsum dolor sit amet, consectetur nisl tincidunt ut elementum
                                    turpis.</p>
                                <a className="btn btn-success btn-card text-dark text-uppercase bg-none float-left p-0 mt-2"
                                    href="">Read More...<i style={{color: "#000"}} className="fa fa-angles-right"></i></a>
                        </div>
                        
                    </div>
                    <div className='home-service-btn container w-75 my-4'>
                    <button className='button-1'>SEE MORE</button>

                </div>
                </div>
            </section>
        </div>
    );
};

export default LatesNews;