
import "./Service.css"
import img2 from "../../../img/2.png"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Row, Card, Col } from "react-bootstrap";


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://admin.waterchembd.com/api/get-services')
            .then(res => res.json())
            .then(data => setServices(data))


    }, [])
    const mapServices = services.data;
    console.log(mapServices);

    return (
        <>
            <section>
                <div className='home-service container d-md-flex my-5'>
                    <div className='home-service1 col-12 col-md-6'>
                        <h6>SERVICES WE OFFER</h6>
                        <h2>What Service We Offer</h2>
                    </div>
                    <div className='col-12 col-md-6 home-service2'>
                        <Link to={'service'}> <button>ALL SERVICES</button></Link>
                    </div>

                </div>
            </section>

            {mapServices.map(one =>
                <div className="d-flex">
                    <Row xs={1} md={2} className="g-3 container m-auto">

                        <Col className="">
                            <Card>
                                <Card.Img variant="top" src={`https://admin.waterchembd.com/storage/${one?.image}`} />
                                <Card.Body className="text-start">
                                    <Card.Title>{one?.title}</Card.Title>
                                    <Card.Text>
                                        {
                                            one?.description
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>

                /*    <Card className="container m-auto d-flex ">
                       <Card.Img variant="top" className="img-fluid w-100"  />
                       <Card.Body>
                           <Card.Title></Card.Title>
                           <Card.Text>
                              
                           </Card.Text>
                       </Card.Body>
   
                   </Card> */
            )}



            <div className="container row text-md-center text-left mx-auto my-5">
                <div className="col-12 col-md-6 col-lg-4  pb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top img-fluid" alt="" />

                        <div className="card-body">
                            <h4 className="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p className="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div className="custom-btn">
                                <a href="" className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 pb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top img-fluid" alt="" />

                        <div className="card-body">
                            <h4 className="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p className="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div className="custom-btn">
                                <a href="" className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4  pb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top img-fluid" alt="" />

                        <div className="card-body">
                            <h4 className="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p className="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div className="custom-btn">
                                <a href="" className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 pb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top img-fluid" alt="" />

                        <div className="card-body">
                            <h4 className="card-title text-justify service-h4">Zero-liquid discharge(ZLD)</h4>
                            <p className="card-text text-justify service-p">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto, ducimus non.</p>
                            <div className="custom-btn">
                                <a href="" className="btn btn-success btn-card bg-none float-left p-0">Read More <i
                                    style={{ color: "#00A652", marginLeft: "5px" }} className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-service-btn container w-75 mt-2'>
                    <button className='button-1'>SEE MORE</button>

                </div>

            </div>
        </ >
    );
};

export default Service;