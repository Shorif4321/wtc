import React from 'react';
import "./ContactInfo.css"
import call from "../../../img/call icons.svg"
import location from "../../../img/location icons.svg"
import calendar from "../../../img/calendar icons.svg"

const ContactInfo = () => {
    return (
        <div>
            <section className='mt-5 py-md-5'>
                <div className='mt-5 col-md-7 mx-auto my-md-5 p-5 detail-contact'>
                    <h3>Contact with us</h3>

                    <div className='details-items'>
                        <div className='d-flex align-items-stretch'>
                            <div>
                                <img className='detail-contact mx-2  img-fluid' src={call} alt="" />
                            </div>
                            <div className=''>
                                <p className='detail-fast'>Call Us Now</p>
                                <p className='details-last'>(208) 555-0112</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-stretch '>
                            <div>
                                <img className='detail-contact mx-2  img-fluid' src={location} alt="" />
                            </div>
                            <div className=''>
                                <p className='detail-fast'>2416 Mapleview Drive</p>
                                <p className='details-last'>Tampa, FL 33634</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-stretch'>
                            <div>
                                <img className='detail-contact mx-2 img-fluid' src={calendar} alt="" />
                            </div>
                            <div className=''>
                                <p className='detail-fast'>Call Us Now</p>
                                <p className='details-last'>(208) 555-0112</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactInfo;