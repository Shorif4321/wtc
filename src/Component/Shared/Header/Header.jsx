import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadTop from '../HeadTop/HeadTop';
import "./Header.css"
import logo from "../../../img/logo.svg"

const Header = () => {
    return (
        <div>
            <HeadTop></HeadTop>

            <Navbar className='nav-main' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className='logo img-fluid' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto route-item-main">

                            <Nav.Link className=''><Link className='route-item' to="/home">Home</Link></Nav.Link>

                            <div className='myBorder'>
                                <Nav.Link ><Link className='route-item' to="about-us">About Us</Link></Nav.Link>
                            </div>
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
                            <div className='myBorder'>
                                <Nav.Link> <Link className=' route-item' to="news-feed">newsfeed</Link> </Nav.Link>
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
                        <Nav>


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