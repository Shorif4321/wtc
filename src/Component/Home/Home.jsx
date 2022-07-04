import React, { useEffect } from 'react';
import About from './About/About';
import ClientBrands from './ClientBrands/ClientBrands';
import LatesNews from './LatesNews/LatesNews';
import ProductItems from './ProductItems/ProductItems';
import Service from './Service/Service';
import Slider from './Slider/Slider';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <About></About>
            <ProductItems></ProductItems>
            <ClientBrands></ClientBrands>
            <LatesNews></LatesNews>

        </div>
    );
};

export default Home;