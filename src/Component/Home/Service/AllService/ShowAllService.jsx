import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowAllService = () => {
    const [showServices, setShowServices] = useState([])
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-services')
            .then(res => res.json())
            .then(data => setShowServices(data.data))
    }, [])

    return (
        <div>
            <div className="container row text-md-center text-left mx-auto my-5">
                {
                    showServices?.map(showService =>
                        <div className="col-12 col-md-6 col-lg-4  pb-4" key={showService.id}>
                            <div className="card">
                                <img src={`https://admin.waterchembd.com/storage/${showService.image}`} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title text-justify service-h4"> {showService.title} </h4>
                                    <div />
                                    <p className="card-text text-justify service-p" dangerouslySetInnerHTML={{ __html: showService.description.slice(0, 100) }} />
                                    <div className="custom-btn">
                                        <Link to={`/serviceDetails/${showService.id}`} className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                            style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default ShowAllService;