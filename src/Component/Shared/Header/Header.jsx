import React from 'react';
import { Navbar, Container, Nav, NavDropdown,Tabs, Tab} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import HeadTop from '../HeadTop/HeadTop';
import "./Header.css"
import logo from "../../../img/logo.svg"
import search from "../../../img/search.png"

const Header = () => {
    return (
        <div>
            {/* <nav class="navbar navbar-expand-md bg-color navbar-dark">
                <div class="container">
                    <a href="" class="navbar-brand h1"></a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="myMenu">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item nav-mr"><a href="" class="nav-link text-white text-uppercase">Home</a></li>
                            <li class="nav-item nav-mr"><a href="" class="nav-link text-white text-uppercase">About Us</a></li>
                            <li class="nav-item nav-mr dropdown">
                                <a href="" class="nav-link text-white text-uppercase dropdown-toggle" data-toggle="dropdown">Product</a>
                                <ul class="dropdown-menu bg-light text-dark">
                                    <li><a href="" class="dropdown-item">Product One</a></li>
                                    <li><a href="" class="dropdown-item">Product Two</a></li>
                                    <li><a href="" class="dropdown-item">Product Three</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav-mr dropdown">
                                <a href="" class="nav-link text-white text-uppercase dropdown-toggle" data-toggle="dropdown">Service</a>
                                <ul class="dropdown-menu bg-light text-dark">
                                    <li><a href="" class="dropdown-item">Design, Fabrication & Maintenance</a></li>
                                    <li><a href="" class="dropdown-item">Environmental Assessment & Documentation</a></li>
                                    <li><a href="" class="dropdown-item">Chemicals & Machineries</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav-mr"><a href="" class="nav-link text-white text-uppercase">Newsspeed</a></li>
                            <li class="nav-item nav-mr"><a href="" class="nav-link text-white text-uppercase">Event</a></li>
                            <li class="nav-item nav-mr"><a href="" class="nav-link text-white text-uppercase">Gallery</a></li>
                            <li class="nav-item nav-mr"><a href="" class="nav-link text-white text-uppercase">Contact Us</a>
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
                        <Nav className="me-auto route-item-main">
                            <Nav.Link ><Link className='route-item' to="/Home">Home</Link></Nav.Link>
                            <Nav.Link> <Link className='route-item' to="about-us">About Us</Link></Nav.Link>
                            <NavDropdown className='route-item text-white' title="Product" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='route-item text-white' title="Service" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link> <Link className='route-item' to="news-feed">newsfeed</Link> </Nav.Link>
                            <Nav.Link> <Link className='route-item' to="event">event</Link>  </Nav.Link>
                            <Nav.Link> <Link className='route-item' to="gallery">gallery</Link> </Nav.Link>
                            <Nav.Link> <Link className='route-item' to="contact-us">contact us</Link>  </Nav.Link>
                        </Nav>
                        <Nav>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
<h1>head</h1>