import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as React from "react";
import './App.css';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import Event from './Component/Event/Event';
import Gallery from './Component/Gallery/Gallery';
import Home from './Component/Home/Home';
import NewsFeed from './Component/NewsFeed/NewsFeed';
import ProductPage from './Component/ProductPage/ProductPage';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';
import Service from './Component/Home/Service/Service';
import NotFound from './Component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="service" element={<Service />} />
          <Route path="news-feed" element={<NewsFeed />} />
          <Route path="event" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
