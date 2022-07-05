import React, { useEffect, useState } from 'react';
import "./ContactInfo.css"
import call from "../../../img/call icons.svg"
import location from "../../../img/location icons.svg"
import calendar from "../../../img/calendar icons.svg"

const ContactInfo = () => {

    // ======== location and  contact  data ========= //
    const [infos, setfos] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-info")
            .then(res => res.json())
            .then(data => setfos(data?.data))
    }, {})

    return (
        <div>
            <section className='mt-5 py-md-5'>
                <div className='mt-5 col-lg-7 col-md-12 mx-auto my-md-5 p-5 detail-contact'>
                    <h3>Contact with us</h3>

                    <div className='details-items'>
                        <div className='d-flex align-items-stretch justify-content-around col-lg-3'>
                            <div>
                                <img className='detail-contact mx-2 img-fluid ' src={call} alt="" />
                            </div>
                            <div className=''>
                                <p className='detail-fast'>Call Us Now</p>
                                <p className='details-last'>{infos.mobile}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-stretch justify-content-around   col-lg-4'>
                            <div className=''>
                                <img className='detail-contact mx-2 ' src={location} alt="" />
                            </div>
                            <div className=''>

                                <p className='details-last'>{infos.address}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-stretch justify-content-around   col-lg-3'>
                            <div>
                                <img className='detail-contact img-fluid' src={calendar} alt="" />
                            </div>
                            <div className=''>
                                <p className='detail-fast'>Call Us Now</p>
                                <p className='details-last'>{infos.telephone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactInfo;