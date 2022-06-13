import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientBrands.css"
import i1 from "../../../img/i1.svg"
import i2 from "../../../img/i2.svg"
import i3 from "../../../img/i3.svg"
import i4 from "../../../img/i4.svg"
import i5 from "../../../img/i5.svg"
import i6 from "../../../img/i6.svg"
import Slider from 'react-slick';

const ClientBrands = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className=' my-5 pt-5 px-5 container'>
            <div className="title mb-5">
                <h2 className="text-uppercase custom-service-2 mb-3 text-center">Trusted by over 10k clients & brands</h2>
                <h3 className="text-center custom-service text-muted ">Lorem ipsum dolor sit amet, solor ut adipiscing elit.
                </h3>
            </div>

            <Slider {...settings}>
                <div>
                    <img className='img-fluid' src={i1}  alt="" />
                </div>
                <div>
                    <img src={i2} className="img-fluid" alt="" />
                </div>
                <div>
                    <img src={i6} className="img-fluid" alt="" />
                </div>
                <div>
                    <img src={i3} className="img-fluid" alt="" />
                </div>
                <div>
                    <img src={i4} className="img-fluid" alt="" />
                </div>
                <div>
                    <img src={i5} className="img-fluid" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default ClientBrands;