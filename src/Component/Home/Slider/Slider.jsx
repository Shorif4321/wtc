import React, { useEffect, useState } from 'react';
import "./Slider.css"
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [sliders, setSliders] = useState([])
    useEffect(() => {
        fetch(' https://admin.waterchembd.com/api/get-slider')
            .then(res => res.json())
            .then(data => setSliders(data.data))
    }, [])


    return (
        <div id='home' className=''>
            <Carousel fade className=''>
                {
                    sliders.map(slider =>
                        <Carousel.Item key={slider.id}>
                            <img
                                className="d-block w-100 img-fluid slider-image"
                                src={`https://admin.waterchembd.com/storage/${slider.image}`}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className='slider-text col-12 col-md-12 col-lg-6 '>
                                    <h3 className='' dangerouslySetInnerHTML={{ __html: slider.title }}></h3>
                                    <p dangerouslySetInnerHTML={{ __html: slider.sub_title }}></p>
                                    <div className='button-cus'>
                                        <Link to="/about-us"> <button className='button-1'>MORE ABOUT</button></Link>
                                        <Link className='text-decoration-none' to="/allServices"> <button className='button-2'>OUR SERVICES</button></Link>
                                    </div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default Slider;