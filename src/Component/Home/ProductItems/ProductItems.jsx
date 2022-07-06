import React, { useEffect, useState } from 'react';
import "./ProductItems.css"
import { Link } from 'react-router-dom';

const ProductItems = () => {

    const [feturedProducts, setFeturedProducts] = useState([]);
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-products')
            .then(res => res.json())
            .then(data => setFeturedProducts(data?.data.slice(0, 3)))
    }, [])

    return (
        <div>

            <section className="pt-5">
                <div className="service-section pt-4"></div>
                <div className="container">
                    <section>
                        <div className='home-service container d-md-flex my-5'>
                            <div className='home-service1 col-12 col-md-6'>
                                <h6>FEATURED PROJECTS</h6>
                                <h2>our products item</h2>
                            </div>
                            <div className='col-12 col-md-6 home-service2'>
                                <Link to="/product"> <button>ALL PRODUCT</button></Link>
                            </div>
                        </div>
                    </section>


                    <div className="row">
                        {
                            feturedProducts?.map(feturedProduct => <div key={feturedProduct.id} className="col-md-6 col-lg-4 col-sm-12 mb-4">
                                <div className="card border-0">
                                    <img className="card-img-top img-fluid" src={`https://admin.waterchembd.com/storage/${feturedProduct.image}`} alt="" />
                                    <div className="img-box-2">
                                        <h5 className="text-white font-weight-bold text-center mt-3" dangerouslySetInnerHTML={{ __html: feturedProduct.sub_title.slice(0, 33) }}></h5>
                                    </div>
                                </div>
                            </div>)
                        }

                        <div className='home-service-btn container w-75 mt-2'>
                            <Link to="/product"> <button className='button-1'>SEE MORE</button></Link>
                        </div>

                    </div>
                </div>
            </section >
        </div >
    );
};

export default ProductItems;