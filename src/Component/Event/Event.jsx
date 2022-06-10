import React from 'react';
import "./Event.css"
import eventImage from "../../img/event.png"
import frame from "../../img/Frame.png"
import frame1 from "../../img/Frame1.png"

const Event = () => {
    return (
        <div>
            {/*=========== event head =========== */}
            <section className='newsFeed-banner'>
                <div className='col-md-7 mx-auto py-5'>
                    <div className='py-4'>
                        <h1 className='py-5'>Event</h1>
                    </div>
                </div>
            </section>
            {/*=============== event cart start ===============*/}
            <section className='container d-md-flex flex-wrap my-5'>
                <div className='event text-left col-12 col-md-6 mb-4'>
                    <img className='img-fluid' src={eventImage} alt="" />
                    <h3>Business Seminar in Eygpt</h3>
                    <div className='d-flex'>
                        <h5 className=' mr-5'><img src={frame} alt="" /> March 12, 2021</h5>
                        <h5 className=' '><img src={frame1} alt="" /> London</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                </div>
                <div className='event text-left col-12 col-md-6 mb-4'>
                    <img className='img-fluid' src={eventImage} alt="" />
                    <h3>Business Seminar in Eygpt</h3>
                    <div className='d-flex'>
                        <h5 className=' mr-5'><img src={frame} alt="" /> March 12, 2021</h5>
                        <h5 className=' '><img src={frame1} alt="" /> London</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                </div>
                <div className='event text-left col-12 col-md-6 mb-4'>
                    <img className='img-fluid' src={eventImage} alt="" />
                    <h3>Business Seminar in Eygpt</h3>
                    <div className='d-flex'>
                        <h5 className=' mr-5'><img src={frame} alt="" /> March 12, 2021</h5>
                        <h5 className=' '><img src={frame1} alt="" /> London</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                </div>
                <div className='event text-left col-12 col-md-6 mb-4'>
                    <img className='img-fluid' src={eventImage} alt="" />
                    <h3>Business Seminar in Eygpt</h3>
                    <div className='d-flex'>
                        <h5 className='mr-5'><img src={frame} alt="" /> March 12, 2021</h5>
                        <h5><img src={frame1} alt="" /> London</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                </div>
                <div className='event text-left col-12 col-md-6 mb-4'>
                    <img className='img-fluid' src={eventImage} alt="" />
                    <h3>Business Seminar in Eygpt</h3>
                    <div className='d-flex'>
                        <h5 className=' mr-5'><img src={frame} alt="" /> March 12, 2021</h5>
                        <h5 ><img src={frame1} alt="" /> London</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                </div>
                <div className='event text-left col-12 col-md-6 mb-4'>
                    <img className='img-fluid' src={eventImage} alt="" />
                    <h3>Business Seminar in Eygpt</h3>
                    <div className='d-flex'>
                        <h5 className='mr-5'><img src={frame} alt="" /> March 12, 2021</h5>
                        <h5 ><img src={frame1} alt="" /> London</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                </div>

            </section>

        </div>
    );
};

export default Event;