import React from 'react';
import "./Gallery.css"
import rightArrow from "../../img/right.png"
import galleryImage from "../../img/galler1.png"
import repair from "../../img/repair.png"
import galleryLast from "../../img/galleryLast.png"

const Gallery = () => {
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
            <section className='container my-md-5 my-sm-4'>
                <div className="gallery-head">
                    <h1>
                        Design, Fabrication & <br /> Maintenance
                    </h1>
                    <button>
                        ALL GALLERY <img className='arrow-image' src={rightArrow} alt="" />
                    </button>
                </div>
            </section>
            {/* =========== service gallery 1 =========== */}
            <section>
                <div className='container'>
                    <div class="row text-md-center text-left">
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />

                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />

                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======= Gallery head 2 ======== */}
            <section className='container my-md-5 my-sm-2'>
                <div className="gallery-head ">
                    <h1>
                        Industrial water & waste water <br /> treatment Machineries
                    </h1>
                    <button>
                        ALL GALLERY <img className='arrow-image' src={rightArrow} alt="" />
                    </button>
                </div>
            </section>
            {/* =========== service gallery 2 =========== */}
            <section>
                <div className='container mb-4'>
                    <div class="row text-md-center text-left">
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid" alt="" />

                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid" alt="" />

                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* ======= Gallery head 3 ======== */}
             <section className='container my-md-5 my-sm-2'>
                <div className="gallery-head">
                    <h1>
                    Technologies
                    </h1>
                    <button className=''>
                        ALL GALLERY <img className='arrow-image' src={rightArrow} alt="" />
                    </button>
                </div>
            </section>
            <section>
                <div className='container mb-4'>
                    <div class="row text-md-center text-left">
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={galleryLast} class="card-img-top img-fluid" alt="" />

                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={repair} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 ">
                            <div class="card">
                                <img src={galleryLast} class="card-img-top img-fluid" alt="" />

                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="card">
                                <img src={galleryImage} class="card-img-top img-fluid" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;