
import "./Service.css"
import img2 from "../../../img/2.png"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import SingleService from "./SingleService/SingleService";
const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const allServices = services?.data?.slice(0, 6);

    return (
        <>
            <section>
                <div className='home-service container d-md-flex my-5'>
                    <div className='home-service1 col-12 col-md-6'>
                        <h6>SERVICES WE OFFER</h6>
                        <h2>What Service We Offer</h2>
                    </div>
                    <div className='col-12 col-md-6 home-service2'>
                        <Link to="/allServices"> <button>ALL SERVICES</button></Link>
                    </div>

                </div>
            </section>

            <div className="container row text-md-center text-left mx-auto my-5">
                {

                    allServices?.map(service => <SingleService
                        key={service?.id}
                        service={service}
                    ></SingleService>)

                }
                <div className='home-service-btn container w-75 mt-2'>
                    <Link to="/allServices"> <button className='button-1'>SEE MORE</button></Link>

                </div>
            </div>
        </ >
    );
};

export default Service;