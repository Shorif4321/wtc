import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md bg-color navbar-dark">
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
            </nav>
        </div>
    );
};

export default Header;
<h1>head</h1>