import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsFeedDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()
    const url = `https://admin.waterchembd.com/api/get-blog/${id}`

    const [productDetails, setProductsDetails] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProductsDetails(data?.data))
    }, [id])


    return (
        <div>
            {/* Product details hero */}
            <div className='product-hero p-5'>
                <div className='col-md-5 col-12  m-auto py-md-3'>
                    <h1>Our Machineries products</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor tempus mauris ligula eget. Vehicula lorem sit integer volutpat nunc eu, consequat nisi. Phasellus tincidunt fames auctor vestibulum.</p>
                </div>
            </div>

            {/* Details section start */}

            <section className='container mb-5'>
                <div className='product-details'>
                    <h1 className='text-start py-5 details-head' dangerouslySetInnerHTML={{ __html: productDetails.title }}></h1>
                    <img className="rounded " src={`https://admin.waterchembd.com/storage/${productDetails.image}`} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: productDetails.description }}>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default NewsFeedDetails;