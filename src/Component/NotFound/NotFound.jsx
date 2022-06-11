import React from 'react';
import "./NotFound.css"
import { Link } from 'react-router-dom';

const NotFoun = () => {
    return (
        <div className="error-page container">
            <h1 className="text-primary">404</h1>
            <h2>Page not Found</h2>
            <div className='col-12 col-md-6 m-auto'>
                <h6 className="des m-auto my-5">we are sorry The page you requested is not found. Plase go back to the Home page or contact ust @gmail.com</h6>
            </div>
            <Link to="/home"><button className="btn-primary mb-5 rounded mx-2 p-3">Back to Home</button></Link>
        </div>
    );
};

export default NotFoun;