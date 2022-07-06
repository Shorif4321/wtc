import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { title, description, image, id } = props?.service;

    return (
        <div className="col-12 col-md-6 col-lg-4  pb-4">
            <div className="card">
                <img src={`https://admin.waterchembd.com/storage/${image}`} alt="" />
                <div className="card-body">
                    <h4 className="card-title text-justify service-h4"> {title} </h4>
                    <div />
                    <p className="card-text text-justify service-p" dangerouslySetInnerHTML={{ __html: description }} />
                    <div className="custom-btn">
                        <Link to={`/serviceDetails/${id}`} className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                            style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;