import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientBrands.css"
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


    const [homeSiders, sethomeSiders] = useState([])
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-home-client')
            .then(res => res.json())
            .then(data => sethomeSiders(data.data))
    }, [])

    return (
        <div className=' my-5 pt-5 px-5 container'>
            <div className="title mb-5">
                <h2 className="text-uppercase custom-service-2 mb-3 text-center">Trusted by over 10k clients & brands</h2>
                <h3 className="text-center custom-service text-muted ">Lorem ipsum dolor sit amet, solor ut adipiscing elit.
                </h3>
            </div>
            <Slider {...settings}>
                {
                    homeSiders?.map(homeSlide => <div key={homeSlide.id}>
                        <img className='' src={`https://admin.waterchembd.com/storage/${homeSlide.image}`} alt="" />
                    </div>)
                }
            </Slider>


            {/*  <Slider {...settings}>

                <div>
                    <img className='img-fluid' src={i1} alt="" />
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
            </Slider> */}
        </div>
    );
};

export default ClientBrands;