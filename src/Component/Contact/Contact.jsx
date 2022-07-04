import React, { useEffect } from 'react';
import "./Contact.css"
import map from "../../img/map.png"

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            {/* ======= Gallery Banner ======== */}
            <section className='contact-banner'>
                <div className='col-md-7 mx-auto py-md-5'>
                    <div className='py-4'>
                        <h1 className='py-5'>Contacts</h1>
                    </div>
                </div>
            </section>
            {/* ======= contact map ======== */}
            <section>
                <div>

                </div>
                <div className="d-md-flex align-items-center my-5 container">
                    <div className="col-12 col-md-7">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703802988!2d90.27923923029098!3d23.780573257422205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1656134714332!5m2!1sen!2sbd" style={{ width: "100%", height: '400px' }}></iframe>

                        {/*    <img className='img-fluid' src={map} alt="" /> */}
                    </div>
                    <div className="map-left col-12  col-md-5  ml-md-3">
                        <h2>Find Us</h2>
                        <h4>Location:</h4>
                        <p>123, New Lenox Chicago, IL 60606</p>
                        <h4>Phone:</h4>
                        <p>1(800)-456-789</p>
                        <h4>Email:</h4>
                        <p>info@yoursite.com</p>
                    </div>

                </div>
            </section>
            {/* ======= contact from start ======== */}
            <section id='contact' className='my-5 py-5 from-main'>
                <div className='container px-sm-5'>
                    <h1 className=''>Send Message</h1>
                    <div className='d-md-flex px-md-5 contact-from mt-4 my-1'>
                        <input className=' mx-md-2 col-12 col-md-6' type="text" placeholder='Name' />
                        <input className='mx-md-2 col-12 col-md-6' type="email" placeholder='Email' />
                    </div>
                    <div className='textarea-box'>
                        <textarea className='w-100 p-3' name="Message" id="" cols="" rows="7" placeholder='Messages'></textarea>
                    </div>
                    <div className="form-group row">
                        <div className="col-12 text-center">
                            <div className="form-check d-flex justify-content-center">
                                <div>
                                    <input className=" form-check-input" type="checkbox" id="gridCheck1" />
                                </div>
                                <div>
                                    <label className="form-check-label" for="gridCheck1">
                                        I agree that my submitted data is being collected and stored.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='form-button'>Send message</button>
                </div>
            </section>


        </div>
    );
};

export default Contact;