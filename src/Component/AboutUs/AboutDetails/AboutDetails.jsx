import React, { useEffect, useState } from 'react';


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
            </div>

        </div>
    );
};

export default AboutDetails;