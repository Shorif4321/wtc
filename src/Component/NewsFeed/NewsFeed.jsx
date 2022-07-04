import React, { useEffect, useState } from 'react';
import "./NewsFeed.css"
import newsFeedImage from "../../img/newsFeed1.png"
import newFeed2 from "../../img/newsfeed2.png"
import clock from "../../img/clock.png"
import eye from "../../img/eye.png"
import circle from "../../img/cercle.png"
import { Link } from 'react-router-dom';


const NewsFeed = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [newsfeeds, setNewsfeeds] = useState([]);

    useEffect(() => {
        fetch(' https://admin.waterchembd.com/api/get-news')
            .then(res => res.json())
            .then(data => setNewsfeeds(data?.data))
        console.log(newsfeeds);
    }, [])


    return (
        <div>
            {/* ========== newsFeed banner section start ==========*/}
            <section id='news-feed' className='newsFeed-banner'>
                <div className='col-md-7 mx-auto py-5'>
                    <div className='py-4'>
                        <h1 className='py-5'>NEWSFEED</h1>
                    </div>
                </div>
            </section>

            {/* ========== newsFeed section start ==========*/}
            <section className='container py-5 my-3'>
                <div className='d-md-flex justify-content-between'>
                    <div className='col-12 col-md-8'>
                        {
                            newsfeeds?.map(newsfeed => <div key={newsfeed.id} className="text-start pb-5">
                                <div className='newsFeed'>
                                    <img className='img-fluid rounded w-100' src={`https://admin.waterchembd.com/storage/${newsfeed.image}`} alt="" />
                                    <h1 dangerouslySetInnerHTML={{ __html: newsfeed.title }}></h1>
                                    <div className='d-flex'>
                                        <span className='special-text'><img src={clock} alt="" /> September 7, 2016 </span>
                                        <span className='special-text ml-4'><img src={eye} alt="" /> 834 </span>
                                    </div>

                                    <p dangerouslySetInnerHTML={{ __html: newsfeed.description.slice(0, 100) }}>
                                    </p>
                                    <button><Link className='newsFeedButton' to={`/newsFeedDetails/${newsfeed.id}`}>
                                        Read More {newsfeed.id}
                                    </Link></button>
                                </div>
                            </div>)
                        }



                        {/*    <div className="text-left mt-5">
                            <div className='newsFeed'>
                                <img className='img-fluid' src={newFeed2} alt="" />
                                <h1>Costs Related to Service Callouts and Repairs During the Contract</h1>
                                <div className='d-flex'>
                                    <span className='special-text'><img src={clock} alt="" /> September 7, 2016 </span>
                                    <span className='special-text ml-4'><img src={eye} alt="" /> 834 </span>

                                </div>
                                <p>
                                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem...

                                </p>
                                <button className='mb-5'>
                                    Read More
                                </button>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-12 col-md-4 ">
                        <div className='search'>
                            <div className='text-start'>

                            </div>
                            <div className='text-start'>
                                <h3>RECENT POSTS</h3>
                                <p><img className='me-2' src={circle} alt="" />Costs Related to Service Callouts and Repairs During the Contract</p>
                                <p><img className='me-2' src={circle} alt="" />Cleaning Materials and Lubricants Required for Maintenance Cisits
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default NewsFeed;