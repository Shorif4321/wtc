import React from 'react';
import "./NewsFeed.css"
import newsFeedImage from "../../img/newsFeed1.png"
import newsFeedImage2 from "../../img/newsfeed2.png"
import newFeed2 from "../../img/newsfeed2.png"
import clock from "../../img/clock.png"
import eye from "../../img/eye.png"
import search from "../../img/search.png"
import okay from "../../img/okaySign.png"
import circle from "../../img/cercle.png"


const NewsFeed = () => {
    return (
        <div>
            {/* ========== newsFeed banner section start ==========*/}
            <section className='newsFeed-banner'>
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
                        <div className="text-left">
                            <div className='newsFeed'>
                                <img className='img-fluid' src={newsFeedImage} alt="" />
                                <h1>Costs Related to Service Callouts and Repairs During the Contract</h1>
                                <div className='d-flex'>
                                    <span className='special-text'><img src={clock} alt="" /> September 7, 2016 </span>
                                    <span className='special-text ml-4'><img src={eye} alt="" /> 834 </span>

                                </div>
                                <p>
                                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem...

                                </p>
                                <button>
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="text-left mt-5">
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
                        </div>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <div className='search'>
                      {/*   <div className=''>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                                <button class=" btn  my-2 my-sm-0" type="submit"><img src={search} alt="" /></button>
                            </form>
                        </div> */}
                       <div className='text-left'>
                      {/*  <h3>CATEGORIES</h3>
                        <p><img className='mr-3' src={okay} alt="" />Articles</p>
                        <p><img className='mr-3' src={okay} alt="" />Events
                        </p>
                        <p><img className='mr-3' src={okay} alt="" />General</p>
                        <p><img className='mr-3' src={okay} alt="" />News</p>
                        <p><img className='mr-3' src={okay} alt="" />Post</p> */}
                       </div>
                       <div className='text-left'>
                       <h3>RECENT POSTS</h3>
                        <p><img className='mr-2' src={circle} alt="" />Costs Related to Service Callouts and Repairs During the Contract</p>
                        <p><img className='mr-2' src={circle} alt="" />Cleaning Materials and Lubricants Required for Maintenance Cisits
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