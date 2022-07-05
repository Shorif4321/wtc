import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import circle from "../../../img/cercle.png"
import "./NewsFeedDetails.css"

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


    const [newsfeeds, setNewsfeeds] = useState([]);
    useEffect(() => {
        fetch(' https://admin.waterchembd.com/api/get-news')
            .then(res => res.json())
            .then(data => setNewsfeeds(data?.data))
        console.log(newsfeeds);
    }, [])


    return (
        <div>
            {/* Product details hero */}
            <div className='product-hero p-5'>
                <div className='col-md-5 col-12  m-auto py-md-3'>
                    <h1>News Feed Details</h1>
                    <p className=''></p>
                </div>
            </div>

            {/* Details section start */}

            <section className='container mb-5 d-md-flex'>
                <div className='product-details  col-md-8'>
                    <h1 className='text-start py-5 details-head' dangerouslySetInnerHTML={{ __html: productDetails.title }}></h1>
                    <img className="rounded " src={`https://admin.waterchembd.com/storage/${productDetails.image}`} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: productDetails.description }}>
                    </p>
                </div>
                <div className="col-12 col-md-4 mt-5 pt-md-5 ps-md-3">
                    <div className='mt-4'>
                        <div className='search'>
                            <div className='text-start'>
                                <h3 className='recent-post-head'>RECENT POSTS</h3>
                                {
                                    newsfeeds.map(news => <Link to={`/newsFeedDetails/${news.id}`} className="recent-news"><p className='recent-news'><img className='me-2' src={circle} alt="" />{news.title}</p></Link>)

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsFeedDetails;