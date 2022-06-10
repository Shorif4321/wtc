import React from 'react';
import About from './About/About';
import ClientBrands from './ClientBrands/ClientBrands';
import LatesNews from './LatesNews/LatesNews';
import ProductItems from './ProductItems/ProductItems';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Service></Service>
            <About></About>
            <ProductItems></ProductItems>
            <ClientBrands></ClientBrands>
            <LatesNews></LatesNews>
            
        </div>
    );
};

export default Home;