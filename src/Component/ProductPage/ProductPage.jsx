import React, { useEffect, useState } from 'react';
import "./ProductPage.css"
import { Link } from 'react-router-dom';

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-products')
            .then(res => res.json())
            .then(data => setProducts(data.data))
    }, [])

    return (
        <div>
            <div id='product' className='product-hero p-5'>
                <div className='col-md-5 col-12  m-auto py-md-3'>
                    <h1>Our Machineries products</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor tempus mauris ligula eget. Vehicula lorem sit integer volutpat nunc eu, consequat nisi. Phasellus tincidunt fames auctor vestibulum.</p>
                </div>
            </div>
            {/* OUR MACHINERIES PRODUCTS start */}
            <section className="">
                <div className="service-section"></div>
                <div className="container">
                    <div className="row text-md-center text-start pt-3">

                        {
                            products?.map(product => <div key={product.id} className="col-md-4 col-sm-12 mb-3 py-2" >
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={`https://admin.waterchembd.com/storage/${product.image}`} alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title text-start service-h4" dangerouslySetInnerHTML={{ __html: product.title }}></h4>
                                        <p className="card-text text-start service-p" dangerouslySetInnerHTML={{ __html: product.description.slice(0, 100) }}>

                                        </p>
                                        <div className="custom-btn">
                                            <Link to={`/productDetails/${product.id}`} className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                                style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ProductPage;