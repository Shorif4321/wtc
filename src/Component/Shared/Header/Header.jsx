import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import HeadTop from '../HeadTop/HeadTop';
import "./Header.css"
import logo from "../../../img/logo.svg"
import search from "../../../img/search.png"

const Header = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-md bg-color navbar-dark">
                <div className="container">
                    <a href="" className="navbar-brand h1"></a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myMenu">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item nav-mr"><a href="" className="nav-link text-white text-uppercase">Home</a></li>
                            <li className="nav-item nav-mr"><a href="" className="nav-link text-white text-uppercase">About Us</a></li>
                            <li className="nav-item nav-mr dropdown">
                                <a href="" className="nav-link text-white text-uppercase dropdown-toggle" data-toggle="dropdown">Product</a>
                                <ul className="dropdown-menu bg-light text-dark">
                                    <li><a href="" className="dropdown-item">Product One</a></li>
                                    <li><a href="" className="dropdown-item">Product Two</a></li>
                                    <li><a href="" className="dropdown-item">Product Three</a></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-mr dropdown">
                                <a href="" className="nav-link text-white text-uppercase dropdown-toggle" data-toggle="dropdown">Service</a>
                                <ul className="dropdown-menu bg-light text-dark">
                                    <li><a href="" className="dropdown-item">Design, Fabrication & Maintenance</a></li>
                                    <li><a href="" className="dropdown-item">Environmental Assessment & Documentation</a></li>
                                    <li><a href="" className="dropdown-item">Chemicals & Machineries</a></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-mr"><a href="" className="nav-link text-white text-uppercase">Newsspeed</a></li>
                            <li className="nav-item nav-mr"><a href="" className="nav-link text-white text-uppercase">Event</a></li>
                            <li className="nav-item nav-mr"><a href="" className="nav-link text-white text-uppercase">Gallery</a></li>
                            <li className="nav-item nav-mr"><a href="" className="nav-link text-white text-uppercase">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <HeadTop></HeadTop>

            <Navbar className='nav-main' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className='logo img-fluid' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto route-item-main">
                            <Nav.Link className=''><Link className='route-item' to="/home">Home</Link></Nav.Link>
                            <Nav.Link className='myBorder'> <Link className='route-item' to="about-us">About Us</Link></Nav.Link>

                            <NavDropdown className='myBorder route-item text-white' title="Product" id="collasible-nav-dropdown">
                                <Nav.Link className='drop-item-main'><Link className='drop-item' to="/product">Product</Link> </Nav.Link>
                                <Nav.Link className='drop-item-main'><Link className='drop-item' to="/product">Product</Link> </Nav.Link>
                                <Nav.Link className='drop-item-main'><Link className='drop-item' to="/product">Product</Link> </Nav.Link>
                                <NavDropdown.Divider />
                                <Nav.Link className='drop-item-main'><Link className='drop-item' to="/product">Product</Link> </Nav.Link>
                            </NavDropdown>

                            <NavDropdown className='myBorder route-item text-white ' title="Service" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='myBorder'> <Link className=' route-item' to="news-feed">newsfeed</Link> </Nav.Link>
                            <Nav.Link className='myBorder'> <Link className=' route-item' to="event">event</Link>  </Nav.Link>
                            <Nav.Link className='myBorder'> <Link className=' route-item' to="gallery">gallery</Link> </Nav.Link>
                            <Nav.Link className='myBorder'> <Link className=' route-item ' to="contact-us ">contact us</Link>  </Nav.Link>
                        </Nav>
                        
                       {/*  <Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button> 
                            </Form>
                        </Nav> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
<h1>head</h1>