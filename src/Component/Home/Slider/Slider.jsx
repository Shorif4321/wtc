import React from 'react';
import "./Slider.css"
import { Carousel } from 'react-bootstrap';
import slider1 from "../../../img/slider.png"
import slider2 from "../../../img/00.jpg"

const Slider = () => {
    return (
        <div className=''>
            <Carousel fade>
                <Carousel.Item className=''>
                    <img
                        className="d-block w-100 slider-image"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='slider-text col-12 col-md-12 col-lg-6'>
                            <h3 className=''>Sustainable Saving </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa maecenas non in cursus amet fusce feugiat ut. Eu dignissim tellus fermentum eget dolor.</p>
                            <div className='button-cus'>
                                <button className='button-1'>MORE ABOUT US</button>
                                <button className='button-2'>OUR SERVICES</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='slider-text col-12 col-md-12 col-lg-6'>
                            <h3 className=''>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa maecenas non in cursus amet fusce feugiat ut. Eu dignissim tellus fermentum eget dolor.</p>
                            <div className='button-cus'>
                                <button className='button-1'>MORE ABOUT US</button>
                                <button className='button-2'>OUR SERVICES</button>
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='slider-text col-12 col-md-12 col-lg-6'>
                            <h3 className=''>Some Text will be  add here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa maecenas non in cursus amet fusce feugiat ut. Eu dignissim tellus fermentum eget dolor.</p>
                            <div className='button-cus'>
                                <button className='button-1'>MORE ABOUT US</button>
                                <button className='button-2'>OUR SERVICES</button>
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;