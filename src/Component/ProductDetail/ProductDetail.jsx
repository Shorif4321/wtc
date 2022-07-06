import React, { useEffect, useState } from 'react';
import "./ProductDetail.css"
import ContactInfo from '../Shared/ContactInfo/ContactInfo';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const { id } = useParams()
    const [productDetails, setproductDetails] = useState([]);
    useEffect(() => {
        fetch(`https://admin.waterchembd.com/api/get-product/${id}`)
            .then(res => res.json())
            .then(data => setproductDetails(data?.data))
    }, [id])


    return (
        <div>
            {/* Product details hero */}
            <div className='product-hero p-5'>
                <div className='col-md-5 col-12  m-auto py-md-3'>
                    <h1>Our Machineries products</h1>

                </div>
            </div>

            {/* Details section start */}
            <section className='container'>
                <div className='product-details'>
                    <h1 className='text-start py-5 details-head' dangerouslySetInnerHTML={{ __html: productDetails?.title }}></h1>
                    <img className='img-fluid rounded w-100' src={`https://admin.waterchembd.com/storage/${productDetails?.image}`} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: productDetails?.description }}>
                    </p>
                </div>
            </section>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default ProductDetail;