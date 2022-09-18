import React from 'react';
import "./ServiceDetails.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()

    const [readDetails, SetReadDetails] = useState([]);
    useEffect(() => {
        fetch(`https://admin.waterchembd.com/api/get-service/${id}`)
            .then(res => res.json())
            .then(data => SetReadDetails(data.data))
    }, ([id]))



    return (
        <div>
            {/* ================ Effluent Treatment  section start =========*/}
            <section className='service-details-hero'>
                <div className='py-5'>
                    <h1 className='text-center py-5'>Effluent Treatment Plant (ETP)</h1>
                </div>
            </section>
            {/*========== service section 1 =========== */}
            <section className='service-detail-main container my-5'>
                <div className='text-start'>
                    <h2>{readDetails.title}</h2>
                    <img className='img-fluid rounded ' src={`https://admin.waterchembd.com/storage/${readDetails.image}`} alt="" />
                    <p className="" dangerouslySetInnerHTML={{ __html: readDetails?.description }} />
                </div>
            </section>


        </div>
    );
};

export default ServiceDetails;