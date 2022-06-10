import React from 'react';
import "./Contact.css"
import map from "../../img/map.png"

const Contact = () => {
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
                <div className="d-md-flex align-items-center my-5 container">
                    <div className="col-12 col-md-7">
                        <img className='img-fluid' src={map} alt="" />

                    </div>
                    <div className="col-12  col-md-5 text-left ml-md-3">
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
            <section className='my-5 py-5 from-main'>
                <div className='container px-sm-5'>
                    <h1 className=''>Send Message</h1>
                    <div className='d-md-flex px-md-5 contact-from mt-4 my-1'>
                        <input className=' mx-md-2 col-12 col-md-6' type="text" placeholder='Name' />
                        <input className='mx-md-2 col-12 col-md-6' type="email" placeholder='Email' />
                    </div>
                    <div className='textarea-box'>
                        <textarea className='w-100 ' name="Message" id="" cols="" rows="7" placeholder='Messages'></textarea>
                    </div>
                    <div class="form-group row">
                        <div class="col-12 text-center">
                            <div class="form-check d-flex justify-content-center">
                                <div>
                                    <input class=" form-check-input" type="checkbox" id="gridCheck1" />
                                </div>
                                <div>
                                    <label class="form-check-label" for="gridCheck1">
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