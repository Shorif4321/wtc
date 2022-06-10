import React from 'react';
import "./AboutUs.css"
import about from "../../img/about.png"
import readmoreArray from "../../img/leftarrayabout.png"
import businessPolicy from "../../img/businessPolicy.png"
import okaySign from "../../img/okaySign.png"
import cost from "../../img/cost.svg"
import high from "../../img/higli.svg"
import ensure from "../../img/ensure.svg"
import ContactInfo from '../Shared/ContactInfo/ContactInfo';
const AboutUs = () => {
    return (
        <>
            {/* About banner section start */}
            <section className='about-banner'>
                <div className='col-md-7 mx-auto py-5'>
                    <div className='py-4'>
                        <h1>ABOUT US <br /> WTC PREMIUM WATER SOLUTIONS</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis id sit faucibus elementum faucibus condimentum mauris. Suscipit penatibus pretium, semper arcu in feugiat habitasse ridiculus.
                        </p>
                    </div>
                </div>

            </section>
            <div className='my-5 py-5'>
                {/* WTC PREMIUM WATER SOLUTIONS Company Overview section start */}
                <section className='container d-md-flex justify-content-between'>
                    <div className='wtc-left col-12 col-md-5 col-lg-5'>
                        <img className='about-imag1' src={about} alt="" />
                    </div>
                    <div className='wtc-right text-left col-12 col-md-7 col-lg-7'>
                        <h5>ABOUT US</h5>
                        <h2>WTC PREMIUM WATER SOLUTIONS Company Overview</h2>
                        <p>
                            Water Technology BD Ltd (WTC) proudly conducted hundreds of Initial Environment Examination(IEE), Environmental Impact Assessment (EIA), Environmental Management Plan (EMP), Resettlement Plan, etc., & about forty Effluent Treatment Plant (ETP), Sewage Treatment Plant (STP) in various fields for the Textile (Dyeing, Printing and Weaving), Oil, Pulp & Paper, Gas & Energy, Tannery & Leather, Fertilizer, Pharmaceutical, Cement, Iron & Steel, Ceramic, Infrastructure, Food Industry, Chemical Industries, Power Sector etc. Water Technology BD Ltd (WTBL) specially working with Bangladeshi leading groups such as Meghna Group, City Group, Standard Group, TK Group etc. A group of capable Engineers & Technical Personal involved actively in this organization
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pharetra gravida eu, nisi erat dignissim. Libero dictumst amet mi in placerat etiam tempor sit. Dictum aenean viverra proin sit vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pharetra gravida eu, nisi erat dignissim. Libero dictumst amet mi in placerat etiam tempor sit. Dictum aenean viverra proin sit vel pulvinar.
                        </p>
                        <p className='read-more'>Read More.. <img src={readmoreArray} alt="" /> <img src={readmoreArray} alt="" /></p>

                    </div>
                </section>
            </div>

            {/*  ===========Business Policy section start========= */}


            <div className='mb-5 pb-5'>
                {/* WTC PREMIUM WATER SOLUTIONS Company Overview section start */}
                <section className='container d-md-flex align-items-center justify-content-between'>
                    <div className='wtc-left col-12 col-md-5 col-lg-5'>
                        <img className='about-imag1' src={businessPolicy} alt="" />
                    </div>
                    <div className='policy-right text-left col-12 col-md-7 col-lg-7'>
                        <h5>Policy</h5>
                        <h2 className='mb-2'>Our Business Policy</h2>
                        <p>
                            <img src={okaySign} alt="" /> Managing waste to protect the environment.
                        </p>
                        <p>
                            <img src={okaySign} alt="" /> Assure quality services.
                        </p>
                        <p>
                            <img src={okaySign} alt="" /> Abide by laws and regulations applied for production.
                        </p>
                        <p>
                            <img src={okaySign} alt="" /> Improve the effectiveness of Quality Management & review the achievements.
                        </p>
                        <p>
                            <img src={okaySign} alt="" /> Improve the performance by making and achieving quality objects.
                        </p>
                    </div>
                </section>
            </div>

            {/*  ===========Our strength section start========= */}
            <section className='strength  py-5'>
                <div className='my-5'>
                    <h2>Our strength</h2>
                    <div className='strength-item container d-md-flex justify-content-between'>
                        <div className='strength-single-item'>
                            <img className='img-fluid' src={cost} alt="" />
                            <h4>Cost effective Project delivery.</h4>
                        </div>
                        <div className='strength-single-item'>
                            <img className='img-fluid' src={cost} alt="" />
                            <h4>Cost effective Project delivery.</h4>
                        </div>
                        <div className='strength-single-item'>
                            <img className='img-fluid' src={cost} alt="" />
                            <h4>Cost effective Project delivery.</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===========Our Ethics section start========= */}
            <section className='ethics my-5 pt-5'>
                <div className='container'>
                    <h2 className='text-center'>Our Ethics</h2>
                    <div className='ethics-all mt-5'>
                        <div className="ethics-items  text-left  m-3">
                            <h5><img className='mr-4' src={cost} alt="" />Management</h5>
                            <p>
                                We want to attend highest level of competence through continuous development of professional management system in all aspects.
                            </p>

                        </div>
                        <div className="ethics-items  text-left m-3">
                            <h5><img className='mr-4' src={cost} alt="" />	Goal</h5>
                            <p>
                                We want to attend highest level of competence through continuous development of professional management system in all aspects.
                            </p>

                        </div>
                        <div className="ethics-items text-left m-3">
                            <h5><img className='mr-4' src={cost} alt="" />	Goal</h5>
                            <p>
                                We want to attend highest level of competence through continuous development of professional management system in all aspects.
                            </p>

                        </div>
                        <div className="ethics-items  text-left m-3">
                            <h5><img className='mr-4' src={cost} alt="" />	Goal</h5>
                            <p>
                                We want to attend highest level of competence through continuous development of professional management system in all aspects.
                            </p>

                        </div>


                    </div>
                </div>
            </section>

            {/*  =========== Vision mission section start========= */}
            <section className='container d-md-flex mb-5'>
                <div className="vision-items  text-left m-3">
                    <img className='mb-3' src={cost} alt="" />
                    <h5>Mission</h5>
                    <p>
                        Mission: Water Technology BD Ltd & HKF‘s mission is to provide our customers with a competitive advantage. We are able to accomplish this by using proven technologies with internationally known components such as Siemens, Trundean, Johnson.
                    </p>
                    <p>
                        The end result is that wastewater facilities we operate run efficien-
                        tly and smoothly, as demonstrated by our 100% renewal rate at facilities past their first term.
                    </p>

                </div>
                <div className="vision-items  text-left m-3">
                    <img className='mb-3' src={cost} alt="" />
                    <h5>vison</h5>
                    <p>
                        Mission: Water Technology BD Ltd & HKF‘s mission is to provide our customers with a competitive advantage. We are able to accomplish this by using proven technologies with internationally known components such as Siemens, Trundean, Johnson.
                    </p>

                    <p>

                        The end result is that wastewater facilities we operate run efficien-
                        tly and smoothly, as demonstrated by our 100% renewal rate at facilities past their first term.
                    </p>


                </div>
            </section>
            <ContactInfo></ContactInfo>
        </>
    );
};

export default AboutUs;