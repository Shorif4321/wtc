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

                            <NavDropdown className='myBorder route-item text-white' title="Product" id="collasible-nav-dropdown">
                                <Nav.Link className='drop-item-main'><Link className='drop-item' to="/product">Product</Link> </Nav.Link>
                            </NavDropdown>

                            <NavDropdown className='myBorder route-item' title="Service" id="collasible-nav-dropdown">
                                {/* ====== ===== service Dropdown  Menu start ============ */}
                                <div class="menu">
                                    {
                                        drovdawnServices?.map(dropdawn => <ul key={dropdawn.id}>
                                            <li><Link to="/service">Service &#x203A;</Link>

                                                <ul>
                                                    <li> <Link to="/service"> Service {dropdawn.services.title}</Link> </li>
                                                    <li> <a href="https://www.google.com/"> Development soe mte tei </a> </li>
                                                    <li> <a href="https://www.google.com/"> Development soe mte tei </a> </li>
                                                    <li> <a href="https://www.google.com/"> Development soe mte tei </a> </li>
                                                </ul>
                                            </li>
                                        </ul>

                                        )}

                                </div>


                                {/* ====== ===== service Dropdown  Menu start ============ */}

                                {/*  {
                                    drovdawnServices?.map(dropdawn => <NavDropdown key={dropdawn.id} className=' myBorder route-item text-black' title={dropdawn.menu_name} id="collasible-nav-dropdown">

                                        {
                                            <ul className='myul'>
                                                <Nav.Link className='route-item text-black'><Link className='text-decoration-none text-secondary' to="/service">
                                                    Service 1
                                                </Link> </Nav.Link>
                                            </ul>
                                        }


                                    </NavDropdown>


                                    )
                                } */}

                            </NavDropdown>



                            {/* <Nav.Link className='drop-item-main'><Link className='drop-item' to="/service">Service</Link> </Nav.Link>
                                <Nav.Link className='drop-item-main'><Link className='drop-item' to="/service">Service</Link> </Nav.Link>
                                <Nav.Link className='drop-item-main'><Link className='drop-item' to="/product">Service</Link> </Nav.Link>
                                <NavDropdown.Divider />
                                <Nav.Link className='drop-item-main'><Link className='drop-item' to="/product">Service</Link> </Nav.Link> */}



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