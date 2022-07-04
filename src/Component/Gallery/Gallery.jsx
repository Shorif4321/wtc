import React, { useEffect, useState } from 'react';
import "./Gallery.css"
import rightArrow from "../../img/right.png"
import galleryImage from "../../img/galler1.png"
import repair from "../../img/repair.png"
import galleryLast from "../../img/galleryLast.png"
import { Link } from 'react-router-dom';

const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [gallerys, setGellarys] = useState([]);
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-gallery')
            .then(res => res.json())
            .then(data => setGellarys(data.data.slice(0, 6)))

    }, []);


    const [servicesn, setServicesn] = useState([])
    useEffect(() => {
        fetch('./Product.JSON')
            .then(res => res.json())
            .then(data => setServicesn(data.slice(0, 6)))
    }, [])

    const [techImages, setTechImages] = useState([])
    useEffect(() => {
        fetch('./Product.JSON')
            .then(res => res.json())
            .then(data => setTechImages(data.slice(0, 3)))
    }, [])



    return (
        <div>
            {/* ======= Gallery Banner ======== */}
            <section className='gallery-banner'>
                <div className='col-md-7 mx-auto py-md-5'>
                    <div className='py-4'>
                        <h1 className='py-5'>Gallery</h1>
                    </div>
                </div>
            </section>
            {/* ======= Gallery head ======== */}
            <section id='gallery' className='container my-md-5 my-sm-4'>
                <div className="gallery-head">
                    <h1>
                        Design, Fabrication & <br /> Maintenance
                    </h1>
                    <Link to="/gallery"> <button>
                        ALL GALLERY <img className='arrow-image' src={rightArrow} alt="" />
                    </button></Link>
                </div>
            </section>
            {/* =========== service gallery 1 =========== */}
            <section>
                <div className='container'>
                    <div className="row text-md-center text-left">
                        {
                            gallerys.map(gallery => <div key={gallery.id} className="col-md-6 col-lg-3 col-sm-6 mb-4 ">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={`https://admin.waterchembd.com/storage/${gallery.image}`} alt="" />
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;