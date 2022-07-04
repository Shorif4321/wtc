import React, { useEffect, useState } from 'react';
import readmoreArray from "../../../img/leftarrayabout.png"


const AboutDetails = () => {

    const [about, setAbout] = useState([])
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-about')
            .then(res => res.json())
            .then(data => setAbout(data.data))
        console.log(about);

    }, [])






    return (
        <div>

            <section id='news-feed' className='newsFeed-banner'>
                <div className='col-md-7 mx-auto py-5'>
                    <div className='py-4'>
                        <h1 className='py-5'>About Details</h1>
                    </div>
                </div>
            </section>

            {/*             <section className='container py-5 my-3'>
                <div className='d-md-flex justify-content-between'>
                    <div className='col-12 col-md-8'>
                        <div className="text-left">
                          <div className='newsFeed'>
                                <img img className='img-fluid' src={`https://admin.waterchembd.com/storage/${aboufull.image}`} alt="" />
                                <h1
                                    dangerouslySetInnerHTML={{ __html: aboufull?.title }}>
                                </h1>
                                <p
                                    dangerouslySetInnerHTML={{ __html: aboufull?.description }}>
                                </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section> */}

            <div className='my-5 py-5'>

                {
                    about?.map(abou => <section className='container d-md-flex justify-content-between'>
                        <div className='wtc-left col-12 col-md-5 col-lg-5'>
                            <img className='about-imag1' src={`https://admin.waterchembd.com/storage/${abou.image}`} alt="" />
                            {/*  <img className='about-imag1' src={about} alt="" /> */}
                        </div>
                        <div className='wtc-right text-start col-12 col-md-7 col-lg-7'>
                            <h5 dangerouslySetInnerHTML={{ __html: abou.title }}></h5>
                            <h2 dangerouslySetInnerHTML={{ __html: abou.sub_title }}></h2>
                            <p dangerouslySetInnerHTML={{ __html: abou.description }}>
                            </p>
                        </div>

                    </section>)
                }
                {/* WTC PREMIUM WATER SOLUTIONS Company Overview section start */}
                {/* <section className='container d-md-flex justify-content-between'>
                    <div className='wtc-left col-12 col-md-5 col-lg-5'>
                       <img className='about-imag1' src={about} alt="" /> 
                    </div>
                    <div className='wtc-right text-left col-12 col-md-7 col-lg-7'>
                        <h5>ABOUT US</h5>
                        <h2></h2>
                        <p>
                            Water Technology BD Ltd (WTC) proudly conducted hundreds of Initial Environment Examination(IEE), Environmental Impact Assessment (EIA), Environmental Management Plan (EMP), Resettlement Plan, etc., & about forty Effluent Treatment Plant (ETP), Sewage Treatment Plant (STP) in various fields for the Textile (Dyeing, Printing and Weaving), Oil, Pulp & Paper, Gas & Energy, Tannery & Leather, Fertilizer, Pharmaceutical, Cement, Iron & Steel, Ceramic, Infrastructure, Food Industry, Chemical Industries, Power Sector etc. Water Technology BD Ltd (WTBL) specially working with Bangladeshi leading groups such as Meghna Group, City Group, Standard Group, TK Group etc. A group of capable Engineers & Technical Personal involved actively in this organization
                        </p>
                        <Link to="/" className='read-more'>Read More.. <img src={readmoreArray} alt="" /></Link>
                    </div>
                </section> */}
            </div>

        </div>
    );
};

export default AboutDetails;