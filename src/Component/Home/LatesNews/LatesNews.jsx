import React, { useEffect, useState } from 'react';
import "./LatestNews.css"
import imgl1 from "../../../img/l1.png"
import imgl2 from "../../../img/l2.png"
import imgl3 from "../../../img/l3.png"
import { Link } from 'react-router-dom';

const LatesNews = () => {



    const [newses, setNewses] = useState([])
    useEffect(() => {
        fetch(' https://admin.waterchembd.com/api/get-news')
            .then(res => res.json())
            .then(data => setNewses(data?.data.slice(0, 3)))
    }, [])


    return (
        <div>
            <section className="mb-0">
                <div className="service-section pt-4 mb-5"></div>
                <div className="container">
                    <div className="title  latest-head">
                        <h3 className="text-uppercase custom-service pt-2">News & Article</h3>
                        <h2 className="font-weight-bold text-uppercase mb-5">Latest News</h2>
                    </div>

                    <div className="row pb-5 text-start">
                        {
                            newses.map(news => <div key={news.id} className="col-12 col-md-6 col-lg-4 pb-5">
                                <img className="img-fluid w-100 object-fit-cover rounded" src={`https://admin.waterchembd.com/storage/${news.image}`} alt="" />
                                {/* <p className="latest text-muted mt-3">Super User | April 30, 2022</p> */}
                                <h6 className="my-2" dangerouslySetInnerHTML={{ __html: news.title }}></h6>
                                <p className="latest text-muted " dangerouslySetInnerHTML={{ __html: news.description.slice(0, 100) }}>
                                </p>
                                <Link to={`/newsFeedDetails/${news.id}`} className="btn btn-success btn-card text-dark text-uppercase bg-none float-left p-0 mt-2"
                                    href="">Read More ...<i style={{ color: "#000" }} className="fa fa-angles-right"></i></Link>
                            </div>)
                        }

                    </div>

                    <div className='home-service-btn container w-75 my-4'>
                        <Link to="/"> <button className='button-1'>SEE MORE</button></Link>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default LatesNews;