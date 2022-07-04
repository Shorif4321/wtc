import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadTop from '../HeadTop/HeadTop';
import "./Header.css"
import logo from "../../../img/logo.svg"
import { useState } from 'react';
import { useEffect } from 'react';
import { Dropdown } from 'bootstrap';

const Header = () => {


    const [dropProducts, dripProducts] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-products")
            .then(res => res.json())
            .then(data => dripProducts(data?.data))
        console.log(dropProducts);
    }, {})


    const [drovdawnServices, setDropdawnServices] = useState([]);
    useEffect(() => {
        fetch("https://admin.waterchembd.com/api/get-service-menus")
            .then(res => res.json())
            .then(data => setDropdawnServices(data?.data))
    }, {})

    return (
        <div>
            <HeadTop></HeadTop>
            <Navbar className='nav-main' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className='logo img-fluid' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto route-item-main">
                            <Nav.Link className=''><Link className='route-item' to="/">Home</Link></Nav.Link>
                            <div className='myBorder'>
                                <Nav.Link ><Link className='route-item' to="about-us">About Us</Link></Nav.Link>
                            </div>
                            {/* =============== Product Drop Down start =============== */}
                            <NavDropdown className='myBorder route-item text-white' title="Product" id="collasible-nav-dropdown">
                                {/*  {
                                    dropProducts?.map(product => <Link to={`/productDetails/${product.id}`} className='product-url'>{product.title} </Link>)
                                } */}

                                {
                                    drovdawnServices?.map(dropdawn =>
                                        <ul className="product-url" key={dropdawn.id}>

                                            {
                                                dropdawn.services.map(services =>
                                                    <li className='footer-Nav'  ><Link className='footer-Nav' to={`/serviceDetails/${services.id}`}>{services.title}</Link>
                                                    </li>
                                                )
                                            }

                                        </ul>
                                    )}

                            </NavDropdown>


                            {/* =============== Service Drop Down start =============== */}
                            <NavDropdown className='myBorder route-item' title="Service" id="collasible-nav-dropdown">
                                <div class="menu">
                                    {
                                        drovdawnServices?.map(dropdawn =>

                                            <ul key={dropdawn.id}>
                                                <li><Link className='footer-Nav' to="/service">{dropdawn.menu_name} &#x203A;</Link>
                                                    <ul>
                                                        {
                                                            dropdawn.services.map(services =>
                                                                <li> <Link className='footer-Nav' to={`/serviceDetails/${services.id}`}>  {services.title}</Link> </li>
                                                            )
                                                        }
                                                    </ul>
                                                </li>
                                            </ul>
                                        )}
                                </div>
                            </NavDropdown>

                            <div className='myBorder'>
                                <Nav.Link> <Link className=' route-item' to="news-feed">newsFeed</Link> </Nav.Link>
                            </div>
                            <div className='myBorder'>
                                <Nav.Link> <Link className=' route-item' to="event">event</Link>  </Nav.Link>
                            </div>
                            <div className='myBorder'>
                                <Nav.Link> <Link className=' route-item' to="gallery">gallery</Link> </Nav.Link>
                            </div>

                            <div className='myBorder'>
                                <Nav.Link > <Link className=' route-item text-right' to="contact-us ">contact us</Link>  </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
<h1>head</h1>